import Header from "./Header";
import Footer from "./Footer";
import LegalPageLayout from "./LegalPageLayout";
import NewProductLinks from "./NewProductLinks";
import { newProductLegal } from "@/lib/newProductLegal";
import { legalLabels, newProductName, newProductPath, type LegalKind, type NewProduct, type ProductLocale } from "@/lib/newProductMetadata";

function Paragraph({ text }: { text: string }) {
  return <p>{text.split(/(support@lumisoftstudios\.com|https:\/\/policies\.google\.com\/privacy)/g).map((part,i)=>part === "support@lumisoftstudios.com" ? <a key={i} className="text-violet-300 underline underline-offset-4" href={`mailto:${part}`}>{part}</a> : part === "https://policies.google.com/privacy" ? <a key={i} className="text-violet-300 underline underline-offset-4" href={part}>Google Privacy Policy</a> : part)}</p>;
}
export default function NewProductLegalPage({ product, kind, lang }: { product: NewProduct; kind: LegalKind; lang: ProductLocale }) {
  const document=newProductLegal[product][kind][lang], name=newProductName(product,lang), tr=lang==="tr";
  return <><Header /><LegalPageLayout title={`${name}: ${legalLabels[kind][lang]}`} subtitle="Lumisoft Studio" lastUpdated={product === "wandermio" ? (tr ? "29 Ekim 2026" : "October 29, 2026") : (tr ? "25 Ekim 2026" : "October 25, 2026")} lastUpdatedLabel={tr?"Son güncelleme:":"Last updated:"} backHref={newProductPath(product,lang)} backLinkText={tr?`${name} sayfasına dön`:`Back to ${name}`} appIcon={`/media/${product}/icon.webp`}>
    <p className="text-lg leading-relaxed text-slate-200">{document.lead}</p>
    <NewProductLinks product={product} lang={lang} />
    {document.sections.map(section=><section key={section.title}><h2 className="mb-4 border-b border-violet-500/15 pb-2 text-xl font-semibold text-white">{section.title}</h2><div className="space-y-4 leading-relaxed text-slate-200">{section.paragraphs.map((text,i)=><Paragraph key={i} text={text} />)}</div></section>)}
    <NewProductLinks product={product} lang={lang} />
  </LegalPageLayout><Footer lang={lang} /></>;
}
