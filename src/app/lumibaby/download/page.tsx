import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const APP_STORE_URL =
  "https://apps.apple.com/app/lumibaby-audio-baby-monitor/id6762529949";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.lumibaby";
const LUMIBABY_URL = "/lumibaby";

export const metadata: Metadata = {
  title: "Download LumiBaby",
  description:
    "Download LumiBaby for iPhone, iPad, or Android from the official app stores.",
  alternates: {
    canonical: "/lumibaby/download",
  },
};

export default function LumiBabyDownloadPage() {
  const redirectScript = `
    (function () {
      var ua = navigator.userAgent || navigator.vendor || "";
      var isIPadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
      var isIOS = /iPhone|iPad|iPod/i.test(ua) || isIPadOS;
      var isAndroid = /Android/i.test(ua);

      if (isIOS) {
        window.location.replace(${JSON.stringify(APP_STORE_URL)});
        return;
      }

      if (isAndroid) {
        window.location.replace(${JSON.stringify(GOOGLE_PLAY_URL)});
      }
    })();
  `;

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />

        <section className="relative min-h-[calc(100vh-8rem)] overflow-hidden px-4 py-20 sm:py-28">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(109,40,217,0.26), rgba(79,70,229,0.08) 52%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
            <Image
              src="/images/web/lumibaby-icon.webp"
              alt="LumiBaby"
              width={96}
              height={96}
              className="mb-7 rounded-[22px] shadow-[0_8px_36px_rgba(109,40,217,0.35)]"
              priority
            />

            <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Redirecting to LumiBaby...
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
              If you are not redirected automatically, choose your app store
              below.
            </p>

            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                href={APP_STORE_URL}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                Download on the App Store
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                Get it on Google Play
              </a>
            </div>

            <noscript>
              <p className="mt-5 text-sm leading-relaxed text-violet-200">
                JavaScript is disabled, so automatic redirection cannot run.
                Please use one of the store links above.
              </p>
            </noscript>

            <Link
              href={LUMIBABY_URL}
              className="mt-7 text-sm font-medium text-violet-200 underline-offset-4 hover:text-white hover:underline"
            >
              Back to LumiBaby page
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
