import Image from "next/image";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  lastUpdatedLabel?: string;
  backHref?: string;
  backLabel?: string;
  backLinkText?: string;
  appIcon?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  lastUpdatedLabel,
  backHref = "/lumibaby",
  backLabel = "LumiBaby",
  backLinkText,
  appIcon,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Page header */}
      <div className="relative border-b border-violet-500/15 py-14 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(109, 40, 217, 0.18), transparent)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 mb-8 font-medium transition-colors"
          >
            {backLinkText ?? <>&larr; Back to {backLabel}</>}
          </Link>

          {appIcon && (
            <div className="mb-5">
              <Image
                src={appIcon}
                alt=""
                width={52}
                height={52}
                className="rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              />
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-200 text-lg font-medium">{subtitle}</p>
          )}
          {lastUpdated && (
            <p className="text-sm text-slate-400 mt-2">
              {lastUpdatedLabel ?? "Last updated:"} {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 pb-20 space-y-10">
        {children}
      </div>
    </div>
  );
}
