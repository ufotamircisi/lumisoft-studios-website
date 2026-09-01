import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Terms of Use",
  description:
    "Terms of Use for LumiBaby baby monitoring, sleep support, and Premium subscriptions.",
};

const sections = [
  {
    title: "Baby Monitoring and Sleep Support",
    paragraphs: [
      "LumiBaby provides baby monitoring and sleep support features that may include Video Baby Monitor, Audio Baby Monitor, QR device pairing, Hold to Talk, cry detection, automatic soothing, Mom Voice and Mom Pre-Sound recordings, calming audio, routines, reports, and notifications.",
      "You must grant the camera, microphone, and notification permissions needed for the features you choose. Live audio or video is available only during supported active monitoring conditions and may depend on the paired devices, internet access, operating system restrictions, permissions, and battery settings.",
    ],
  },
  {
    title: "Safety and Medical Disclaimer",
    paragraphs: [
      "LumiBaby is designed as a baby monitoring and sleep support tool. It is not a medical device, emergency monitoring service, or substitute for professional medical advice, diagnosis, treatment, or appropriate adult supervision.",
      "Video monitoring, audio monitoring, cry detection, automatic soothing, and notifications may be delayed, interrupted, or inaccurate. They do not guarantee that every cry or event will be detected, that every alert will arrive, or that a baby will be safe. For urgent health or safety concerns, contact an appropriate healthcare professional or emergency service.",
    ],
  },
  {
    title: "Your Responsibilities",
    paragraphs: [
      "You are responsible for using LumiBaby lawfully and safely, maintaining direct adult supervision, keeping paired devices and QR pairing details secure, and preventing unauthorized access to monitoring sessions.",
      "You may monitor or record only where you have the legal right and any required consent. You must not use LumiBaby to monitor another person without authorization, invade privacy, harass anyone, or interfere with the App or its services. You must be at least 18 years old or have permission from a parent or legal guardian to use the App.",
    ],
  },
  {
    title: "LumiBaby Premium",
    paragraphs: [
      "LumiBaby offers optional weekly and yearly Premium subscriptions. The features, current price, billing period, and any introductory offer presented to you are shown in the App before purchase.",
      "Apple processes iOS subscriptions through the App Store, and Google processes Android subscriptions through Google Play. LumiBaby does not charge your credit card directly. RevenueCat may be used to manage purchase status and Premium entitlement.",
    ],
  },
  {
    title: "Automatic Renewal and Cancellation",
    paragraphs: [
      "Subscriptions are auto-renewing unless cancelled according to the applicable App Store or Google Play terms. Your store account may be charged for renewal within the period stated by that store.",
      "You can manage or cancel your subscription through your Apple account or Google Play account. Cancellation normally takes effect at the end of the current paid period. Refund eligibility and billing disputes are handled under the applicable store's rules.",
    ],
  },
  {
    title: "Free Trials and Promotional Offers",
    paragraphs: [
      "A free trial may be available to eligible users where offered by the applicable app store. Availability, duration, eligibility, conversion to a paid subscription, and cancellation timing are governed by the offer shown by the App Store or Google Play. A trial is not promised to every user.",
    ],
  },
  {
    title: "Restore Purchases",
    paragraphs: [
      "Supported Apple or Google purchases can be restored or refreshed using LumiBaby's restore flow and the applicable store mechanisms. You must use the store account associated with the original purchase. Restoration may depend on the store confirming an active purchase or entitlement.",
    ],
  },
  {
    title: "Free Tier and Advertising",
    paragraphs: [
      "LumiBaby may provide a free tier supported by third-party advertising. Premium may remove ads and unlock additional content or features as described in the App. Available free and Premium features may change over time.",
    ],
  },
  {
    title: "Availability and Changes",
    paragraphs: [
      "We may maintain, update, change, suspend, or discontinue a feature where reasonably necessary. Monitoring and notifications can be affected by network outages, device settings, operating system behavior, third-party services, and other conditions outside our control.",
      "LumiBaby does not promise camera or video operation while the App is closed or inactive. You should not rely on the App as your only means of observing or protecting a baby.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "LumiBaby, its software, design, branding, and provided content such as lullabies, sounds, and stories are owned by Lumisoft Studio or its licensors and are protected by applicable law. This does not transfer ownership of recordings or information that you create in the App. You may not copy, distribute, reverse engineer, or create derivative works from protected App content except where the law permits.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, LumiBaby is provided as available and without warranties that every feature will be uninterrupted or error-free. Lumisoft Studio is not liable for indirect, incidental, special, or consequential damages arising from use of or inability to use the App. Nothing in these Terms excludes rights or liability that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. We will post the current version on this page and update the date above. If a change materially affects your use of LumiBaby, we may also provide notice in the App.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Terms of Use"
        subtitle="LumiBaby by Lumisoft Studio"
        lastUpdated="September 2, 2026"
        appIcon="/images/web/lumibaby-icon.webp"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            These Terms of Use govern your use of LumiBaby (&ldquo;the
            App&rdquo;), developed by Lumisoft Studio (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading or using
            the App, you agree to these Terms. If you do not agree, do not use
            the App.
          </p>
        </section>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
              {section.title}
            </h2>
            <div className="text-slate-200 leading-relaxed space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Contact
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
