"use client";
import { useEffect } from "react";

/** Motion is an enhancement. Content remains complete without it. */
export default function ProductMotion() {
  useEffect(() => {
    const targets = document.querySelectorAll(".hero-composition, .game-chapter, .app-screens, .product-scene, .baby-feature-group");
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("has-entered");
      }
    }, { threshold: 0.18 });
    targets.forEach(target => observer.observe(target));
    const visibility = () => document.documentElement.classList.toggle("motion-paused", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    visibility();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      document.documentElement.classList.remove("motion-paused");
    };
  }, []);
  return null;
}
