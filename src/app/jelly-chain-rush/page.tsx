import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush: Match 3",
  description:
    "Jelly Chain Rush: Match 3 is a colorful mobile puzzle game where players match candies, trigger chain reactions, use boosters, and progress through fun levels.",
  alternates: {
    canonical: "/jelly-chain-rush",
    languages: { "en-US": "/jelly-chain-rush", "tr-TR": "/tr/jelly-chain-rush" },
  },
  openGraph: {
    title: "Jelly Chain Rush: Match 3 | Lumisoft Studios",
    description: "A colorful mobile match-3 puzzle game available on the App Store and Google Play.",
    url: "/jelly-chain-rush",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024, alt: "Jelly Chain Rush" }],
  },
};

export default function JellyChainRushEnglishPage() {
  return <JellyChainRushPage />;
}
