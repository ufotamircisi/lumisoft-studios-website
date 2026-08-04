import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Terms of Use",
  description: "Terms of Use for Jelly Chain Rush: Match 3 by Lumisoft Studio.",
  alternates: {
    canonical: "/jelly-chain-rush/terms",
    languages: { "en-US": "/jelly-chain-rush/terms", "tr-TR": "/tr/jelly-chain-rush/kullanim-kosullari" },
  },
};

const sections = [
  [
    "Entertainment Game",
    "Jelly Chain Rush: Match 3 is provided by Lumisoft Studio as an entertainment game, available on the App Store and Google Play. By downloading or using the App, you agree to these Terms of Use.",
  ],
  [
    "Virtual Items",
    "Virtual boosters, items, and similar in-game content have no real-world monetary value and cannot be exchanged for cash or real-world goods outside the App.",
  ],
  [
    "Purchases",
    "In-app purchases, where offered, are processed by Google Play or the App Store. Refunds and billing issues are handled according to the applicable store's rules.",
  ],
  [
    "Ads",
    "The App may show rewarded, interstitial, or banner ads. Rewarded ads are optional.",
  ],
  [
    "Platform Rules",
    "You must follow the rules, terms, and policies of Google Play, the App Store, and your device platform when using the App.",
  ],
  [
    "Intellectual Property",
    "Jelly Chain Rush, related artwork, names, and game content are owned by Lumisoft Studio or its licensors.",
  ],
  [
    "Service Availability",
    "We do not guarantee uninterrupted, error-free, or permanently available service. Features may change over time.",
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
        lastUpdated="August 5, 2026"
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
