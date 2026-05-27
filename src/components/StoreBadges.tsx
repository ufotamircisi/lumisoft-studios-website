const APP_STORE_URL =
  "https://apps.apple.com/tr/app/lumibaby-baby-sleep-tracker/id6762529949";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.lumisoft.lumibaby";

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.13.09-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.85M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M3.18 23.76a1.7 1.7 0 0 0 1.71-.12l13.04-7.56-2.97-2.97L3.18 23.76zm17.47-10.64L17.9 11.5 14.7 14.7l3.22 3.22 2.73-1.58a1.73 1.73 0 0 0 0-3.22zM1.15 1.01A1.7 1.7 0 0 0 .5 2.35v19.3c0 .57.3 1.07.65 1.34l.09.07 10.82-10.82v-.26L1.15 1.01zm12.09 6.64L2.23.36A1.7 1.7 0 0 0 .5.24L11.06 10.8l2.18-3.15z" />
    </svg>
  );
}

interface StoreBadgesProps {
  lang?: "en" | "tr";
  align?: "center" | "start";
}

export default function StoreBadges({
  lang = "en",
  align = "center",
}: StoreBadgesProps) {
  const isTR = lang === "tr";

  const alignClass = align === "center" ? "justify-center" : "justify-start";

  const badges = [
    {
      icon: <AppleIcon />,
      href: APP_STORE_URL,
      topLabel: isTR ? "İndir" : "Download on the",
      name: "App Store",
      ariaLabel: isTR ? "App Store'dan indir" : "Download on the App Store",
    },
    {
      icon: <PlayIcon />,
      href: GOOGLE_PLAY_URL,
      topLabel: isTR ? "Edinin" : "Get it on",
      name: "Google Play",
      ariaLabel: isTR ? "Google Play'den edinin" : "Get it on Google Play",
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${alignClass}`}>
      {badges.map((b) => (
        <a
          key={b.name}
          href={b.href}
          className="inline-flex min-h-[64px] min-w-[148px] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] py-2.5 pl-3 pr-4 transition-colors hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          aria-label={b.ariaLabel}
          title={b.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white flex-shrink-0">{b.icon}</div>
          <div>
            <p className="text-[9px] text-slate-400 uppercase tracking-wider leading-none">
              {b.topLabel}
            </p>
            <p className="text-sm font-semibold text-white leading-tight mt-0.5">
              {b.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
