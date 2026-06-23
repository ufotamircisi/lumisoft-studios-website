import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Terms of Use",
  description: "Terms of Use placeholder for Jelly Chain Rush by Lumisoft Studio.",
};

const sections = [
  [
    "Overview",
    "These Terms of Use are a simple pre-release placeholder for Jelly Chain Rush, a mobile puzzle game in development by Lumisoft Studio.",
  ],
  [
    "Pre-release Information",
    "Website descriptions, feature names, and release timing may change while the game is being developed.",
  ],
  [
    "No Store Availability Yet",
    "Jelly Chain Rush is currently in development. Store links will be added when the game is ready.",
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
