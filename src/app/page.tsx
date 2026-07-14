import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Games & Apps",
  description:
    "Lumisoft Studios develops focused mobile games and practical apps for iOS and Android.",
  alternates: {
    canonical: "/",
    languages: { en: "/", tr: "/tr" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumisoft Studios",
  url: "https://www.lumisoftstudios.com",
  logo: "https://www.lumisoftstudios.com/images/lumisoft-studio-emblem.png",
  email: "support@lumisoftstudios.com",
  description:
    "Independent studio developing focused mobile games and practical apps for iOS and Android.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage lang="en" />
    </>
  );
}
