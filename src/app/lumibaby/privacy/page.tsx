import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Privacy Policy",
  description:
    "Privacy Policy for LumiBaby by Lumisoft Studio, including baby monitoring, permissions, recordings, notifications, and subscriptions.",
};

const sections = [
  {
    title: "Baby Information and Personalization",
    paragraphs: [
      "You may add a baby's name and date of birth to personalize the App. LumiBaby may also use sleep sessions, wake-ups, cry and detection history, routines, reminders, reports, and monitoring preferences to provide personalized cards and sleep support.",
      "These details are entered and managed by a parent or caregiver. LumiBaby is not intended for a child to use independently.",
    ],
  },
  {
    title: "Camera Permission and Video Baby Monitor",
    paragraphs: [
      "LumiBaby may request camera access when you scan a QR code to pair devices or start the Video Baby Monitor. The permission is requested only when a feature that needs the camera is used, and it can be revoked in your device settings.",
      "During an active Video Baby Monitor session, live images may be transmitted between paired devices. The feature provides a live view and is not offered as a video recording feature. LumiBaby does not keep the live image as a video archive on Lumisoft Studio servers.",
    ],
  },
  {
    title: "Microphone Permission and Audio",
    paragraphs: [
      "LumiBaby may request microphone access for the Audio Baby Monitor, audio in the Video Baby Monitor, cry detection, voice communication through Hold to Talk, Mom Voice recording, and Mom Pre-Sound recording. The permission is requested when you use a feature that needs it and can be revoked in device settings.",
      "During an active monitoring or Hold to Talk session, live audio may be transmitted between paired devices. Cry detection analyzes microphone input to try to identify crying while the supported monitoring feature is actively listening.",
    ],
  },
  {
    title: "Mom Voice and Mom Pre-Sound Recordings",
    paragraphs: [
      "A Mom Voice or Mom Pre-Sound recording begins only when you deliberately start the recording in the App. Current LumiBaby materials describe these recordings as stored locally on your device.",
      "Mom Voice and Mom Pre-Sound recordings stay on the device unless you explicitly choose to share or export them.",
    ],
  },
  {
    title: "Live Monitoring and Device Pairing",
    paragraphs: [
      "Audio or video may be transmitted between devices that you pair during an active monitoring session. You must grant the relevant camera or microphone permissions and keep the App in a supported active monitoring state.",
      "Monitoring availability can depend on internet access, device settings, permissions, battery restrictions, and whether the relevant LumiBaby screen is active. LumiBaby does not promise camera or video operation while the App is closed or inactive.",
    ],
  },
  {
    title: "Cry Detection and Automatic Soothing",
    paragraphs: [
      "If you enable cry detection, LumiBaby may try to identify your baby's crying. When crying is detected, the App may automatically start the soothing option you selected, such as a Mom Voice, a Mom Pre-Sound followed by a selected sound, a lullaby, white noise, or a colic or soothing sound.",
      "After the baby becomes quiet, the selected audio may continue for up to approximately one minute. Playback then stops and active monitoring returns to listening. The cycle may start again if new crying is detected. Detection can be affected by distance, background noise, microphone quality, device placement, and connectivity, so it may not identify every cry.",
    ],
  },
  {
    title: "Parent Notifications",
    paragraphs: [
      "LumiBaby may send notifications about cry detection and relevant monitoring events to a paired parent device. Delivering an alert can depend on device notification permissions, internet access, phone settings, and battery restrictions. Notifications support awareness but do not replace direct supervision.",
    ],
  },
  {
    title: "Local Storage, Retention, and Deletion",
    paragraphs: [
      "LumiBaby stores baby profile details, Mom Voice and Mom Pre-Sound recordings, preferences, content settings, routines, and sleep or report data locally on your device. Live video is not retained as a LumiBaby server video archive. Monitoring event information may be sent to a paired device when needed to provide an alert or monitoring feature.",
      "You can remove locally stored information with the controls available in the App. Removing the App may also remove its local data, subject to your operating system's backup and restore behavior. For a deletion request concerning information under Lumisoft Studio's control, contact us at the address below.",
    ],
  },
  {
    title: "Purchases and Subscriptions",
    paragraphs: [
      "LumiBaby Premium is offered through weekly and yearly subscriptions. Apple processes purchases on iOS through the App Store, and Google processes purchases on Android through Google Play. Lumisoft Studio does not directly collect or store your credit card details.",
      "RevenueCat may be used to manage purchase status and Premium entitlement. It processes the purchase and subscription status made available through the applicable store for that purpose. Apple, Google, and RevenueCat handle information under their own privacy policies.",
    ],
  },
  {
    title: "Advertising",
    paragraphs: [
      "Free users may see ads provided by third-party advertising services. Depending on your device settings, consent choices, and the service used, those services may process device identifiers, advertising data, and app usage data to deliver or measure ads. Premium subscribers do not see ads in LumiBaby.",
    ],
  },
  {
    title: "Children's Privacy and Safety",
    paragraphs: [
      "LumiBaby is designed for parents and caregivers. Baby profile, sleep, and monitoring event information is provided and managed by the adult using the App. We do not knowingly collect personal information directly from children under 13.",
      "LumiBaby is a baby monitoring and sleep support tool. It is not a medical device, emergency monitoring service, or substitute for appropriate adult supervision. Video monitoring, audio monitoring, cry detection, and notifications do not guarantee a baby's safety.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. If we make material changes, we will provide notice through the App or update the date at the top of this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="LumiBaby by Lumisoft Studio"
        lastUpdated="September 2, 2026"
        appIcon="/images/web/lumibaby-icon.webp"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby (&ldquo;the App&rdquo;) is developed by Lumisoft Studio.
            This Privacy Policy explains how the App uses information and
            device permissions when you use its baby monitoring, sleep support,
            personalization, notification, and subscription features.
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
            For privacy questions or deletion requests related to LumiBaby,
            contact us at:
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
