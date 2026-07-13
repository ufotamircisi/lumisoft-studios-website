import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import StoreBadges from "@/components/StoreBadges";

export const metadata: Metadata = {
  title: "LumiBaby – Baby Sleep Support",
  description:
    "LumiBaby helps parents support baby sleep with cry detection, lullabies, sleep tracking, white noise, and sleep stories.",
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
    note: "A supportive tracking tool — not a medical sleep diagnosis system.",
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
    desc: "LumiBaby can provide sleep summaries and simple insights. Reports may include sleep duration, crying count, sleep quality, and routine-related observations.",
    note: "Reports are informational and not medical advice.",
  },
  {
    icon: "🔔",
    title: "Parent Connection & Alerts",
    bullets: [
      "Parents can connect another parent or caregiver device through the app.",
      "When important baby moments are detected — such as crying or calming events — LumiBaby can send alerts to connected phones.",
      "If the connected phone has smartwatch notifications enabled, alerts may also appear on the smartwatch, depending on device and notification settings.",
      "Helps both parents stay aware, especially during sleep routines, night care, or when one parent is in another room.",
    ],
    note: "Alert delivery depends on phone settings, internet connection, permissions, battery settings, and smartwatch configuration. Alerts are a supportive awareness tool — not a replacement for direct parental supervision.",
  },
  {
    icon: "🎵",
    title: "Lullabies",
    desc: "Parents can play calming lullabies to support naps, bedtime, and night routines.",
  },
  {
    icon: "🌊",
    title: "Colic Sounds",
    desc: "Parents can use soothing white noise and colic sounds such as shushing, fan, rain, waves, heartbeat, or similar calming sounds. These sounds may help create a more comforting sound environment.",
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
      <main className="flex-1 pt-16">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(109,40,217,0.3), rgba(79,70,229,0.1) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            {/* App icon */}
            <div className="flex justify-center mb-7">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl scale-110"
                  style={{ background: "rgba(109,40,217,0.3)" }}
                />
                <Image
                  src="/images/lumibaby-icon.png"
                  alt="LumiBaby"
                  width={112}
                  height={112}
                  className="relative rounded-[26px] shadow-[0_8px_40px_rgba(109,40,217,0.4)]"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-3">
              LumiBaby
            </h1>
            <p className="text-violet-300 text-lg font-semibold mb-5">
              Minik Uyku — Baby Sleep Support
            </p>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              A calm, supportive companion for the night shift. LumiBaby helps
              parents listen, track, and soothe — so the whole family can rest.
            </p>

            <div className="mb-8">
              <StoreBadges />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/lumibaby/support"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-violet-400/40 text-violet-200 hover:text-white hover:border-violet-400/70 text-sm font-semibold transition-colors"
              >
                Support
              </Link>
              <Link
                href="/lumibaby/privacy"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/lumibaby/terms"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </section>

        {/* ── 1. Cry & Colic Detectors — featured ─────────────── */}
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

        {/* ── 2–9. Feature grid ────────────────────────────────── */}
        <section className="px-4 pt-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gridFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-violet-500/15 p-6 transition-colors hover:border-violet-500/30 flex flex-col"
                  style={{ background: "rgba(13,18,48,0.7)" }}
                >
                  <div className="text-3xl mb-4 select-none">{f.icon}</div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {f.title}
                  </h3>

                  <div className="flex-1">
                    {/* Prose description */}
                    {f.desc && (
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">
                        {f.desc}
                      </p>
                    )}

                    {/* Bullet list */}
                    {f.bullets && f.bullets.length > 0 && (
                      <ul className="space-y-2 mb-3">
                        {f.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                          >
                            <span className="text-violet-500 mt-0.5 flex-shrink-0 leading-none">
                              ›
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Disclaimer note */}
                    {f.note && (
                      <p className="text-xs text-slate-500 leading-relaxed mt-auto pt-3 border-t border-white/[0.06]">
                        {f.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
