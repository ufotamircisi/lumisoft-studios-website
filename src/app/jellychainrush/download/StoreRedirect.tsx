"use client";

import { useEffect } from "react";
import { REDIRECT_FLAG, getStoreDestination } from "./deviceRedirect";

export default function StoreRedirect() {
  useEffect(() => {
    // The inline script in page.tsx normally wins the race; this effect only
    // covers the case where it was stripped or blocked before it could run.
    if ((window as unknown as Record<string, unknown>)[REDIRECT_FLAG]) {
      return;
    }

    const userAgent = navigator.userAgent || navigator.vendor || "";
    const destination = getStoreDestination(userAgent, navigator.maxTouchPoints);

    if (!destination) {
      return;
    }

    (window as unknown as Record<string, unknown>)[REDIRECT_FLAG] = 1;
    window.location.href = destination;
  }, []);

  // Renders nothing: the fallback buttons must stay tappable at all times.
  return null;
}
