import type { Metadata } from "next";
import JellyChainRushPage from "@/components/JellyChainRushPage";

export const metadata: Metadata = {
  title: "Jelly Chain Rush | Lumisoft Studio",
  description:
    "Jelly Chain Rush, Lumisoft Studio tarafından geliştirilen renkli bir şeker bulmaca macerasıdır. Şekerleri eşleştir, zincirleme patlamalar oluştur, bölümleri aç ve Şeker Adanı yenile.",
};

export default function JellyChainRushTurkishPage() {
  return <JellyChainRushPage lang="tr" />;
}
