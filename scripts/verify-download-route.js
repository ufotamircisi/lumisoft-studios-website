// Guards the Jelly Chain Rush smart download page. It is the single link that
// gets shared publicly — and the one paid ads point at — so a bad storefront
// code, a JS-only store button, or an auto-redirect that fires before the
// fallback UI can render is a production incident, not a cosmetic bug.
//
// Four halves:
//   1. Device detection — getStoreDestination/getAutoRedirectDestination and
//      the pre-hydration inline script must agree, for every user agent we
//      care about, including in-app browsers (Instagram, WhatsApp, TikTok,
//      Facebook), which must never get an automatic redirect.
//   2. Rendered output — the exported HTML must carry both store URLs as real
//      anchor hrefs and the visible helper text, so the page still works
//      with no JavaScript and no successful auto-redirect at all.
//   3. Storefront — no Jelly Chain Rush App Store link anywhere in the source
//      or the export may point at a storefront other than the published one.
//      A wrong two-letter country code (this shipped as /ng/ once, then
//      /tr/) silently breaks every Apple device while leaving Android
//      perfectly healthy.
//   4. Timing — the auto-redirect for normal browsers must be delayed
//      (1000-1500ms), never immediate, so the fallback UI always has time to
//      paint first.

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
  REDIRECT_DELAY_MS,
  REDIRECT_INLINE_SCRIPT,
  getStoreDestination,
  getAutoRedirectDestination,
  isInAppBrowser,
} = require("../src/lib/jellyChainRushDeviceRedirect.cjs");

const FALLBACK = null;

// The canonical storefront, written out literally so the check cannot drift
// along with the constant it is guarding. Countryless on purpose: a
// storefront-specific URL (/tr/, /ng/, ...) has broken this link before.
const CANONICAL_APP_STORE_URL = "https://apps.apple.com/app/id6790545058";
const CANONICAL_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush";

const MIN_REDIRECT_DELAY_MS = 1000;
const MAX_REDIRECT_DELAY_MS = 1500;

// Any apps.apple.com link carrying the Jelly Chain Rush app id, whatever
// storefront it claims.
const JELLY_APP_STORE_LINK = /https:\/\/apps\.apple\.com\/\S*?id6790545058/g;

// Literal strings that must never reappear anywhere in the source or export,
// independent of the id-based scan above: past incidents shipped exactly
// these.
const FORBIDDEN_SUBSTRINGS = [
  "apps.apple.com/ng",
  "apps.apple.com/tr/app/jelly-chain-rush-match-3/id6790545058",
  "jelly-chain-rush-match-3/id6790545058",
];

const cases = [
  {
    name: "iPhone Safari",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "iPhone Chrome (CriOS)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0.6478.54 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "iPhone Firefox (FxiOS)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/127.0 Mobile/15E148 Safari/605.1.15",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "Instagram iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 334.0.3.28.103 (iPhone14,3; iOS 17_5; en_US)",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "WhatsApp iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WhatsApp/23.20.79 [FBAN/FBIOS]",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "TikTok iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_34.5.0 JsSdk/2.0 NetType/WIFI",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Facebook iPhone (FBAN/FBIOS)",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/468.0.0.42.107]",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Messenger iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/MessengerForiOS]",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Twitter/X iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Twitter for iPhone",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Line iPhone",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Line/13.7.0",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "iPad Safari (mobile UA)",
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "iPadOS desktop-mode Safari (Macintosh UA + touch)",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "iPod touch",
    userAgent:
      "Mozilla/5.0 (iPod touch; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
    maxTouchPoints: 5,
    expectedStore: APP_STORE_URL,
    expectedAutoRedirect: APP_STORE_URL,
    expectedInApp: false,
  },
  {
    name: "Android phone Chrome",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
    maxTouchPoints: 5,
    expectedStore: GOOGLE_PLAY_URL,
    expectedAutoRedirect: GOOGLE_PLAY_URL,
    expectedInApp: false,
  },
  {
    name: "Instagram Android",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Instagram 334.0.0.42.95",
    maxTouchPoints: 5,
    expectedStore: GOOGLE_PLAY_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "WhatsApp Android",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 WhatsApp/2.23.20.79",
    maxTouchPoints: 5,
    expectedStore: GOOGLE_PLAY_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "TikTok Android",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 musical_ly_34.5.0 JsSdk/2.0 NetType/WIFI",
    maxTouchPoints: 5,
    expectedStore: GOOGLE_PLAY_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Facebook Android (FB_IAB)",
    userAgent:
      "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/468.0.0.42.107;]",
    maxTouchPoints: 5,
    expectedStore: GOOGLE_PLAY_URL,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: true,
  },
  {
    name: "Android tablet (no Mobile token) — fallback, never the App Store",
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 5,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "Windows desktop Chrome",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 0,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "Windows touchscreen laptop",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 10,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "macOS desktop Safari without touch",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    maxTouchPoints: 0,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "macOS desktop Chrome without touch",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    maxTouchPoints: 0,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "unknown / empty user agent",
    userAgent: "",
    maxTouchPoints: 0,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
  {
    name: "crawler user agent",
    userAgent:
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    maxTouchPoints: 0,
    expectedStore: FALLBACK,
    expectedAutoRedirect: FALLBACK,
    expectedInApp: false,
  },
];

const failures = [];

