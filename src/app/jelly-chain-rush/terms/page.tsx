import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Terms of Use",
  description: "Terms governing the pre-release Jelly Chain Rush product page by Lumisoft Studio.",
  alternates: {
    canonical: "/jelly-chain-rush/terms",
    languages: { "en-US": "/jelly-chain-rush/terms", "tr-TR": "/tr/jelly-chain-rush/kullanim-kosullari" },
  },
};

const sections = [
  [
    "Product Status",
    "Jelly Chain Rush is a mobile puzzle game in development by Lumisoft Studio. No public download, purchase, or game license is offered through this website.",
  ],
  [
    "Product Information",
    "The product page describes the current direction of the game. Features and release timing may change during development, and no release date is promised.",
  ],
  [
    "No Store Availability",
    "Lumisoft Studio will publish official store links on the product page if and when the game becomes publicly available.",
  ],
  [
    "Intellectual Property",
    "Jelly Chain Rush, related artwork, names, and game content are owned by Lumisoft Studio or its licensors.",
  ],
  [
    "Contact",
    "For questions about these terms, contact support@lumisoftstudios.com.",
  ],
];

export default function JellyChainRushTermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Terms of Use"
        subtitle="Jelly Chain Rush by Lumisoft Studio"
        lastUpdated="June 23, 2026"
        backHref="/jelly-chain-rush"
        backLabel="Jelly Chain Rush"
      >
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
              {title}
            </h2>
            <p className="text-slate-200 leading-relaxed">{body}</p>
          </section>
        ))}
        <a
          href="mailto:support@lumisoftstudios.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
        >
          support@lumisoftstudios.com
        </a>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
