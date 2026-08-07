// Guards the Jelly Chain Rush smart download page. It is the single link that
// gets shared publicly, so a bad storefront code or a JS-only store button is a
// production incident, not a cosmetic bug.
//
// Two halves:
//   1. Device detection — getStoreDestination and the pre-hydration inline
//      script must agree, for every user agent we care about.
//   2. Rendered output — the exported HTML must carry both store URLs as real
//      anchor hrefs, so the page still works with no JavaScript at all.
//   3. Storefront — no Jelly Chain Rush App Store link anywhere in the source
//      or the export may point at a storefront other than the published one.
//      A wrong two-letter country code (this shipped as /ng/ once) silently
//      breaks every Apple device while leaving Android perfectly healthy.

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Required as plain CommonJS, not the .ts source, because this script runs
// under plain Node on Cloudflare with no TypeScript loader. See that module
// for why the detection logic lives there instead of inline here.
const {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  REDIRECT_FLAG,
  REDIRECT_INLINE_SCRIPT,
  getStoreDestination,
} = require("../src/lib/jellyChainRushDeviceRedirect.cjs");

const FALLBACK = null;

// The canonical storefront, written out literally so the check cannot drift
// along with the constant it is guarding.
const CANONICAL_APP_STORE_URL =
  "https://apps.apple.com/tr/app/jelly-chain-rush-match-3/id6790545058";
const CANONICAL_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush";

// Any apps.apple.com link carrying the Jelly Chain Rush app id, whatever
// storefront it claims.
const JELLY_APP_STORE_LINK = /https:\/\/apps\.apple\.com\/\S*?id6790545058/g;

const cases = [
  {
    name: "iPhone Safari",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPhone Chrome (CriOS)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0.6478.54 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPhone Firefox (FxiOS)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/127.0 Mobile/15E148 Safari/605.1.15",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPhone Instagram in-app browser",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 334.0.3.28.103 (iPhone14,3; iOS 17_5; en_US)",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPhone Facebook in-app browser (FBAV)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/468.0.0.42.107]",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPhone TikTok in-app browser",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_34.5.0 JsSdk/2.0 NetType/WIFI",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPad Safari (mobile UA)",
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPadOS desktop-mode Safari (Macintosh UA + touch)",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "iPod touch",
    userAgent:
      "Mozilla/5.0 (iPod touch; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expected: APP_STORE_URL,
  },
  {
    name: "Android phone Chrome",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
    maxTouchPoints: 5,
    expected: GOOGLE_PLAY_URL,
  },
  {
    name: "Android phone Instagram in-app browser",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Instagram 334.0.0.42.95",
    maxTouchPoints: 5,
    expected: GOOGLE_PLAY_URL,
  },
  {
    name: "Android tablet (no Mobile token) — fallback, never the App Store",
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 5,
    expected: FALLBACK,
  },
  {
    name: "Windows desktop Chrome",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 0,
    expected: FALLBACK,
  },
  {
    name: "Windows touchscreen laptop",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 10,
    expected: FALLBACK,
  },
  {
    name: "macOS desktop Safari without touch",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    maxTouchPoints: 0,
    expected: FALLBACK,
  },
  {
    name: "macOS desktop Chrome without touch",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 0,
    expected: FALLBACK,
  },
  {
    name: "unknown / empty user agent",
    userAgent: "",
    maxTouchPoints: 0,
    expected: FALLBACK,
  },
  {
    name: "crawler user agent",
    userAgent:
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    maxTouchPoints: 0,
    expected: FALLBACK,
  },
];

const failures = [];

// Runs the shipped inline script against a stub window/navigator and reports
// where it would have navigated. This is the code path that actually executes
// on the phone, so it is tested directly rather than by inspection.
function runInlineScript(userAgent, maxTouchPoints) {
  const windowStub = {
    navigator: { userAgent, maxTouchPoints, vendor: "" },
    location: { href: "https://lumisoftstudios.com/jellychainrush/download/" },
  };
  windowStub.window = windowStub;

  const context = vm.createContext(windowStub);
  vm.runInContext(REDIRECT_INLINE_SCRIPT, context);

  return windowStub[REDIRECT_FLAG] ? windowStub.location.href : null;
}

for (const testCase of cases) {
  const actual = getStoreDestination(testCase.userAgent, testCase.maxTouchPoints);
  if (actual !== testCase.expected) {
    failures.push(
      `getStoreDestination — ${testCase.name}: expected ${testCase.expected} but got ${actual}`,
    );
  }

  const inline = runInlineScript(testCase.userAgent, testCase.maxTouchPoints);
  if (inline !== testCase.expected) {
    failures.push(
      `inline script — ${testCase.name}: expected ${testCase.expected} but got ${inline}`,
    );
  }
}

