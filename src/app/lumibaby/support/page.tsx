import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Support",
  description:
    "Get help with LumiBaby, the baby sleep app by Lumisoft Studio. Contact us at support@lumisoftstudios.com.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="LumiBaby Support"
        subtitle="We are here to help. Reach out anytime."
        lastUpdated="May 2026"
        appIcon="/images/lumibaby-icon.png"
      >
        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Contact Us
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              If you have a question, issue, or feedback about LumiBaby, please
              email us at:
            </p>
            <div>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
              >
                support@lumisoftstudios.com
              </a>
            </div>
            <p>
              We typically respond within 1&ndash;2 business days. When
              reaching out, please include your device type and a brief
              description of the issue so we can assist you as quickly as
              possible.
            </p>
          </div>
        </section>

        {/* Turkish support */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Destek / Support (TR)
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              LumiBaby ile ilgili sorularınız, sorunlarınız veya
              geri bildirimleriniz için aşağıdaki e-posta adresine
              yazabilirsiniz:
            </p>
            <div>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
              >
                support@lumisoftstudios.com
              </a>
            </div>
            <p>Genellikle 1&ndash;2 iş günü içinde yanıt veriyoruz.</p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-white font-medium mb-1">
                How do I cancel my subscription?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Subscriptions can be canceled through your App Store
                (iPhone/iPad) or Google Play (Android) account settings. Look
                for &ldquo;Subscriptions&rdquo; in your account menu.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Does LumiBaby access my microphone?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                LumiBaby requests microphone access only for the cry detection
                feature. You can enable or disable this permission in your
                device settings at any time.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Are parent voice recordings stored online?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Parent voice recordings are stored locally on your device. They
                are not uploaded to any server unless you explicitly choose to
                share or export them.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Why does the app show ads?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Free users may see ads. Upgrading to a premium subscription
                removes all ads and unlocks the full content library.
              </p>
            </div>
          </div>
        </section>

        {/* Medical notice */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-5">
          <p className="text-amber-300 text-sm font-semibold mb-2">
            ⚠ Medical Notice
          </p>
          <p className="text-slate-200 text-sm leading-relaxed">
            LumiBaby is not a medical device and is not intended to diagnose,
            treat, or prevent any medical condition. For urgent medical concerns
            about your baby&apos;s health, please contact a qualified healthcare
            professional or emergency services immediately.
          </p>
        </div>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
