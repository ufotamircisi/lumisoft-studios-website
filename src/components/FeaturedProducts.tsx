import Image from "next/image";
import Link from "next/link";
import { newProductPath, type ProductLocale } from "@/lib/newProductMetadata";

export function MidchainFeature({ lang }: { lang: ProductLocale }) {
  const tr = lang === "tr";
  return <article className="midchain-feature">
    <Image className="midchain-feature-image" src="/media/midchain/hero.webp" alt={tr ? "MIDCHAIN: büyük beyaz köpekbalığının altında levrek ve küçük balık sürüsü" : "MIDCHAIN: a sea bass between a great white shark and a school of smaller fish"} width={1920} height={1080} sizes="(max-width: 760px) 100vw, 90vw" />
    <div className="midchain-feature-copy"><div className="new-product-identity"><Image src="/media/midchain/icon.webp" width={56} height={56} alt="" /><span>{tr ? "Geliştiriliyor" : "In development"}</span></div><h3>MIDCHAIN</h3><p className="midchain-subtitle">An Ocean Survival Game</p><p className="midchain-feature-line">{tr ? <>Aşağıda avlan.<br />Yukarıdan saklan.</> : <>Hunt below.<br />Hide from above.</>}</p><Link href={newProductPath("midchain",lang)} className="studio-button">{tr ? "Okyanusu keşfet" : "Explore the ocean"}<span aria-hidden="true">↗</span></Link></div>
  </article>;
}

export function WandermioFeature({ lang }: { lang: ProductLocale }) {
  const tr = lang === "tr", name = tr ? "Öğrenimo" : "Wondermio";
  return <article className="wandermio-feature studio-width">
    <div className="wandermio-feature-copy"><div className="new-product-identity"><Image src="/media/wandermio/icon.webp" width={64} height={64} alt="" /><span>{tr ? "Geliştiriliyor · 2–12 yaş" : "In development · Ages 2–12"}</span></div><h3>{name}</h3><p className="wandermio-feature-line">{tr ? "Bugün ne keşfedelim?" : "What shall we discover today?"}</p><p>{tr ? "Bir harf, bir hikâye, çözülen bir bulmaca. Her yaşa uygun küçük öğrenme maceraları." : "A letter, a story, a puzzle worked out. Little learning adventures for every age."}</p><Link href={newProductPath("wandermio",lang)} className="studio-button dark">{tr ? "Öğrenimo’yu keşfet" : "Meet Wondermio"}<span aria-hidden="true">↗</span></Link></div>
    <figure className="learning-screen"><Image src={`/media/wandermio/world-${lang}.webp`} alt={tr ? "Öğrenimo öğrenme dünyası ve öğrenme arkadaşı" : "Wondermio learning world with its learning friend"} width={1280} height={800} sizes="(max-width: 760px) 90vw, 55vw" /><figcaption>{tr ? "Uygulamanın gerçek öğrenme ekranı" : "Inside the app’s learning world"}</figcaption></figure>
  </article>;
}