if (APP_STORE_URL !== CANONICAL_APP_STORE_URL) {
  failures.push(`APP_STORE_URL changed unexpectedly: ${APP_STORE_URL}`);
}
if (GOOGLE_PLAY_URL !== CANONICAL_GOOGLE_PLAY_URL) {
  failures.push(`GOOGLE_PLAY_URL changed unexpectedly: ${GOOGLE_PLAY_URL}`);
}

// The download route and the shared product catalogue hold the same two URLs
// in two places; they drifted apart once and only the catalogue kept /ng/.
// Read as text rather than required as a module: products.ts is TypeScript
// (it declares real interfaces/types, not just erasable annotations), and
// this script must run under plain Node with no TypeScript loader.
const productsSourcePath = path.resolve("src/lib/products.ts");
const productsSource = fs.readFileSync(productsSourcePath, "utf8");
const jellyChainRushBlockMatch = productsSource.match(
  /jellyChainRush:\s*\{([\s\S]*?)\n\s*\},/,
);

if (!jellyChainRushBlockMatch) {
  failures.push(
    `${productsSourcePath}: could not locate the jellyChainRush STORE_URLS entry`,
  );
} else {
  const block = jellyChainRushBlockMatch[1];
  const appStoreMatch = block.match(/appStore:\s*"([^"]+)"/);
  const googlePlayMatch = block.match(/googlePlay:\s*"([^"]+)"/);

  if (!appStoreMatch || appStoreMatch[1] !== CANONICAL_APP_STORE_URL) {
    failures.push(
      `src/lib/products.ts: jellyChainRush.appStore is ${appStoreMatch ? appStoreMatch[1] : "missing"}`,
    );
  }
  if (!googlePlayMatch || googlePlayMatch[1] !== CANONICAL_GOOGLE_PLAY_URL) {
    failures.push(
      `src/lib/products.ts: jellyChainRush.googlePlay is ${googlePlayMatch ? googlePlayMatch[1] : "missing"}`,
    );
  }
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

// Sweep every authored source file and every exported artifact. Catching this
// by grep-equivalent rather than by known filename means a new page that
// hardcodes its own Jelly Chain Rush link is caught too.
const scanRoots = ["src", "public", "out"].map((dir) => path.resolve(dir));
const scannable = /\.(tsx?|jsx?|mjs|css|html|txt|json|xml|webmanifest)$/i;
let scannedFiles = 0;

for (const root of scanRoots) {
  for (const file of walk(root)) {
    if (!scannable.test(file)) continue;

    const contents = fs.readFileSync(file, "utf8");
    if (!contents.includes("id6790545058")) continue;

    scannedFiles += 1;
    const displayName = path.relative(process.cwd(), file);

    for (const link of new Set(contents.match(JELLY_APP_STORE_LINK) ?? [])) {
      // Trim the trailing punctuation the greedy scan can pick up in JS bundles.
      const cleaned = link.replace(/[\\"'`,;)\]}]+$/, "");
      if (cleaned !== CANONICAL_APP_STORE_URL) {
        failures.push(
          `${displayName}: non-canonical Jelly Chain Rush App Store link ${cleaned}`,
        );
      }
    }
  }
}

if (scannedFiles === 0) {
  failures.push(
    "storefront scan matched no files — the scan is not actually checking anything",
  );
}

const pagePath = path.resolve("out", "jellychainrush", "download", "index.html");

if (!fs.existsSync(pagePath)) {
  failures.push(
    `${pagePath} is missing. Run the production build before this check.`,
  );
} else {
  const html = fs.readFileSync(pagePath, "utf8");
  const escapedPlayUrl = GOOGLE_PLAY_URL.replaceAll("&", "&amp;");

  if (!html.includes(`href="${APP_STORE_URL}"`)) {
    failures.push(
      "fallback markup: App Store link is not a plain anchor href in the exported HTML",
    );
  }
  if (
    !html.includes(`href="${GOOGLE_PLAY_URL}"`) &&
    !html.includes(`href="${escapedPlayUrl}"`)
  ) {
    failures.push(
      "fallback markup: Google Play link is not a plain anchor href in the exported HTML",
    );
  }
  if (html.includes("/jelly-chain-rush/download")) {
    failures.push(
      "fallback markup: wrong route /jelly-chain-rush/download is referenced",
    );
  }
  if (!html.includes('id="jcr-store-redirect"')) {
    failures.push(
      "fallback markup: the pre-hydration redirect script was not inlined",
    );
  }
  // A store button hidden behind an overlay is indistinguishable from a broken
  // link on a phone, so the anchors must not opt out of pointer events.
  if (/pointer-events-none[^"]*"[^>]*href="https:\/\/(apps\.apple|play\.google)/.test(html)) {
    failures.push("fallback markup: a store anchor has pointer events disabled");
  }
}

if (failures.length > 0) {
  console.error(`Jelly Chain Rush download route check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `✓ Verified Jelly Chain Rush download route: ${cases.length} device-detection cases (module + inline script), fallback anchor markup, and ${scannedFiles} files carrying the App Store link — all on the canonical storefront.`,
);
