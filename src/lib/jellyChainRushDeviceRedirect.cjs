// Plain CommonJS on purpose: this is the single source of truth for the Jelly
// Chain Rush smart-download device detection, and it is required directly
// (no TS loader) by both the Next.js app (via deviceRedirect.ts) and
// scripts/verify-download-route.js during the Cloudflare build, which runs
// plain Node and cannot parse TypeScript type annotations.

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/jelly-chain-rush-match-3/id6790545058";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush";

// Set by the pre-hydration inline script once it has started a store redirect,
// so the React effect never fires a second navigation for the same visit.
const REDIRECT_FLAG = "__jcrStoreRedirect";

function getStoreDestination(userAgent, maxTouchPoints = 0) {
  const isAndroid = /Android/i.test(userAgent);

  // CriOS/FxiOS/EdgiOS/OPiOS only ever appear on iOS, but every one of those
  // browsers also keeps iPhone/iPad in the UA, so they are belt-and-braces.
  // Instagram, TikTok and Facebook in-app browsers keep the iPhone token too.
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

// Runs while the HTML is still parsing, so the redirect does not depend on the
// React bundle downloading and hydrating — in-app browsers (Instagram, TikTok)
// drop that bundle often enough to matter. Kept in sync with
// getStoreDestination by construction: both read from the constants above.
const REDIRECT_INLINE_SCRIPT = `(function(){try{
var n=navigator,u=n.userAgent||n.vendor||"",t=n.maxTouchPoints||0,d=null;
var a=/Android/i.test(u);
if(!a&&(/iPhone|iPad|iPod/i.test(u)||/CriOS|FxiOS|EdgiOS|OPiOS/i.test(u)||((/Macintosh|Mac OS X/i.test(u))&&t>1))){d=${JSON.stringify(APP_STORE_URL)};}
else if(a&&/Mobile/i.test(u)){d=${JSON.stringify(GOOGLE_PLAY_URL)};}
if(d){window[${JSON.stringify(REDIRECT_FLAG)}]=1;window.location.href=d;}
}catch(e){}})();`;

module.exports = {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  REDIRECT_FLAG,
  getStoreDestination,
  REDIRECT_INLINE_SCRIPT,
};
