import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush",
  description:
    "Jelly Chain Rush, Lumisoft Studio tarafından geliştirilen renkli bir şeker bulmaca macerasıdır. Şekerleri eşleştir, zincirleme patlamalar oluştur, bölümleri aç ve Şeker Adanı yenile.",
  alternates: {
    canonical: "/tr/jelly-chain-rush",
    languages: { "tr-TR": "/tr/jelly-chain-rush", "en-US": "/jelly-chain-rush" },
  },
  openGraph: {
    title: "Jelly Chain Rush | Lumisoft Studio",
    description: "Geliştirme aşamasındaki renkli bir şeker bulmaca macerası.",
    url: "/tr/jelly-chain-rush",
    locale: "tr_TR",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024, alt: "Jelly Chain Rush" }],
  },
};

export default function JellyChainRushTurkishPage() {
  return <JellyChainRushPage lang="tr" />;
}
