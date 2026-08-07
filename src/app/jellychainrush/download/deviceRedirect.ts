// The actual detection logic lives in a plain CommonJS module so that
// scripts/verify-download-route.js can require it directly under plain Node
// during the Cloudflare build, without a TypeScript loader. This file only
// adds types for the app code that consumes it.
import shared from "@/lib/jellyChainRushDeviceRedirect.cjs";

export const APP_STORE_URL: string = shared.APP_STORE_URL;
export const GOOGLE_PLAY_URL: string = shared.GOOGLE_PLAY_URL;
export const REDIRECT_FLAG: string = shared.REDIRECT_FLAG;
export const REDIRECT_DELAY_MS: number = shared.REDIRECT_DELAY_MS;
export const REDIRECT_INLINE_SCRIPT: string = shared.REDIRECT_INLINE_SCRIPT;

export function isInAppBrowser(userAgent: string): boolean {
  return shared.isInAppBrowser(userAgent);
}

export function getStoreDestination(
  userAgent: string,
  maxTouchPoints = 0,
): string | null {
  return shared.getStoreDestination(userAgent, maxTouchPoints);
}

export function getAutoRedirectDestination(
  userAgent: string,
  maxTouchPoints = 0,
): string | null {
  return shared.getAutoRedirectDestination(userAgent, maxTouchPoints);
}
