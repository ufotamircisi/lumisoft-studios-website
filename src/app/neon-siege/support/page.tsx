import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Support",
  description: "Support for Neon Siege by Lumisoft Studio.",
};

const supportSections = [
  ["Purchase support", "Send your order platform, purchase date, and a short description of the issue. Do not send full payment card details."],
  ["Ads support", "Tell us whether the issue happened with a rewarded ad, interstitial ad, or banner ad, and what happened after the ad finished."],
  ["Gameplay support", "Include the level, game mode, and what you expected to happen."],
  ["Restore purchases", "Use the restore purchases option in the App when available. If it does not work, contact us with your device and store account platform."],
];

export default function NeonSiegeSupportPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Neon Siege Support"
        subtitle="For support, contact support@lumisoftstudios.com."
        lastUpdated="May 2026"
        backHref="/neon-siege"
        backLabel="Neon Siege"
      >
        <section className="text-slate-200 leading-relaxed space-y-4">
          <p>
            For support, contact:
          </p>
          <a href="mailto:support@lumisoftstudios.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors">
            support@lumisoftstudios.com
          </a>
          <p>
            Please include the app name, device model, OS version, and a short
            description of the issue.
          </p>
        </section>

        {supportSections.map(([title, body]) => (
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
