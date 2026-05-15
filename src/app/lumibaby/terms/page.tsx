import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Terms of Use",
  description: "Terms of Use for LumiBaby by Lumisoft Studio.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Terms of Use"
        subtitle="LumiBaby by Lumisoft Studio"
        lastUpdated="May 16, 2026"
        appIcon="/images/lumibaby-icon.png"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            These Terms of Use govern your use of LumiBaby (&ldquo;the
            App&rdquo;), developed by Lumisoft Studio (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading or using
            the App, you agree to these Terms.
          </p>
        </section>

        {/* Not medical advice */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Not Medical Advice
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-3">
            <p>
              LumiBaby is not a medical device and does not provide medical
              advice. The App is intended for entertainment and informational
              purposes only. It is not a substitute for professional medical
              advice, diagnosis, or treatment.
            </p>
            <p>
              Always consult a qualified healthcare provider regarding your
              baby&apos;s health. For urgent medical concerns, contact a
              healthcare professional or emergency services immediately.
            </p>
          </div>
        </section>

        {/* User responsibilities */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Kullanıcı Sorumluluğu — User Responsibilities
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-3">
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Ensuring the App is used appropriately and safely in your
                household.
              </li>
              <li>Keeping your account and device secure.</li>
              <li>Not sharing your account with unauthorized users.</li>
            </ul>
            <p>
              You must be at least 18 years old, or have parental consent, to
              use the App.
            </p>
          </div>
        </section>

        {/* Subscription */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Abonelik — Premium Subscription
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              LumiBaby offers an optional premium subscription that unlocks
              additional content and removes advertising. Subscription pricing
              and features are displayed within the App.
            </p>
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-4 space-y-3">
              <p className="text-violet-200 text-sm leading-relaxed">
                Subscription automatically renews unless canceled. You can
                cancel anytime in your App Store or Google Play account
                settings.
              </p>
              <p className="text-violet-200 text-sm leading-relaxed">
                Abonelik otomatik yenilenir. İstediğiniz zaman App Store /
                Google Play hesap ayarlarınızdan iptal edebilirsiniz.
              </p>
            </div>
            <p>
              By subscribing, you authorize the recurring charge to your payment
              method until you cancel.
            </p>
          </div>
        </section>

        {/* Cancellation */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İptal — Cancellation
          </h2>
          <p className="text-slate-200 leading-relaxed">
            You may cancel your subscription at any time through your App Store
            (iPhone/iPad) or Google Play (Android) account settings.
            Cancellation takes effect at the end of the current billing period.
            Refunds are subject to Apple&apos;s and Google&apos;s respective
            refund policies.
          </p>
        </section>

        {/* Free tier */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Free Tier &amp; Advertising
          </h2>
          <p className="text-slate-200 leading-relaxed">
            A free tier is available. Free users may see third-party
            advertisements within the App. Upgrading to premium removes all
            ads.
          </p>
        </section>

        {/* Intellectual property */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Intellectual Property
          </h2>
          <p className="text-slate-200 leading-relaxed">
            All content within LumiBaby &mdash; including lullabies, sounds,
            stories, and the App itself &mdash; is the property of Lumisoft
            Studio or its licensors and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create
            derivative works from any content in the App.
          </p>
        </section>

        {/* Limitation */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Limitation of Liability
          </h2>
          <p className="text-slate-200 leading-relaxed">
            To the maximum extent permitted by law, Lumisoft Studio shall not
            be liable for any indirect, incidental, special, or consequential
            damages arising from your use of the App. The App is provided
            &ldquo;as is&rdquo; without warranties of any kind.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Changes to These Terms
          </h2>
          <p className="text-slate-200 leading-relaxed">
            We may update these Terms from time to time. Continued use of the
            App after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İletişim — Contact
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            For questions about these Terms, contact us at:
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
