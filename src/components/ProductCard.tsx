import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  lang?: "en" | "tr";
}

const statusLabels = {
  live: { en: "Available now", tr: "Yayında" },
  "in-development": { en: "In development", tr: "Geliştiriliyor" },
  "coming-soon": { en: "Coming soon", tr: "Yakında" },
};

function StatusBadge({ product, lang }: { product: Product; lang: "en" | "tr" }) {
  const label = statusLabels[product.status][lang];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide"
      style={{
        color: product.accent,
        borderColor: `color-mix(in srgb, ${product.accent} 35%, transparent)`,
        background: `color-mix(in srgb, ${product.accent} 10%, transparent)`,
      }}
    >
      {product.status === "live" && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: product.accent }}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}

export default function ProductCard({ product, lang = "en" }: ProductCardProps) {
  const href = product.href?.[lang];
  const hasStores = Boolean(
    product.stores?.appStore || product.stores?.googlePlay
  );

  const body = (
    <article className="card-glass card-lift flex h-full flex-col p-6 sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
          style={{
            borderColor: `color-mix(in srgb, ${product.accent} 30%, transparent)`,
            background: product.accentSoft,
            boxShadow: `0 0 26px ${product.accentSoft}`,
          }}
        >
          {product.iconImage ? (
            <Image
              src={product.iconImage}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
          ) : (
            <span className="text-2xl select-none" aria-hidden="true">
              {product.glyph}
            </span>
          )}
        </div>
        <StatusBadge product={product} lang={lang} />
      </div>

      <h3 className="mb-1 text-lg font-bold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mb-3 text-sm font-medium" style={{ color: product.accent }}>
        {product.tagline[lang]}
      </p>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-300">
        {product.description[lang]}
      </p>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
        <div className="flex items-center gap-1.5">
          {product.platforms.map((p) => (
            <span
              key={p}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {p}
            </span>
          ))}
        </div>
        {href ? (
          <span
            className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ color: product.accent }}
          >
            {hasStores
              ? lang === "tr"
                ? "İncele →"
                : "View →"
              : lang === "tr"
                ? "Detaylar →"
                : "Details →"}
          </span>
        ) : (
          <span className="text-xs font-medium text-slate-500">
            {lang === "tr" ? "Duyuru yakında" : "Announcing soon"}
          </span>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {body}
      </Link>
    );
  }

  return <div className="group h-full">{body}</div>;
}
