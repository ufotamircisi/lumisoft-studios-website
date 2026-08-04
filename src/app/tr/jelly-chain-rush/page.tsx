import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush: Match 3",
  description:
    "Jelly Chain Rush: Match 3; şeker eşleştirme, zincirleme reaksiyonlar, güçlendiriciler ve eğlenceli bölümler sunan renkli bir mobil match-3 bulmaca oyunudur.",
  alternates: {
    canonical: "/tr/jelly-chain-rush",
    languages: { "tr-TR": "/tr/jelly-chain-rush", "en-US": "/jelly-chain-rush" },
  },
  openGraph: {
    title: "Jelly Chain Rush: Match 3 | Lumisoft Studios",
    description: "App Store ve Google Play'de yayında olan renkli bir mobil match-3 bulmaca oyunu.",
    url: "/tr/jelly-chain-rush",
    locale: "tr_TR",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024, alt: "Jelly Chain Rush" }],
  },
};

export default function JellyChainRushTurkishPage() {
  return <JellyChainRushPage lang="tr" />;
}
