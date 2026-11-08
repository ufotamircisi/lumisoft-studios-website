import type { Metadata } from "next";

export type ProductLocale = "en" | "tr";
export type NewProduct = "midchain" | "wandermio";
export type LegalKind = "privacy" | "terms" | "support";
export const SITE_URL = "https://www.lumisoftstudios.com";
export const newProductRoutes = {
  midchain: { en: "/midchain", tr: "/tr/midchain" },
  wandermio: { en: "/wandermio", tr: "/tr/ogrenimo" },
};
export const legalLabels = {
  privacy: { en: "Privacy Policy", tr: "Gizlilik Politikası" },
  terms: { en: "Terms of Use", tr: "Kullanım Koşulları" },
  support: { en: "Support", tr: "Destek" },
};
const legalSegments = {
  privacy: { en: "privacy", tr: "gizlilik" },
  terms: { en: "terms", tr: "kullanim-kosullari" },
  support: { en: "support", tr: "destek" },
};
export function newProductName(product: NewProduct, lang: ProductLocale) {
  return product === "midchain" ? "MIDCHAIN" : lang === "tr" ? "Öğrenimo" : "Wondermio";
}
export function newProductPath(product: NewProduct, lang: ProductLocale, kind?: LegalKind) {
  return newProductRoutes[product][lang] + (kind ? "/" + legalSegments[kind][lang] : "") + "/";
}
export function newProductMetadata(product: NewProduct, lang: ProductLocale, kind?: LegalKind): Metadata {
  const tr = lang === "tr", name = newProductName(product, lang);
  const title = name + ": " + (kind ? legalLabels[kind][lang] : product === "midchain" ? "An Ocean Survival Game" : tr ? "Çocuklar için öğrenme oyunları" : "Learning games for children");
  const description = product === "wandermio" && kind === "privacy"
    ? tr ? "Öğrenimo gizlilik politikası: cihazdaki çocuk profilleri, AdMob test reklamları, RevenueCat satın alma doğrulaması, silme ve ebeveyn hakları." : "Wondermio privacy policy: on-device child profiles, AdMob test ads, RevenueCat purchase verification, deletion and parental rights."
    : kind
    ? tr ? `${name} için ${legalLabels[kind][lang].toLocaleLowerCase("tr")}. Güncel uygulama davranışı, yardım ve Lumisoft Studio iletişim bilgileri.` : `${legalLabels[kind][lang]} for ${name}. Current app practices, help and contact details from Lumisoft Studio.`
    : product === "midchain"
      ? tr ? "Besin zincirinin ortasında hayatta kal. Dört tür, beş okyanus bölgesi ve bir sonraki nesle uzanan yaşam döngüsü. MIDCHAIN geliştiriliyor." : "Hunt below. Hide from above. An ocean survival game with four species, five environments and a life that continues into the next generation. In development."
      : tr ? "2–12 yaş için harfler, okuma, matematik ve mantık oyunları. Türkçe ve İngilizce öğrenme dünyaları, yerel ilerleme ve veli alanı. Öğrenimo geliştiriliyor." : "Learning games for children ages 2–12. Explore phonics, reading, math and logic in Turkish and English, with local progress and a parent area. Wondermio is in development.";
  const url = SITE_URL + newProductPath(product, lang, kind);
  const image = product === "midchain" ? "/media/midchain/hero.webp" : `/media/wandermio/world-${lang}.webp`;
  return {
    title, description,
    alternates: { canonical: url, languages: { en: SITE_URL + newProductPath(product,"en",kind), tr: SITE_URL + newProductPath(product,"tr",kind), "x-default": SITE_URL + newProductPath(product,"en",kind) } },
    openGraph: { type: "website", siteName: "Lumisoft Studio", title, description, url, locale: tr ? "tr_TR" : "en_US", alternateLocale: tr ? "en_US" : "tr_TR", images: [{ url: image, alt: name }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
