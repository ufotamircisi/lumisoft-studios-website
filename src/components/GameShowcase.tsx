import Image from "next/image";
import GameplayPreview from "@/components/GameplayPreview";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import ProductHero, {ProductLinks, showcase, type ShowcaseSlug} from "@/components/ProductHero";

interface Props { slug:ShowcaseSlug;lang?:"en"|"tr";features:{title:string;text:string}[];faqs?:{q:string;a:string}[]; }
export default function GameShowcase({slug,lang="en",features,faqs}:Props) {
 const tr=lang==="tr",s=showcase[slug];
 return <><Header /><main id="main-content" className="product-main"><ProductHero slug={slug} lang={lang} /><section className="studio-width game-features"><div className="section-heading"><div><p className="studio-kicker">{tr?"Oyunun içinde":"Inside the game"}</p><h2>{tr?"Her hamle bir ihtimal.":"Every move, a possibility."}</h2></div><p>{tr?"Kolay başla. Kendi ritmini bul. Yeni bir yol keşfet.":"Easy to begin. Find your rhythm. Discover a new way to play."}</p></div><div className="feature-spread"><figure className={`feature-visual feature-${slug}`}>{slug === "neon-siege" ? <GameplayPreview lang={lang} /> : <Image src={`/media/${s.screen}.webp`} alt={tr?"Gerçek oyun ekranı":"Actual gameplay screen"} width={390} height={844} sizes="(max-width:760px) 240px, 300px" />}<figcaption>{tr?"Oyundan bir an":"A moment in the game"}</figcaption></figure><div className="feature-list">{features.map(f=><article key={f.title}><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></div></section>{faqs && <section className="studio-width product-faq"><h2>{tr?"Merak edilenler":"Good to know"}</h2>{faqs.map(f=><details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</section>}<section className="studio-width product-download"><div><p className="studio-kicker">iOS + Android</p><h2>{tr?"Sıradaki hamle senin.":"Your next move."}</h2></div><Link className="studio-button" href={s.download}>{tr?"Şimdi indir":"Download now"}<span aria-hidden="true">↗</span></Link><ProductLinks slug={slug} lang={lang} /></section><RelatedProducts currentSlug={slug} lang={lang} /></main><Footer lang={lang} /></>;
}
