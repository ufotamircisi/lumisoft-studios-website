export type ProductStatus = "live" | "in-development" | "coming-soon";

export interface Product {
  slug: string;
  kind: "game" | "app";
  name: string;
  localizedName?: { en: string; tr: string };
  status: ProductStatus;
  iconImage?: string;
  glyph?: string;
  accent: string;
  accentSoft: string;
  href?: { en: string; tr: string };
  tagline: { en: string; tr: string };
  description: { en: string; tr: string };
  platforms: string[];
  stores?: { appStore?: string; googlePlay?: string };
}

export const STORE_URLS = {
  lumibaby: {
    appStore:
      "https://apps.apple.com/tr/app/lumibaby-baby-sleep-tracker/id6762529949",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lumisoft.lumibaby",
  },
  neonSiege: {
    appStore:
      "https://apps.apple.com/tr/app/neon-siege-brick-breaker/id6774618872",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.erolozcitak.neonsiege",
  },
  jellyChainRush: {
    appStore: "https://apps.apple.com/app/id6790545058",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush",
  },
  rotoBlocks: {
    appStore: "https://apps.apple.com/app/id6797314822",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lumisoft.rotoblocks",
  },
};

export const games: Product[] = [
  {
    slug: "midchain", kind: "game", name: "MIDCHAIN", status: "in-development",
    iconImage: "/media/midchain/icon.webp", accent: "#7dd3e8", accentSoft: "rgba(125,211,232,0.16)",
    href: { en: "/midchain", tr: "/tr/midchain" },
    tagline: { en: "An Ocean Survival Game", tr: "Okyanusta hayatta kalma oyunu" },
    description: { en: "Hunt below. Hide from above. Live in the middle of the food chain, and carry your lineage into the next generation.", tr: "Aşağıda avlan. Yukarıdan saklan. Besin zincirinin ortasında hayatta kal, soyunu bir sonraki nesle taşı." },
    platforms: ["iOS", "Android"],
  },
  {
    slug: "neon-siege",
    kind: "game",
    name: "Neon Siege",
    status: "live",
    iconImage: "/images/web/neon-siege-icon.webp",
    accent: "#22d3ee",
    accentSoft: "rgba(34,211,238,0.16)",
    href: { en: "/neon-siege", tr: "/tr/neon-siege" },
    tagline: {
      en: "Neon arcade brick breaker",
      tr: "Neon arcade brick breaker",
    },
    description: {
      en: "Break glowing formations with skills, boosters, bombs, and multipliers across intense levels.",
      tr: "Yetenekler, güçlendiriciler, bombalar ve çarpanlarla parlayan blokları kır, yoğun seviyelerde ilerle.",
    },
    platforms: ["iOS", "Android"],
    stores: STORE_URLS.neonSiege,
  },
  {
    slug: "jelly-chain-rush",
    kind: "game",
    name: "Jelly Chain Rush",
    status: "live",
    iconImage: "/images/web/jelly-chain-rush-icon.webp",
    accent: "#f472b6",
    accentSoft: "rgba(244,114,182,0.16)",
    href: { en: "/jelly-chain-rush", tr: "/tr/jelly-chain-rush" },
    tagline: {
      en: "Candy puzzle adventure",
      tr: "Şeker bulmaca macerası",
    },
    description: {
      en: "Connect candies, trigger chain reactions, and rebuild your Candy Island level by level.",
      tr: "Şekerleri eşleştir, zincirleme patlamalar oluştur ve Şeker Adanı bölüm bölüm yenile.",
    },
    platforms: ["iOS", "Android"],
    stores: STORE_URLS.jellyChainRush,
  },
  {
    slug: "roto-blocks",
    kind: "game",
    name: "Roto Blocks",
    status: "live",
    iconImage: "/images/web/roto-blocks-icon.webp",
    accent: "#38bdf8",
    accentSoft: "rgba(56,189,248,0.16)",
    href: { en: "/roto-blocks", tr: "/tr/roto-blocks" },
    tagline: {
      en: "Rotating block puzzle",
      tr: "Dönen tahta blok bulmacası",
    },
    description: {
      en: "Place three pieces, clear lines, then watch the whole board rotate and open new paths.",
      tr: "Üç parçayı yerleştir, satırları temizle, ardından tüm tahtanın dönüp yeni yollar açmasını izle.",
    },
    platforms: ["iOS", "Android"],
    stores: STORE_URLS.rotoBlocks,
  },
];

export const apps: Product[] = [
  {
    slug: "lumibaby",
    kind: "app",
    name: "LumiBaby",
    status: "live",
    iconImage: "/images/web/lumibaby-icon.webp",
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.16)",
    href: { en: "/lumibaby", tr: "/tr/lumibaby" },
    tagline: {
      en: "Baby sleep support",
      tr: "Bebek uyku desteği",
    },
    description: {
      en: "Cry detection, lullabies, sleep tracking, white noise, and sleep stories for calmer nights.",
      tr: "Ağlama algılama, ninniler, uyku takibi, beyaz gürültü ve uyku hikayeleriyle daha huzurlu geceler.",
    },
    platforms: ["iOS", "Android"],
    stores: STORE_URLS.lumibaby,
  },
  {
  slug: "wandermio", kind: "app", name: "Wondermio", localizedName: { en: "Wondermio", tr: "Öğrenimo" }, status: "in-development",
  iconImage: "/media/wandermio/icon.webp", accent: "#8ad0f2", accentSoft: "rgba(138,208,242,0.16)",
  href: { en: "/wandermio", tr: "/tr/ogrenimo" },
  tagline: { en: "Learning adventures for ages 2–12", tr: "2–12 yaş için öğrenme maceraları" },
  description: { en: "Letters, stories, numbers and little discoveries. Age-based learning worlds, local progress and a dedicated parent area.", tr: "Harfler, hikâyeler, sayılar ve küçük keşifler. Yaşa göre öğrenme dünyaları, cihazda saklanan ilerleme ve veli alanı." },
  platforms: ["iOS", "Android"],
  },
];

export function productName(product: Product, lang: "en" | "tr") {
  return product.localizedName?.[lang] ?? product.name;
}

export const allProducts: Product[] = [...games, ...apps];

export function relatedProducts(slug: string): Product[] {
  return allProducts.filter((p) => p.slug !== slug && p.href);
}
