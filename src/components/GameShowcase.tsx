import GameplayPreview from "@/components/GameplayPreview";
import ProductMotion from "@/components/ProductMotion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import ProductHero, { ProductLinks, showcase, type ShowcaseSlug } from "@/components/ProductHero";

type GameSlug = Exclude<ShowcaseSlug, "lumibaby">;
const moments = {
  "neon-siege": {
    en: { label: "The shot", heading: "Find the angle. Break through.", text: "Aim through neon formations. Put bombs and multipliers to work when the board gets crowded.", caption: "One shot through the neon", cta: "Take your shot." },
    tr: { label: "Atış anı", heading: "Açıyı bul. Blokları aş.", text: "Neon blokların arasından nişan al. Tahta dolduğunda bombaları ve çarpanları devreye sok.", caption: "Neon blokların arasından bir atış", cta: "Atış sırası sende." },
  },
  "jelly-chain-rush": {
    en: { label: "Chain reaction", heading: "That match has company.", text: "Candies tumble, chains grow, multipliers climb. Need a different board? Give it a SHAKE.", caption: "A match, a cascade, a fresh SHAKE", cta: "Candy Island is calling." },
    tr: { label: "Zincirleme reaksiyon", heading: "Bir eşleşmeyle kalmaz.", text: "Şekerler düşer, zincir uzar, çarpanlar büyür. Tahtayı değiştirmek mi istiyorsun? ÇALKALA.", caption: "Eşleşme, zincirleme reaksiyon ve ÇALKALA", cta: "Şeker Adası seni bekliyor." },
  },
  "roto-blocks": {
    en: { label: "The quarter turn", heading: "Plan for the turn.", text: "Three pieces down. The board turns clockwise. Leave room for what comes next.", caption: "Place three pieces. Watch the board turn.", cta: "Give it a turn." },
    tr: { label: "Çeyrek dönüş", heading: "Dönüşü hesaba kat.", text: "Üç parça yerleşir. Tahta saat yönünde döner. Sonraki parçalar için yer bırak.", caption: "Üç parçayı yerleştir. Tahtanın dönüşünü izle.", cta: "Bir tur da sen dene." },
  },
};
interface Props { slug: GameSlug; lang?: "en" | "tr"; features: { title: string; text: string }[]; faqs?: { q: string; a: string }[]; }
export default function GameShowcase({ slug, lang = "en", features, faqs }: Props) {
  const tr = lang === "tr", s = showcase[slug], moment = moments[slug][lang];
  return <><Header /><main id="main-content" className={`product-main showcase-${slug}`}><ProductMotion /><ProductHero slug={slug} lang={lang} />
    <section className="studio-width game-features">
      <div className="section-heading"><div><p className="studio-kicker">{moment.label}</p><h2>{moment.heading}</h2></div><p>{moment.text}</p></div>
      <div className="feature-spread"><figure className={`feature-visual feature-${slug}`}><GameplayPreview slug={slug} lang={lang} /><figcaption>{moment.caption}</figcaption></figure>
        <div className="feature-list">{features.map(f => <article key={f.title}><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>
      </div>
    </section>
    {faqs && <section className="studio-width product-faq"><h2>{tr ? "Merak edilenler" : "Good to know"}</h2>{faqs.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</section>}
    <section className="studio-width product-download"><div><p className="studio-kicker">iOS + Android</p><h2>{moment.cta}</h2></div><Link className="studio-button" href={s.download}>{tr ? "Şimdi indir" : "Download now"}<span aria-hidden="true">↗</span></Link><ProductLinks slug={slug} lang={lang} /></section>
    <RelatedProducts currentSlug={slug} lang={lang} /></main><Footer lang={lang} /></>;
}
