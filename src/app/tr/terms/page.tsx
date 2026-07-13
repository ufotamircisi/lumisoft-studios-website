import type { Metadata } from "next";
import { StudioTermsPage } from "@/components/StudioLegalPages";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "Lumisoft Studios web sitesi kullanım koşulları ve her ürünün kendi koşullarına bağlantılar.",
  alternates: {
    canonical: "/tr/terms",
    languages: { en: "/terms", tr: "/tr/terms" },
  },
};

export default function Page() {
  return <StudioTermsPage lang="tr" />;
}
