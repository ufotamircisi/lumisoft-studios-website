import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Privacy Policy",
  description: "Privacy information for the pre-release Jelly Chain Rush product page by Lumisoft Studio.",
  alternates: {
    canonical: "/jelly-chain-rush/privacy",
    languages: { "en-US": "/jelly-chain-rush/privacy", "tr-TR": "/tr/jelly-chain-rush/gizlilik" },
  },
};

const sections = [
  [
    "Overview",
    "Jelly Chain Rush is a mobile puzzle game in development by Lumisoft Studio. It is not currently distributed through public app stores.",
  ],
  [
    "This Product Page",
    "This static product page has no account system, forms, gameplay services, advertising, or tracking cookies. It does not collect gameplay or account data.",
  ],
  [
    "Public Availability",
    "Because the game is not publicly released, there is no production app data processing to describe. This policy will be updated before release if the game's data practices require additional information.",
  ],
  [
    "Accounts",
    "No Jelly Chain Rush account or sign-in is offered through this website.",
  ],
  [
    "Contact",
    "For privacy questions about Jelly Chain Rush, contact support@lumisoftstudios.com.",
  ],
];

export default function JellyChainRushPrivacyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Privacy Policy"
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
