"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ScreenComposition({lang}:{lang:"en"|"tr"}) {
 const ref=useRef<HTMLDivElement>(null);
 const tr=lang==="tr";
 return <div ref={ref} className="hero-composition" onPointerMove={e=>{
  if(e.pointerType!=="mouse" || !matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 1000px)').matches) return;
  const b=e.currentTarget.getBoundingClientRect();
  ref.current?.style.setProperty('--tilt-x',`${((e.clientY-b.top)/b.height-.5)*-4}deg`);
  ref.current?.style.setProperty('--tilt-y',`${((e.clientX-b.left)/b.width-.5)*5}deg`);
 }} onPointerLeave={()=>{ref.current?.style.setProperty('--tilt-x','0deg');ref.current?.style.setProperty('--tilt-y','0deg');}}>
  <div className="composition-disc" aria-hidden="true" />
  <div className="composition-arrival"><div className="composition-screens">
   <Link className="hero-screen screen-neon" href={tr?"/tr/neon-siege":"/neon-siege"} aria-label="Neon Siege"><Image src="/media/neon-game.webp" alt="" width={390} height={844} sizes="(max-width: 760px) 140px, 220px" priority /></Link>
   <Link className="hero-screen screen-baby" href={tr?"/tr/lumibaby":"/lumibaby"} aria-label="LumiBaby"><Image src="/media/baby-routine.webp" alt="" width={691} height={1536} sizes="(max-width: 760px) 150px, 230px" priority /></Link>
   <Link className="hero-screen screen-jelly" href={tr?"/tr/jelly-chain-rush":"/jelly-chain-rush"} aria-label="Jelly Chain Rush"><Image src="/media/jelly-game.webp" alt="" width={390} height={844} sizes="(max-width: 760px) 165px, 250px" priority /></Link>
  </div></div>
 </div>;
}
