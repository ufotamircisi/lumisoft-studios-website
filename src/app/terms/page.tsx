import type { Metadata } from "next";
import { StudioTermsPage } from "@/components/StudioLegalPages";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Lumisoft Studios website, with links to each product's terms.",
  alternates: {
    canonical: "/terms",
    languages: { en: "/terms", tr: "/tr/terms" },
  },
};

export default function Page() {
  return <StudioTermsPage lang="en" />;
}
