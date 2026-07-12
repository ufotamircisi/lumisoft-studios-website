import type { Metadata } from "next";

const descriptions = {
  en: {
    product: "Discover Roto Blocks, a calm rotating block puzzle game from Lumisoft Studio.",
    privacy: "Privacy Policy for Roto Blocks by Lumisoft Studio, including local game data, advertising, consent, and support information.",
    terms: "Terms of Use for Roto Blocks, a free ad supported puzzle game from Lumisoft Studio.",
    support: "Get help with Roto Blocks and contact Lumisoft Studio support.",
  },
  tr: {
    product: "Lumisoft Studio tarafından geliştirilen sakin ve dönen tahta mekanikli Roto Blocks bulmaca oyununu keşfedin.",
    privacy: "Roto Blocks için yerel oyun verileri, reklamlar, onay ve destek bilgilerini açıklayan Gizlilik Politikası.",
    terms: "Lumisoft Studio tarafından geliştirilen ücretsiz ve reklam destekli Roto Blocks için Kullanım Koşulları.",
    support: "Roto Blocks için yardım alın ve Lumisoft Studio destek ekibine ulaşın.",
  },
};

const titles = {
  en: { product: "Roto Blocks", privacy: "Roto Blocks Privacy Policy", terms: "Roto Blocks Terms of Use", support: "Roto Blocks Support" },
  tr: { product: "Roto Blocks", privacy: "Roto Blocks Gizlilik Politikası", terms: "Roto Blocks Kullanım Koşulları", support: "Roto Blocks Destek" },
};

export function rotoBlocksMetadata({ lang, kind, path, alternatePath }: { lang: "en" | "tr"; kind: "product" | "privacy" | "terms" | "support"; path: string; alternatePath: string }): Metadata {
  const title = titles[lang][kind];
  const description = descriptions[lang][kind];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: lang === "en" ? { "en-US": path, "tr-TR": alternatePath } : { "tr-TR": path, "en-US": alternatePath },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Lumisoft Studio",
      type: "website",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? ["en_US"] : ["tr_TR"],
      images: [{ url: "/images/roto-blocks-icon.png", width: 1024, height: 1024, alt: "Roto Blocks" }],
    },
  };
}
