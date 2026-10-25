import Link from "next/link";
import { legalLabels, newProductPath, type NewProduct, type ProductLocale } from "@/lib/newProductMetadata";

export default function NewProductLinks({ product, lang }: { product: NewProduct; lang: ProductLocale }) {
  return <nav className="new-product-links" aria-label={lang === "tr" ? "Ürün desteği ve yasal bilgiler" : "Product support and legal information"}>
    {(["privacy", "terms", "support"] as const).map(kind => <Link key={kind} href={newProductPath(product, lang, kind)}>{legalLabels[kind][lang]}</Link>)}
  </nav>;
}
