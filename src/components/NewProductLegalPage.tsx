import Header from "./Header";
import Footer from "./Footer";
import LegalPageLayout from "./LegalPageLayout";
import NewProductLinks from "./NewProductLinks";
import { newProductLegal } from "@/lib/newProductLegal";
import { legalLabels, newProductName, newProductPath, type LegalKind, type NewProduct, type ProductLocale } from "@/lib/newProductMetadata";

const privacyLinks: Record<string, { en: string; tr: string }> = {
  "https://policies.google.com/privacy": { en: "Google Privacy Policy", tr: "Google Gizlilik Politikası" },
  "https://www.revenuecat.com/privacy": { en: "RevenueCat Privacy Policy", tr: "RevenueCat Gizlilik Politikası" },
  "https://www.apple.com/legal/privacy/": { en: "Apple Privacy Policy", tr: "Apple Gizlilik Politikası" },
  "https://developers.google.com/ml-kit/terms": { en: "Google ML Kit Terms & Privacy", tr: "Google ML Kit Koşulları ve Gizlilik" },
};
const linkPattern = /(support@lumisoftstudios\.com|https:\/\/policies\.google\.com\/privacy|https:\/\/www\.revenuecat\.com\/privacy|https:\/\/www\.apple\.com\/legal\/privacy\/|https:\/\/developers\.google\.com\/ml-kit\/terms)/g;

function Paragraph({ text, lang }: { text: string; lang: ProductLocale }) {
  return <p>{text.split(linkPattern).map((part, i) => {
    if (part === "support@lumisoftstudios.com") {
      return <a key={i} className="text-violet-300 underline underline-offset-4" href={`mailto:${part}`}>{part}</a>;
    }
    const label = privacyLinks[part]?.[lang];
    return label ? <a key={i} className="text-violet-300 underline underline-offset-4" href={part}>{label}</a> : part;
  })}</p>;
}

export default function NewProductLegalPage({ product, kind, lang }: { product: NewProduct; kind: LegalKind; lang: ProductLocale }) {
  const document = newProductLegal[product][kind][lang];
  const name = newProductName(product, lang);
  const tr = lang === "tr";
  const lastUpdated = product === "wandermio"
    ? (tr ? "8 Kasım 2026" : "November 8, 2026")
    : (tr ? "25 Ekim 2026" : "October 25, 2026");

  return <><Header /><LegalPageLayout title={`${name}: ${legalLabels[kind][lang]}`} subtitle="Lumisoft Studio" lastUpdated={lastUpdated} lastUpdatedLabel={tr ? "Son güncelleme:" : "Last updated:"} backHref={newProductPath(product, lang)} backLinkText={tr ? `${name} sayfasına dön` : `Back to ${name}`} appIcon={`/media/${product}/icon.webp`}>
    <p className="text-lg leading-relaxed text-slate-200">{document.lead}</p>
    <NewProductLinks product={product} lang={lang} />
    {document.sections.map(section => <section key={section.title}><h2 className="mb-4 border-b border-violet-500/15 pb-2 text-xl font-semibold text-white">{section.title}</h2><div className="space-y-4 leading-relaxed text-slate-200">{section.paragraphs.map((text, i) => <Paragraph key={i} text={text} lang={lang} />)}</div></section>)}
    <NewProductLinks product={product} lang={lang} />
  </LegalPageLayout><Footer lang={lang} /></>;
}