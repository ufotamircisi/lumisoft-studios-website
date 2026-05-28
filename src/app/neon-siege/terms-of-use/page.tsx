import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Terms of Use",
  description: "Terms of Use for Neon Siege by Lumisoft Studio.",
};

export default function NeonSiegeTermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Terms of Use"
        subtitle="Neon Siege by Lumisoft Studio"
        lastUpdated="May 28, 2026"
        backHref="/neon-siege"
        backLabel="Neon Siege"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            Neon Siege is provided by Lumisoft Studio as an entertainment game.
            By downloading or using the App, you agree to these Terms of Use.
          </p>
        </section>

        {[
          ["Entertainment Game", "Neon Siege is a game and is not a gambling app. Gameplay outcomes, virtual items, and progression are for entertainment use only."],
          ["Virtual Items", "Virtual diamonds, items, boosts, and similar in-game content have no real-world monetary value and cannot be exchanged for cash or real-world goods outside the App."],
          ["Purchases", "Purchases are processed by Google Play or the App Store when available. Refunds and billing issues are handled according to the applicable store rules."],
          ["Ads", "Rewarded ads are optional. Interstitial or other forced ads may appear between levels unless a relevant purchase removes them."],
          ["Remove Forced Ads", "Remove Forced Ads removes forced ads between levels. It does not remove optional rewarded ads, which remain available only when you choose to watch them."],
          ["Platform Rules", "You must follow the rules, terms, and policies of Google Play, the App Store, and your device platform when using the App."],
          ["Service Availability", "We do not guarantee uninterrupted, error-free, or permanently available service. Features may change over time."],
          ["Contact", "For questions about these Terms, contact support@lumisoftstudios.com."],
        ].map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
              {title}
            </h2>
            <p className="text-slate-200 leading-relaxed">{body}</p>
          </section>
        ))}
      </LegalPageLayout>
      <Footer />
    </>
  );
}
