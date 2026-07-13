import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { relatedProducts } from "@/lib/products";

interface RelatedProductsProps {
  currentSlug: string;
  lang?: "en" | "tr";
}

export default function RelatedProducts({
  currentSlug,
  lang = "en",
}: RelatedProductsProps) {
  const products = relatedProducts(currentSlug).slice(0, 3);
  if (products.length === 0) return null;

  return (
    <section className="border-t border-white/[0.06] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-2 text-violet-400">
            {lang === "tr" ? "Lumisoft'tan daha fazlası" : "More from Lumisoft"}
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {lang === "tr" ? "Diğer ürünler" : "Other products"}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
