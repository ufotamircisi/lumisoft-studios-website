import type { Metadata } from "next";
import { StudioPrivacyPage } from "@/components/StudioLegalPages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lumisoft Studios handles data on this website, with links to each product's privacy policy.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", tr: "/tr/privacy" },
  },
};

export default function Page() {
  return <StudioPrivacyPage lang="en" />;
}
