export const APP_STORE_URL =
  "https://apps.apple.com/tr/app/jelly-chain-rush-match-3/id6790545058";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush";

export function getStoreDestination(
  userAgent: string,
  maxTouchPoints = 0,
) {
  const isIPadOS = /Macintosh/i.test(userAgent) && maxTouchPoints > 1;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent) || isIPadOS;
  const isAndroidPhone =
    /Android/i.test(userAgent) && /Mobile/i.test(userAgent);

  if (isIOS) {
    return APP_STORE_URL;
  }

  if (isAndroidPhone) {
    return GOOGLE_PLAY_URL;
  }

  return null;
}
