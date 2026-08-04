import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Privacy Policy",
  description: "Privacy Policy for Jelly Chain Rush: Match 3 by Lumisoft Studio.",
  alternates: {
    canonical: "/jelly-chain-rush/privacy",
    languages: { "en-US": "/jelly-chain-rush/privacy", "tr-TR": "/tr/jelly-chain-rush/gizlilik" },
  },
};

const sections = [
  [
    "Overview",
    "Jelly Chain Rush: Match 3 (\"the App\") is a mobile puzzle game developed and published by Lumisoft Studio, available on the App Store and Google Play.",
  ],
  [
    "Local Game Progress",
    "Game progress, settings, and similar gameplay data may be stored locally on your device. No account or sign-in is required to play.",
  ],
  [
    "Advertising",
    "The App may use Google AdMob to show ads. Ad formats may include rewarded ads, interstitial ads, and banner ads. Rewarded ads are optional.",
  ],
  [
    "Purchases",
    "The App may offer in-app purchases processed by Google Play Billing or Apple's In-App Purchase system. Lumisoft Studio does not collect or store your payment card details.",
  ],
  [
    "Sensitive Data",
    "The App does not intentionally collect health, financial, government, or other sensitive personal data.",
  ],
  [
    "Children and Families",
    "Jelly Chain Rush is an entertainment game. It should be used according to the age rating, store listing, parental controls, and family settings available on your device and app store account.",
  ],
  [
    "Contact",
    "For privacy questions about Jelly Chain Rush, contact support@lumisoftstudios.com.",
  ],
  [
    "Changes",
    "We may update this Privacy Policy from time to time. The latest version will be posted on this page.",
  ],
];

export default function JellyChainRushPrivacyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Privacy Policy"
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
