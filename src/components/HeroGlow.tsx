"use client";

import { useEffect, useRef } from "react";

/**
 * Mouse-reactive radial glow layered behind hero content.
 * Renders nothing meaningful for touch devices or reduced motion.
 */
export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;

    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const parent = node.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        node.style.opacity = "1";
        node.style.background = `radial-gradient(560px circle at ${
          e.clientX - rect.left
        }px ${e.clientY - rect.top}px, rgba(139,92,246,0.13), transparent 65%)`;
      });
    };

    const onLeave = () => {
      node.style.opacity = "0";
    };

    const parent = node.parentElement;
    parent?.addEventListener("pointermove", onMove);
    parent?.addEventListener("pointerleave", onLeave);
    return () => {
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
    />
  );
}
