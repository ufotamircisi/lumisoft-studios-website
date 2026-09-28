"use client";
import {useEffect,useRef,useState} from "react";
export default function GameplayPreview({lang="en"}:{lang?:"en"|"tr"}) {
 const videoRef=useRef<HTMLVideoElement>(null);
 const wanted=useRef(false),visible=useRef(false);
 const [playing,setPlaying]=useState(false);
 const tr=lang==="tr";
 useEffect(()=>{
  const video=videoRef.current;
  if(!video) return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const desktop=matchMedia('(min-width: 900px) and (pointer: fine)');
  const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
  wanted.current=!motion.matches && desktop.matches && !connection?.saveData;
  const update=()=>{
   if(wanted.current && visible.current && !document.hidden){
    if(!video.getAttribute('src')) video.src='/media/neon-preview.mp4';
    void video.play().catch(()=>setPlaying(false));
   } else video.pause();
  };
  const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;update();},{threshold:.35});
  observer.observe(video);
  const reduce=()=>{ if(motion.matches){wanted.current=false;video.pause();} };
  motion.addEventListener('change',reduce);
  document.addEventListener('visibilitychange',update);
  return ()=>{observer.disconnect();video.pause();motion.removeEventListener('change',reduce);document.removeEventListener('visibilitychange',update);};
 },[]);
 const toggle=()=>{
  const video=videoRef.current;
  if(!video) return;
  if(playing){wanted.current=false;video.pause();}else{wanted.current=true;if(!video.getAttribute('src'))video.src='/media/neon-preview.mp4';void video.play().catch(()=>setPlaying(false));}
 };
 return <div className="gameplay-preview"><video ref={videoRef} poster="/media/neon-game.webp" width={390} height={844} muted loop playsInline preload="none" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} aria-label={tr?"Neon Siege sessiz oynanış önizlemesi":"Neon Siege silent gameplay preview"} /><button type="button" onClick={toggle} aria-pressed={playing}><span aria-hidden="true">{playing?"Ⅱ":"▷"}</span>{playing?(tr?"Önizlemeyi duraklat":"Pause preview"):(tr?"Oynanışı izle":"Watch gameplay")}</button></div>;
}
