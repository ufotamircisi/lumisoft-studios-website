export type ProductStatus = "live" | "in-development" | "coming-soon";

export interface Product {
  slug: string;
  kind: "game" | "app";
  name: string;
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
    appStore:
      "https://apps.apple.com/ng/app/jelly-chain-rush-match-3/id6790545058",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lumisoft.jellychainrush",
  },
};

export const games: Product[] = [
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
    status: "coming-soon",
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
];

export const allProducts: Product[] = [...games, ...apps];

export function relatedProducts(slug: string): Product[] {
  return allProducts.filter((p) => p.slug !== slug && p.href);
}
