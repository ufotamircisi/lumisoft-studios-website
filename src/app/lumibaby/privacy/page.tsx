import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Privacy Policy",
  description:
    "Privacy Policy for LumiBaby by Lumisoft Studio. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="LumiBaby by Lumisoft Studio"
        lastUpdated="May 16, 2026"
        appIcon="/images/web/lumibaby-icon.webp"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby (&ldquo;the App&rdquo;) is developed by Lumisoft Studio.
            Your privacy matters to us. This policy explains what information
            the App may collect or use, and how we handle it.
          </p>
        </section>

        {/* Baby profile */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Baby Profile Information
          </h2>
          <p className="text-slate-200 leading-relaxed">
            You may create a baby profile within the App (for example, a name
            or date of birth) to personalize your experience. This information
            is stored locally on your device and is not transmitted to our
            servers.
          </p>
        </section>

        {/* Microphone */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Microphone Permission: Cry Detection
          </h2>
          <p className="text-slate-200 leading-relaxed">
            The App may request access to your device&apos;s microphone to
            enable the cry detection feature. Microphone data is processed
            locally on your device and is not transmitted to our servers. You
            can revoke microphone permission at any time in your device&apos;s
            settings.
          </p>
        </section>

        {/* Parent voice */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Parent Voice &amp; Audio Recordings
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            You may record your own voice within the App to create personalized
            audio for your baby. These recordings are stored locally on your
            device.
          </p>
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-4">
            <p className="text-violet-200 text-sm leading-relaxed">
              <strong className="text-violet-100">Important:</strong> Parent
              voice and audio recordings are intended to stay on the user&apos;s
              device unless the user explicitly shares or exports them.
            </p>
          </div>
        </section>

        {/* Local storage */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Local Storage
          </h2>
          <p className="text-slate-200 leading-relaxed">
            The App stores preferences, content settings, and other data
            locally on your device to provide a personalized experience. This
            data remains on your device and is not sent to our servers.
          </p>
        </section>

        {/* Purchases */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Purchases &amp; Subscriptions
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Subscriptions and in-app purchases are processed by Apple (App
            Store) or Google (Google Play), using RevenueCat as the payment
            platform. Lumisoft Studio does not collect or store your payment
            information. Please refer to Apple&apos;s and Google&apos;s
            respective privacy policies for details on how they handle payment
            data.
          </p>
        </section>

        {/* Advertising */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Advertising
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Free users of LumiBaby may see advertisements served by
            third-party advertising networks. These networks may use
            non-personally-identifying information to serve relevant ads.
            Premium subscribers do not see ads.
          </p>
        </section>

        {/* Children */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Children&apos;s Privacy
          </h2>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby is designed for use by parents and caregivers. The App
            does not knowingly collect personal information from children under
            13. If you believe a child has provided personal information, please
            contact us at{" "}
            <a
              href="mailto:support@lumisoftstudios.com"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              support@lumisoftstudios.com
            </a>
            .
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Changes to This Policy
          </h2>
          <p className="text-slate-200 leading-relaxed">
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you through the App or by updating
            the date at the top of this policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Contact
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            For questions about this Privacy Policy, contact us at:
          </p>
          <a
            href="mailto:support@lumisoftstudios.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
          >
            support@lumisoftstudios.com
          </a>
        </section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
