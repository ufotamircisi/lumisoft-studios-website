import type { Metadata } from "next";
import { StudioPrivacyPage } from "@/components/StudioLegalPages";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Lumisoft Studios'un bu web sitesinde verileri nasıl işlediği ve her ürünün gizlilik politikasına bağlantılar.",
  alternates: {
    canonical: "/tr/privacy",
    languages: { en: "/privacy", tr: "/tr/privacy" },
  },
};

export default function Page() {
  return <StudioPrivacyPage lang="tr" />;
}