// Runs the shipped inline script against a stub window/navigator and reports
// where it would eventually navigate, plus how long it waited. setTimeout is
// stubbed (not executed automatically) so this reflects exactly what ships:
// the script must *schedule* a delayed navigation, never call
// location.href synchronously.
function runInlineScript(userAgent, maxTouchPoints) {
  const scheduled = [];
  const windowStub = {
    navigator: { userAgent, maxTouchPoints, vendor: "" },
    location: { href: "https://lumisoftstudios.com/jellychainrush/download/" },
    setTimeout: (fn, delay) => {
      scheduled.push({ fn, delay });
      return scheduled.length;
    },
  };
  windowStub.window = windowStub;

  const context = vm.createContext(windowStub);
  vm.runInContext(REDIRECT_INLINE_SCRIPT, context);

  if (scheduled.length === 0) {
    return { destination: null, delay: null };
  }

  const { fn, delay } = scheduled[0];
  fn();

  return {
    destination: windowStub[REDIRECT_FLAG] ? windowStub.location.href : null,
    delay,
  };
}

for (const testCase of cases) {
  const actualStore = getStoreDestination(
    testCase.userAgent,
    testCase.maxTouchPoints,
  );
  if (actualStore !== testCase.expectedStore) {
    failures.push(
      `getStoreDestination — ${testCase.name}: expected ${testCase.expectedStore} but got ${actualStore}`,
    );
  }

  const actualInApp = isInAppBrowser(testCase.userAgent);
  if (actualInApp !== testCase.expectedInApp) {
    failures.push(
      `isInAppBrowser — ${testCase.name}: expected ${testCase.expectedInApp} but got ${actualInApp}`,
    );
  }

  const actualAutoRedirect = getAutoRedirectDestination(
    testCase.userAgent,
    testCase.maxTouchPoints,
  );
  if (actualAutoRedirect !== testCase.expectedAutoRedirect) {
    failures.push(
      `getAutoRedirectDestination — ${testCase.name}: expected ${testCase.expectedAutoRedirect} but got ${actualAutoRedirect}`,
    );
  }

  const inline = runInlineScript(testCase.userAgent, testCase.maxTouchPoints);
  if (inline.destination !== testCase.expectedAutoRedirect) {
    failures.push(
      `inline script — ${testCase.name}: expected ${testCase.expectedAutoRedirect} but got ${inline.destination}`,
    );
  }
  if (testCase.expectedAutoRedirect !== FALLBACK) {
    if (
      inline.delay < MIN_REDIRECT_DELAY_MS ||
      inline.delay > MAX_REDIRECT_DELAY_MS
    ) {
      failures.push(
        `inline script — ${testCase.name}: redirect delay ${inline.delay}ms is outside the required ${MIN_REDIRECT_DELAY_MS}-${MAX_REDIRECT_DELAY_MS}ms window`,
      );
    }
  } else if (inline.delay !== null) {
    failures.push(
      `inline script — ${testCase.name}: scheduled a redirect (${inline.delay}ms) for a visit that must not auto-redirect`,
    );
  }
}

if (
  REDIRECT_DELAY_MS < MIN_REDIRECT_DELAY_MS ||
  REDIRECT_DELAY_MS > MAX_REDIRECT_DELAY_MS
) {
  failures.push(
    `REDIRECT_DELAY_MS is ${REDIRECT_DELAY_MS}ms, outside the required ${MIN_REDIRECT_DELAY_MS}-${MAX_REDIRECT_DELAY_MS}ms window`,
  );
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
const scannable = /\.(tsx?|jsx?|mjs|cjs|css|html|txt|json|xml|webmanifest)$/i;
let scannedFiles = 0;

for (const root of scanRoots) {
  for (const file of walk(root)) {
    if (!scannable.test(file)) continue;

    const contents = fs.readFileSync(file, "utf8");

    for (const forbidden of FORBIDDEN_SUBSTRINGS) {
      if (contents.includes(forbidden)) {
        failures.push(
          `${path.relative(process.cwd(), file)}: forbidden Jelly Chain Rush App Store link fragment "${forbidden}"`,
        );
      }
    }

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
  if (!html.includes("If the store does not open")) {
    failures.push(
      "fallback markup: the in-app-browser helper text is missing from the exported HTML",
    );
  }
  // A store button hidden behind an overlay is indistinguishable from a broken
  // link on a phone, so the anchors must not opt out of pointer events.
  if (/pointer-events-none[^"]*"[^>]*href="https:\/\/(apps\.apple|play\.google)/.test(html)) {
    failures.push("fallback markup: a store anchor has pointer events disabled");
  }
  // The store anchors must be real hrefs the browser can follow with zero JS,
  // never a JS-only handler standing in for navigation.
  if (/href="https:\/\/(apps\.apple|play\.google)[^"]*"[^>]*onclick=/i.test(html)) {
    failures.push("fallback markup: a store anchor relies on a JS onclick handler");
  }
}

if (failures.length > 0) {
  console.error(`Jelly Chain Rush download route check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `✓ Verified Jelly Chain Rush download route: ${cases.length} device-detection cases (store + in-app + auto-redirect + inline script), fallback anchor markup, ${REDIRECT_DELAY_MS}ms redirect delay, and ${scannedFiles} files carrying the App Store link — all on the canonical countryless storefront.`,
);
