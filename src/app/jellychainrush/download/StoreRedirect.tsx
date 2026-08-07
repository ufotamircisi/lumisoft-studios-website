"use client";

import { useEffect } from "react";
import {
  REDIRECT_DELAY_MS,
  REDIRECT_FLAG,
  getAutoRedirectDestination,
} from "./deviceRedirect";

export default function StoreRedirect() {
  useEffect(() => {
    // The inline script in page.tsx normally wins the race; this effect only
    // covers the case where it was stripped or blocked before it could run.
    const win = window as unknown as Record<string, unknown>;
    if (win[REDIRECT_FLAG]) {
      return;
    }

    const userAgent = navigator.userAgent || navigator.vendor || "";
    const destination = getAutoRedirectDestination(
      userAgent,
      navigator.maxTouchPoints,
    );

    if (!destination) {
      return;
    }

    const timer = window.setTimeout(() => {
      win[REDIRECT_FLAG] = 1;
      window.location.href = destination;
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  // Renders nothing: the fallback buttons must stay tappable at all times.
  return null;
}
