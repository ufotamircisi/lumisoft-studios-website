import Image from "next/image";

interface PhoneMockupProps {
  lang?: "en" | "tr";
}

/**
 * A CSS-built device frame presenting LumiBaby. No fabricated app UI:
 * the screen shows the official icon and wordmark on a calm night gradient.
 */
export default function PhoneMockup({ lang = "en" }: PhoneMockupProps) {
  return (
    <div className="animate-float relative mx-auto w-[240px] sm:w-[264px]">
      {/* ambient glow behind the device */}
      <div
        className="absolute inset-0 scale-110 rounded-[48px] blur-3xl"
        aria-hidden="true"
        style={{ background: "rgba(109,40,217,0.3)" }}
      />

      {/* frame */}
      <div className="relative rounded-[44px] border border-white/15 bg-[#0a0d1f] p-2.5 shadow-[0_24px_80px_rgba(5,7,15,0.8),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* screen */}
        <div
          className="relative aspect-[9/19] overflow-hidden rounded-[34px]"
          style={{
            background:
              "linear-gradient(180deg, #12102e 0%, #1a1440 45%, #0d0b24 100%)",
          }}
        >
          {/* soft aurora */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 90% 50% at 50% 12%, rgba(139,92,246,0.35), transparent 70%), radial-gradient(ellipse 70% 40% at 50% 95%, rgba(79,70,229,0.25), transparent 70%)",
            }}
          />
          {/* twinkling stars */}
          <div aria-hidden="true">
            {[
              ["18%", "14%", "0s"],
              ["72%", "10%", "1.4s"],
              ["30%", "26%", "2.6s"],
              ["82%", "30%", "0.9s"],
              ["12%", "44%", "2s"],
              ["64%", "48%", "3.2s"],
            ].map(([left, top, delay]) => (
              <span
                key={`${left}-${top}`}
                className="absolute h-1 w-1 rounded-full bg-violet-200/80"
                style={{
                  left,
                  top,
                  animation: `twinkle 3.4s ease-in-out ${delay} infinite`,
                }}
              />
            ))}
          </div>

          {/* content */}
          <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
            <Image
              src="/images/lumibaby-icon.png"
              alt=""
              width={96}
              height={96}
              className="h-24 w-24 rounded-[24px] shadow-[0_10px_36px_rgba(109,40,217,0.55)]"
            />
            <div>
              <p className="text-lg font-bold tracking-tight text-white">
                LumiBaby
              </p>
              <p className="mt-1 text-xs font-medium text-violet-300">
                {lang === "tr"
                  ? "Daha huzurlu geceler"
                  : "Calmer nights for the whole family"}
              </p>
            </div>
            {/* gentle sound bars, a nod to lullabies */}
            <div className="flex items-end gap-1" aria-hidden="true">
              {[10, 16, 22, 14, 18, 12, 20, 15].map((height, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-violet-400/50"
                  style={{
                    height,
                    animation: `twinkle 2.6s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* speaker pill */}
        <div
          className="absolute left-1/2 top-4 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/70"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
