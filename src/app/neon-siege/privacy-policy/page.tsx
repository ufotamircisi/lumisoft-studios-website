import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Privacy Policy",
  description: "Privacy Policy for Neon Siege by Lumisoft Studio.",
};

export default function NeonSiegePrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="Neon Siege by Lumisoft Studio"
        lastUpdated="May 28, 2026"
        backHref="/neon-siege"
        backLabel="Neon Siege"
      >
        <section className="text-slate-200 leading-relaxed space-y-4">
          <p>
            Neon Siege (&ldquo;the App&rdquo;) is developed by Lumisoft Studio.
            This Privacy Policy explains what information the App may use and
            how privacy questions can be sent to us.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:support@lumisoftstudios.com" className="text-violet-400 hover:text-violet-300">
              support@lumisoftstudios.com
            </a>
          </p>
        </section>

        {[
          ["Arcade Game", "Neon Siege is an arcade game developed and published by Lumisoft Studio."],
          ["Local Game Progress", "Game progress, settings, scores, achievements, and similar gameplay data may be stored locally on your device."],
          ["Accounts", "No account login is required to use Neon Siege."],
          ["Advertising", "The App may use Google AdMob to show ads. Ad formats may include rewarded ads, interstitial ads, and banner ads. Rewarded ads are optional."],
          ["Purchases", "The App may use Google Play Billing or App Store purchases. RevenueCat may be used to manage purchases and entitlements. Lumisoft Studio does not collect or store your payment card details."],
          ["Remove Forced Ads", "Remove Forced Ads removes forced ads between levels. Rewarded ads remain optional and may still be available when you choose to watch them."],
          ["Sensitive Data", "The App does not intentionally collect health, financial, government, or other sensitive personal data."],
          ["Children and Families", "Neon Siege is an entertainment game. It should be used according to the age rating, store listing, parental controls, and family settings available on your device and app store account."],
          ["Privacy Questions", "You can contact support@lumisoftstudios.com for privacy questions or requests related to Neon Siege."],
          ["Changes", "We may update this Privacy Policy from time to time. The latest version will be posted on this page."],
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
