import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Lumisoft Studios, özenle geliştirilmiş mobil oyunlar ve uygulamalar üreten bağımsız bir stüdyodur. Hikayemizi, misyonumuzu ve standartlarımızı keşfedin.",
  alternates: {
    canonical: "/tr/about",
    languages: { en: "/about", tr: "/tr/about" },
  },
};

export default function Page() {
  return <AboutPage lang="tr" />;
}
