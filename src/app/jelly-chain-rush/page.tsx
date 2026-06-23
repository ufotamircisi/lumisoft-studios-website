import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush | Lumisoft Studio",
  description:
    "Jelly Chain Rush is a colorful candy puzzle adventure from Lumisoft Studio. Match candies, trigger chain reactions, unlock levels, and rebuild your Candy Island.",
};

export default function JellyChainRushEnglishPage() {
  return <JellyChainRushPage />;
}
