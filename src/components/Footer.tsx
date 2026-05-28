import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTR = lang === "tr";

  const links = isTR
    ? [
        { href: "/tr/lumibaby/destek", label: "Destek" },
        { href: "/tr/lumibaby/gizlilik", label: "Gizlilik Politikası" },
        {
          href: "/tr/lumibaby/kullanim-kosullari",
          label: "Kullanım Koşulları",
        },
      ]
    : [
        { href: "/lumibaby/support", label: "Support" },
        { href: "/lumibaby/privacy", label: "Privacy Policy" },
        { href: "/lumibaby/terms", label: "Terms of Use" },
      ];
  const neonLinks = isTR
    ? [
        { href: "/tr/neon-siege/destek", label: "Destek" },
        { href: "/tr/neon-siege/gizlilik", label: "Gizlilik Politikası" },
        {
          href: "/tr/neon-siege/kullanim-kosullari",
          label: "Kullanım Koşulları",
        },
      ]
    : [
        { href: "/neon-siege/support", label: "Support" },
        { href: "/neon-siege/privacy-policy", label: "Privacy Policy" },
        { href: "/neon-siege/terms-of-use", label: "Terms of Use" },
      ];

  return (
    <footer className="border-t border-violet-500/10 bg-[#060915] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-white font-semibold text-base mb-2">
              <Image
                src="/images/lumisoft-studio-emblem.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              Lumisoft Studio
            </div>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Lumisoft Studio.{" "}
              {isTR ? "Tüm hakları saklıdır." : "All rights reserved."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                LumiBaby
              </p>
              <div className="flex flex-wrap gap-5">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-slate-300 hover:text-violet-300 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                Neon Siege
              </p>
              <div className="flex flex-wrap gap-5">
                {neonLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-slate-300 hover:text-violet-300 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-violet-500/10">
          <p className="text-xs text-slate-500 text-center">
            {isTR ? "Sorularınız mı var?" : "Questions?"}{" "}
            <a
              href="mailto:support@lumisoftstudios.com"
              className="text-slate-400 hover:text-violet-300 transition-colors"
            >
              support@lumisoftstudios.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
