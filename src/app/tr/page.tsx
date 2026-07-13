import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Lumisoft Studios | Oyunlar ve Uygulamalar",
  description:
    "Lumisoft Studios, iOS ve Android için özenle geliştirilmiş mobil oyunlar ve uygulamalar üreten bağımsız bir stüdyodur.",
  alternates: {
    canonical: "/tr",
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
    "iOS ve Android için özenle geliştirilmiş mobil oyunlar ve uygulamalar üreten bağımsız stüdyo.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage lang="tr" />
    </>
  );
}
