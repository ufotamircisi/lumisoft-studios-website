"use client";
import { useEffect, useRef, useState } from "react";

const previews = {
  "neon-siege": { name: "Neon Siege", file: "neon" },
  "jelly-chain-rush": { name: "Jelly Chain Rush", file: "jelly" },
  "roto-blocks": { name: "Roto Blocks", file: "roto" },
};
export default function GameplayPreview({ slug = "neon-siege", lang = "en" }: { slug?: keyof typeof previews; lang?: "en" | "tr" }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wanted = useRef(false), visible = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const tr = lang === "tr", preview = previews[slug];
  const source = `/media/${preview.file}-preview.mp4`;
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 900px) and (pointer: fine)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    wanted.current = !motion.matches && desktop.matches && !connection?.saveData;
    const update = () => {
      if (wanted.current && visible.current && !document.hidden) {
        if (!video.getAttribute("src")) video.src = source;
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting && entry.intersectionRatio >= .35;
      update();
    }, { threshold: [0, .35] });
    observer.observe(video);
    const restrict = () => { if (motion.matches || !desktop.matches) { wanted.current = false; video.pause(); } };
    const exclusive = (event: Event) => { if (event.target !== video) video.pause(); };
    motion.addEventListener("change", restrict);
    desktop.addEventListener("change", restrict);
    document.addEventListener("play", exclusive, true);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect(); video.pause();
      motion.removeEventListener("change", restrict);
      desktop.removeEventListener("change", restrict);
      document.removeEventListener("play", exclusive, true);
      document.removeEventListener("visibilitychange", update);
    };
  }, [source]);
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) { wanted.current = false; video.pause(); }
    else { wanted.current = true; if (!video.getAttribute("src")) video.src = source; void video.play().catch(() => setPlaying(false)); }
  };
  return <div className="gameplay-preview">
    <video ref={videoRef} poster={`/media/${preview.file}-game.webp`} width={390} height={844} muted loop playsInline preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { wanted.current = false; setPlaying(false); setFailed(true); }} aria-label={tr ? `${preview.name} sessiz oynanış önizlemesi` : `${preview.name} silent gameplay preview`} />
    {failed ? <p role="status">{tr ? "Önizleme yüklenemedi. Oyun ekranını görüntülüyorsunuz." : "Preview unavailable. Showing the gameplay screen."}</p> : <button type="button" onClick={toggle} aria-pressed={playing}><span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>{playing ? (tr ? "Önizlemeyi duraklat" : "Pause preview") : (tr ? "Oynanışı izle" : "Watch gameplay")}</button>}
  </div>;
}
