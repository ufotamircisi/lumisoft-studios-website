import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Privacy Policy",
  description: "Privacy Policy placeholder for Jelly Chain Rush by Lumisoft Studio.",
};

const sections = [
  [
    "Overview",
    "Jelly Chain Rush is a mobile puzzle game in development by Lumisoft Studio. This page is a simple placeholder policy for the pre-release website.",
  ],
  [
    "Current Status",
    "The game is not publicly released yet. Full policy details will be finalized before public store release if needed.",
  ],
  [
    "Game Data",
    "The released game may store gameplay progress, settings, level progress, and similar puzzle-game data on your device or through platform services used by the app.",
  ],
  [
    "Accounts",
    "No public account system is available for Jelly Chain Rush on this website.",
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
