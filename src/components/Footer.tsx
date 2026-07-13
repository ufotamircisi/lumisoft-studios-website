import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { games, apps, STORE_URLS } from "@/lib/products";

export default function Footer({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTR = lang === "tr";
  const l = isTR ? "tr" : "en";

  const companyLinks = isTR
    ? [
        { href: "/tr/about", label: "Hakkımızda" },
        { href: "/tr/support", label: "Destek" },
        { href: "/tr/contact", label: "İletişim" },
      ]
    : [
        { href: "/about", label: "About" },
        { href: "/support", label: "Support" },
        { href: "/contact", label: "Contact" },
      ];

  const legalLinks = isTR
    ? [
        { href: "/tr/privacy", label: "Gizlilik Politikası" },
        { href: "/tr/terms", label: "Kullanım Koşulları" },
      ]
    : [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Use" },
      ];

  const columns = [
    {
      title: isTR ? "Oyunlar" : "Games",
      links: games.map((g) => ({
        href: g.href?.[l],
        label: g.name,
        soon: !g.href,
      })),
    },
    {
      title: isTR ? "Uygulamalar" : "Apps",
      links: apps.map((a) => ({
        href: a.href?.[l],
        label: a.name,
        soon: !a.href,
      })),
    },
    {
      title: isTR ? "Stüdyo" : "Company",
      links: companyLinks.map((c) => ({ ...c, soon: false })),
    },
    {
      title: isTR ? "Yasal" : "Legal",
      links: legalLinks.map((c) => ({ ...c, soon: false })),
    },
  ];

  return (
    <footer className="mt-auto border-t border-white/[0.07] bg-[#060915]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand */}
          <div>
            <Link
              href={isTR ? "/tr" : "/"}
              className="mb-3 inline-flex items-center gap-2.5 text-base font-semibold text-white"
            >
              <BrandLogo size={30} />
              Lumisoft Studios
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {isTR
                ? "iOS ve Android için özenle geliştirilmiş oyunlar ve uygulamalar üreten bağımsız stüdyo."
                : "An independent studio crafting polished games and apps for iOS and Android."}
            </p>
            <a
              href="mailto:support@lumisoftstudios.com"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-violet-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              support@lumisoftstudios.com
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow mb-4 text-slate-500">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors hover:text-violet-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-slate-500">
                        {link.label}
                        <span className="ml-1.5 text-[10px] uppercase tracking-wider text-slate-600">
                          {isTR ? "Yakında" : "Soon"}
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Lumisoft Studios.{" "}
            {isTR ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={STORE_URLS.lumibaby.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              App Store
            </a>
            <span className="text-slate-700" aria-hidden="true">
              ·
            </span>
            <a
              href={STORE_URLS.lumibaby.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
