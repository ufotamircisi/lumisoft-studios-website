import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import ProductMotion from "@/components/ProductMotion";
import BabyFeatureGroups from "@/components/BabyFeatureGroups";
import ProductHero from "@/components/ProductHero";

export const metadata: Metadata = {
  title: "LumiBaby: Baby Sleep Support",
  description:
    "LumiBaby helps parents support baby sleep with cry detection, lullabies, sleep tracking, white noise, and sleep stories.",
  alternates: {
    canonical: "/lumibaby",
    languages: { "en-US": "/lumibaby", "tr-TR": "/tr/lumibaby" },
  },
  openGraph: {
    title: "LumiBaby: Baby Sleep Support",
    description:
      "Cry detection, sleep tracking, calming audio, parent alerts, and practical bedtime support for families.",
    url: "/lumibaby",
    images: [{ url: "/images/lumibaby-icon.png", width: 1024, height: 1024, alt: "LumiBaby" }],
  },
};

interface Feature {
  icon: string;
  title: string;
  desc?: string;
  bullets?: string[];
  note?: string;
}

const gridFeatures: Feature[] = [
  {
    icon: "😴",
    title: "Sleep Tracking",
    bullets: [
      "Parents can track baby sleep sessions.",
      "Helps follow sleep duration, naps, night sleep, and routines.",
    ],
    note: "A supportive tracking tool, not a medical sleep diagnosis system.",
  },
  {
    icon: "🤔",
    title: "Why Is My Baby Crying?",
    desc: "LumiBaby includes a guided crying helper. Parents can answer simple questions to think through common reasons such as hunger, sleepiness, gas, diaper, or general discomfort.",
    note: "Informational only. Does not replace medical advice.",
  },
  {
    icon: "🎙️",
    title: "Parent Voice Recording",
    bullets: [
      "Parents can record their own soothing voice.",
      "Parent voice can be used as a familiar calming sound.",
      "Parent voice can be selected for detector playback.",
    ],
    note: "Voice recordings are intended to stay on your device unless you explicitly share or export them.",
  },
  {
    icon: "📊",
    title: "Detailed Sleep Reports",
    desc: "LumiBaby organizes sleep sessions, wake-ups, crying events, and detector history into practical summaries.",
    note: "Reports are informational and not medical advice.",
  },
  {
    icon: "🔔",
    title: "Parent Connection & Alerts",
    bullets: [
      "Parents can connect another parent or caregiver device through the app.",
      "With QR pairing, crying alerts can be sent from the device near the baby to the connected parent device.",
      "This helps a parent or caregiver stay informed during sleep routines and night care.",
    ],
    note: "Alert delivery depends on phone settings, internet connection, permissions, and battery settings. Alerts support awareness but do not replace direct parental supervision.",
  },
  {
    icon: "🎵",
    title: "Lullabies",
    desc: "Parents can play calming lullabies to support naps, bedtime, and night routines.",
  },
  {
    icon: "🌊",
    title: "Colic Sounds",
    desc: "Parents can use soothing sounds such as shushing, white noise, fan, vacuum, hair dryer, and other colic sounds to support a calmer routine.",
    note: "This is not medical treatment for colic.",
  },
  {
    icon: "📖",
    title: "Sleep Stories",
    desc: "Parents can play gentle sleep stories designed for calm bedtime or nap routines.",
  },
];

export default function LumiBabyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="product-main baby-detail"><ProductMotion />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <ProductHero slug="lumibaby" lang="en" />

        {/* ── 1. Cry & Colic Detectors, featured ─────────────── */}
        <section className="px-4 pb-4">
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-2xl border border-violet-500/35 p-7 sm:p-9"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,18,50,0.97) 0%, rgba(20,12,45,0.97) 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-500/35 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    👂
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-violet-300 bg-violet-500/15 border border-violet-500/25 rounded-full px-3 py-1 mb-4">
                    Core Feature
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                    Cry &amp; Colic Detectors
                  </h2>

                  {/* How it works */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-violet-400 text-base leading-none flex-shrink-0">
                        ✦
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        LumiBaby can listen through the device microphone
                        while the detector screen is active.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-violet-400 text-base leading-none flex-shrink-0">
                        ✦
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        When crying-like sound is detected, it can
                        automatically start the selected lullaby, parent
                        voice, or soothing colic/white noise sound.
                      </p>
                    </li>
                  </ul>

                  {/* Tip */}
                  <div className="flex items-start gap-3 rounded-xl bg-violet-500/10 border border-violet-500/20 px-4 py-3 mb-5">
                    <span className="text-violet-300 text-lg leading-none flex-shrink-0 mt-0.5">
                      💡
                    </span>
                    <p className="text-sm text-violet-100 leading-relaxed">
                      <strong className="font-semibold">Best results:</strong>{" "}
                      Keep the detector screen open and the phone unlocked
                      during use for uninterrupted monitoring.
                    </p>
                  </div>

                  {/* Disclaimers */}
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] px-4 py-3 space-y-2">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Detection accuracy may vary depending on distance,
                      background noise, phone placement, microphone quality,
                      and environment.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      LumiBaby does not replace parental supervision, medical
                      advice, or dedicated emergency monitoring equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2-9. Feature grid ────────────────────────────────── */}
        <section className="baby-features"><BabyFeatureGroups features={gridFeatures} lang="en" /></section>

        {/* ── Premium ──────────────────────────────────────────── */}
        <section className="py-16 px-4 border-t border-violet-500/10">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl border border-violet-500/30 p-8 text-center"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(109,40,217,0.15), rgba(13,18,50,0.9) 70%)",
              }}
            >
              <div className="text-4xl mb-5 select-none">⭐</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                LumiBaby Premium
              </h2>
              <p className="text-slate-200 leading-relaxed mb-4">
                Unlock the full library of lullabies, sleep stories, and colic
                sounds. Premium removes ads and gives your family access to
                everything LumiBaby has to offer.
              </p>
              <p className="text-sm text-slate-400">
                Subscriptions are managed through the App Store or Google Play.
                A free tier with ads is also available.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06] px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-2 text-violet-400">FAQ</p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Common questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is LumiBaby free?",
                  a: "Yes. A free tier with ads is available. LumiBaby Premium unlocks the full library of lullabies, sleep stories, and colic sounds, and removes ads. Subscriptions are managed through the App Store or Google Play.",
                },
                {
                  q: "Does the cry detector replace supervision?",
                  a: "No. The detector is a supportive awareness tool. It does not replace parental supervision, medical advice, or dedicated emergency monitoring equipment.",
                },
                {
                  q: "Where are my voice recordings stored?",
                  a: "Voice recordings are intended to stay on your device unless you explicitly share or export them.",
                },
                {
                  q: "Can both parents receive alerts?",
                  a: "Yes. You can connect another parent or caregiver device through the app. Alert delivery depends on phone settings, internet connection, permissions, and battery settings.",
                },
              ].map((faq) => (
                <details key={faq.q} className="card-glass group p-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      className="text-violet-400 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Legal links ──────────────────────────────────────── */}
        <section className="py-10 px-4 border-t border-violet-500/10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-400 mb-5 text-sm font-medium uppercase tracking-wider">
              Legal &amp; Support
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/lumibaby/support"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Support
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href="/lumibaby/privacy"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href="/lumibaby/terms"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </section>

        <RelatedProducts currentSlug="lumibaby" lang="en" />
      </main>
      <Footer />
    </>
  );
}
