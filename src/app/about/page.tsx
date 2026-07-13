import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumisoft Studios is an independent studio building polished mobile games and apps. Learn about our story, mission, and standards.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", tr: "/tr/about" },
  },
};

export default function Page() {
  return <AboutPage lang="en" />;
}
