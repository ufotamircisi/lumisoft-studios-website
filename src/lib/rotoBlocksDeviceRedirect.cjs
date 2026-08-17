// Plain CommonJS on purpose, for the same reasons as
// jellyChainRushDeviceRedirect.cjs: this is the single source of truth for the
// Roto Blocks smart-download device detection, and it is required directly
// (no TS loader) by both the Next.js app (via deviceRedirect.ts) and
// scripts/verify-rotoblocks-download-route.js during the Cloudflare build,
// which runs plain Node and cannot parse TypeScript type annotations.

const APP_STORE_URL = "https://apps.apple.com/app/id6797314822";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.rotoblocks";

// Set by the pre-hydration inline script once it has started (or intentionally
// skipped) a store redirect, so the React effect never fires a second
// navigation for the same visit.
const REDIRECT_FLAG = "__rbStoreRedirect";

// The redirect is a delayed convenience, not the only path: this is how long
// the fallback UI (title, buttons, helper text) is guaranteed to be visible
// before a normal mobile browser is auto-navigated away.
const REDIRECT_DELAY_MS = 1200;

// Instagram, WhatsApp, TikTok, Facebook/Messenger, Twitter/X and Line all run
// their own in-app WebViews that are unreliable at completing a JS
// `location.href` redirect to a store deep link (blank screen, a redirect
// that silently no-ops, or one that fires but the store sheet never opens).
// They keep the visible landing page instead of racing a timer against a
// navigation that may not work.
const IN_APP_BROWSER_PATTERN =
  /Instagram|WhatsApp|TikTok|musical_ly|Bytedance|FBAN|FBIOS|FB_IAB|FBAV|Messenger|Twitter|Line\//i;

function isInAppBrowser(userAgent) {
  return IN_APP_BROWSER_PATTERN.test(userAgent);
}

function getStoreDestination(userAgent, maxTouchPoints = 0) {
  const isAndroid = /Android/i.test(userAgent);

  // CriOS/FxiOS/EdgiOS/OPiOS only ever appear on iOS, but every one of those
  // browsers also keeps iPhone/iPad in the UA, so they are belt-and-braces.
  const isIOSDevice =
    /iPhone|iPad|iPod/i.test(userAgent) ||
    /CriOS|FxiOS|EdgiOS|OPiOS/i.test(userAgent);

  // iPadOS 13+ in desktop mode reports a Macintosh UA; only a touchscreen
  // separates it from a real Mac.
  const isIPadOSDesktop =
    /Macintosh|Mac OS X/i.test(userAgent) && maxTouchPoints > 1;

  if (!isAndroid && (isIOSDevice || isIPadOSDesktop)) {
    return APP_STORE_URL;
  }

  // Android tablets fall through to the fallback page on purpose.
  if (isAndroid && /Mobile/i.test(userAgent)) {
    return GOOGLE_PLAY_URL;
  }

  return null;
}

// Given a device destination, decides whether this visit should also get an
// automatic, delayed redirect. In-app browsers never do — see
// IN_APP_BROWSER_PATTERN above.
function getAutoRedirectDestination(userAgent, maxTouchPoints = 0) {
  if (isInAppBrowser(userAgent)) {
    return null;
  }

  return getStoreDestination(userAgent, maxTouchPoints);
}

// Runs while the HTML is still parsing, so scheduling the redirect does not
// depend on the React bundle downloading and hydrating. The actual navigation
// is deferred behind window.setTimeout so the fallback UI always has time to
// paint first. Kept in sync with getStoreDestination/isInAppBrowser by
// construction: all three read from the constants and pattern above.
const REDIRECT_INLINE_SCRIPT = `(function(){try{
var n=navigator,u=n.userAgent||n.vendor||"",t=n.maxTouchPoints||0,d=null;
var a=/Android/i.test(u);
if(!a&&(/iPhone|iPad|iPod/i.test(u)||/CriOS|FxiOS|EdgiOS|OPiOS/i.test(u)||((/Macintosh|Mac OS X/i.test(u))&&t>1))){d=${JSON.stringify(APP_STORE_URL)};}
else if(a&&/Mobile/i.test(u)){d=${JSON.stringify(GOOGLE_PLAY_URL)};}
if(!d)return;
if(/${IN_APP_BROWSER_PATTERN.source}/i.test(u))return;
window.setTimeout(function(){window[${JSON.stringify(REDIRECT_FLAG)}]=1;window.location.href=d;},${REDIRECT_DELAY_MS});
}catch(e){}})();`;

module.exports = {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  REDIRECT_FLAG,
  REDIRECT_DELAY_MS,
  IN_APP_BROWSER_PATTERN,
  isInAppBrowser,
  getStoreDestination,
  getAutoRedirectDestination,
  REDIRECT_INLINE_SCRIPT,
};
