"use client";

import { useEffect } from "react";
import { getStoreDestination } from "./deviceRedirect";

export default function StoreRedirect() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || "";
    const destination = getStoreDestination(
      userAgent,
      navigator.maxTouchPoints,
    );

    if (!destination) {
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.replace(destination);
    }, 350);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return null;
}
