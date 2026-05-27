import Image from "next/image";
import Link from "next/link";

interface AppCardProps {
  icon?: string;
  iconImage?: string;
  name: string;
  tagline: string;
  description: string;
  href?: string;
  badge?: string;
  learnMoreLabel?: string;
  badges?: React.ReactNode;
}

export default function AppCard({
  icon,
  iconImage,
  name,
  tagline,
  description,
  href,
  badge,
  learnMoreLabel,
  badges,
}: AppCardProps) {
  const linksWholeCard = Boolean(href && !badges);
  const cardClass = [
    "relative rounded-2xl border p-6 h-full transition-all duration-300",
    href
      ? `border-violet-500/20 bg-[#0d1230]/70 hover:border-violet-400/50 hover:bg-violet-900/20 ${
          linksWholeCard ? "cursor-pointer" : ""
        }`
      : "border-violet-500/15 bg-[#0d1230]/50",
  ].join(" ");

  const inner = (
    <>
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-200 border border-violet-500/30">
          {badge}
        </span>
      )}

      <div className="mb-5">
        {iconImage ? (
          <Image
            src={iconImage}
            alt={name}
            width={56}
            height={56}
            className="rounded-2xl"
          />
        ) : icon ? (
          <span className="text-4xl select-none">{icon}</span>
        ) : null}
      </div>

      <h3 className="text-base font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-violet-300 font-medium mb-3">{tagline}</p>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>

      {href && linksWholeCard && (
        <p className="mt-5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
          {learnMoreLabel ?? "Learn more →"}
        </p>
      )}
      {href && !linksWholeCard && (
        <Link
          href={href}
          className="mt-5 inline-block text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
        >
          {learnMoreLabel ?? "Learn more →"}
        </Link>
      )}
      {badges && <div className="mt-4">{badges}</div>}
    </>
  );

  if (href && linksWholeCard) {
    return (
      <Link href={href} className="group block">
        <div className={cardClass}>{inner}</div>
      </Link>
    );
  }

  return (
    <div className="group block">
      <div className={cardClass}>{inner}</div>
    </div>
  );
}
