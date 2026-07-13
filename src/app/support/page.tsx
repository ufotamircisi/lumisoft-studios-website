import type { Metadata } from "next";
import SupportPage from "@/components/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Lumisoft Studios games and apps. Product support, common questions, and direct contact.",
  alternates: {
    canonical: "/support",
    languages: { en: "/support", tr: "/tr/support" },
  },
};

export default function Page() {
  return <SupportPage lang="en" />;
}
