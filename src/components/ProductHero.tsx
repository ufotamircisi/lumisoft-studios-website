import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/lib/products";

export const showcase = {
 "neon-siege": { screen:"neon-game", second:"neon-world", download:"/neon-siege/download", privacy:"/neon-siege/privacy-policy", terms:"/neon-siege/terms-of-use", support:"/neon-siege/support", trPrivacy:"/tr/neon-siege/gizlilik", trTerms:"/tr/neon-siege/kullanim-kosullari", trSupport:"/tr/neon-siege/destek", en:"Aim. Break. Light it up.", tr:"Nişan al. Kır. Işıldat." },
 "jelly-chain-rush": { screen:"jelly-game", second:"jelly-map", download:"/jellychainrush/download", privacy:"/jelly-chain-rush/privacy", terms:"/jelly-chain-rush/terms", support:"/contact", trPrivacy:"/tr/jelly-chain-rush/gizlilik", trTerms:"/tr/jelly-chain-rush/kullanim-kosullari", trSupport:"/tr/contact", en:"A world of sweet moves.", tr:"Her hamlede tatlı bir dünya." },
 "roto-blocks": { screen:"roto-game", second:"roto-adventure", download:"/rotoblocks/download", privacy:"/roto-blocks/privacy", terms:"/roto-blocks/terms", support:"/roto-blocks/support", trPrivacy:"/tr/roto-blocks/gizlilik", trTerms:"/tr/roto-blocks/kullanim-kosullari", trSupport:"/tr/roto-blocks/destek", en:"A fresh turn on puzzle play.", tr:"Bulmacaya yeni bir dönüş." },
 "lumibaby": { screen:"baby-routine", second:"baby-sounds", download:"/lumibaby/download", privacy:"/lumibaby/privacy", terms:"/lumibaby/terms", support:"/lumibaby/support", trPrivacy:"/tr/lumibaby/gizlilik", trTerms:"/tr/lumibaby/kullanim-kosullari", trSupport:"/tr/lumibaby/destek", en:"Little routines. Calmer nights.", tr:"Küçük rutinler. Huzurlu geceler." },
};
export type ShowcaseSlug = keyof typeof showcase;
export function ProductLinks({slug,lang="en"}:{slug:ShowcaseSlug;lang?:"en"|"tr"}) {
 const s=showcase[slug], tr=lang==="tr";
 return <nav className="product-service-links" aria-label={tr?"Ürün desteği ve yasal bilgiler":"Product support and legal"}><Link href={tr?s.trSupport:s.support}>{tr?"Destek":"Support"}</Link><Link href={tr?s.trPrivacy:s.privacy}>{tr?"Gizlilik Politikası":"Privacy Policy"}</Link><Link href={tr?s.trTerms:s.terms}>{tr?"Kullanım Koşulları":"Terms of Use"}</Link></nav>;
}
export default function ProductHero({slug,lang="en"}:{slug:ShowcaseSlug;lang?:"en"|"tr"}) {
 const p=allProducts.find(p=>p.slug===slug)!,s=showcase[slug],tr=lang==="tr";
 return <section className={`product-hero product-${slug}`}><div className="studio-width product-hero-grid">
  <div className="product-hero-copy"><Link href={(tr?"/tr":"/")+(p.kind==="game"?"#games":"#apps")} className="product-back">← {p.kind==="game"?(tr?"Tüm oyunlar":"All games"):(tr?"Tüm uygulamalar":"All apps")}</Link><div className="product-title-row"><Image src={p.iconImage!} width={72} height={72} alt="" priority /><div><p>{p.tagline[lang]}</p><span>iOS + Android</span></div></div><h1>{p.name}</h1><h2>{s[lang]}</h2><p className="product-intro">{p.description[lang]}</p><div className="product-store-links"><a href={p.stores!.appStore} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span><span><small>{tr?"Şuradan indir":"Download on the"}</small>App Store</span></a><a href={p.stores!.googlePlay} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span><span><small>{tr?"Şuradan edin":"Get it on"}</small>Google Play</span></a></div><Link href={s.download} className="product-smart-link">{tr?"Cihazına uygun mağazayı aç":"Find the store for your device"}<span aria-hidden="true">↗</span></Link><ProductLinks slug={slug} lang={lang} /></div>
  <div className="product-scene"><div className="product-scene-orbit" aria-hidden="true" />{slug==="jelly-chain-rush" && <Image className="product-scene-world" src="/media/jelly-world.webp" alt="" fill sizes="(max-width:760px) 100vw, 50vw" priority />}<div className="scene-secondary"><Image src={`/media/${s.second}.webp`} width={390} height={844} alt={tr?`${p.name} ürün görünümü`:`${p.name} product view`} sizes="(max-width:760px) 140px, 230px" priority /></div><div className="scene-primary"><Image src={`/media/${s.screen}.webp`} width={390} height={844} alt={tr?`${p.name} gerçek ekran görüntüsü`:`Actual ${p.name} screen`} sizes="(max-width:760px) 210px, 280px" priority /></div></div>
 </div></section>;
}
