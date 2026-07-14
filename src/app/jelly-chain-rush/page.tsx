import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush",
  description:
    "Jelly Chain Rush is a colorful candy puzzle adventure from Lumisoft Studio. Match candies, trigger chain reactions, unlock levels, and rebuild your Candy Island.",
  alternates: {
    canonical: "/jelly-chain-rush",
    languages: { "en-US": "/jelly-chain-rush", "tr-TR": "/tr/jelly-chain-rush" },
  },
  openGraph: {
    title: "Jelly Chain Rush | Lumisoft Studio",
    description: "A colorful candy puzzle adventure currently in development.",
    url: "/jelly-chain-rush",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024, alt: "Jelly Chain Rush" }],
  },
};

export default function JellyChainRushEnglishPage() {
  return <JellyChainRushPage />;
}
