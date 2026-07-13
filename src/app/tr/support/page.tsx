import type { Metadata } from "next";
import SupportPage from "@/components/SupportPage";

export const metadata: Metadata = {
  title: "Destek",
  description:
    "Lumisoft Studios oyunları ve uygulamaları için yardım alın. Ürün desteği, sık sorulan sorular ve doğrudan iletişim.",
  alternates: {
    canonical: "/tr/support",
    languages: { en: "/support", tr: "/tr/support" },
  },
};

export default function Page() {
  return <SupportPage lang="tr" />;
}
