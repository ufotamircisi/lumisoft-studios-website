import Image from "next/image";

interface BrandLogoProps {
  /** Rendered height of the visible mark, in pixels. */
  size: number;
  className?: string;
  priority?: boolean;
  alt?: string;
}

/**
 * Renders the official Lumisoft logo (public/brand/lumisoft-logo.png).
 * The source file keeps a large transparent margin around the mark, so the
 * image is scaled up with CSS only; the file itself is never modified.
 */
export default function BrandLogo({
  size,
  className,
  priority = false,
  alt = "",
}: BrandLogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className ?? ""}`}
      style={{ width: Math.round(size * 0.85), height: size }}
      aria-hidden={alt === "" ? true : undefined}
    >
      <Image
        src="/brand/lumisoft-logo.png"
        alt={alt}
        width={1024}
        height={1536}
        priority={priority}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
        style={{ transform: "scale(4.15) translateY(3.6%)" }}
      />
    </span>
  );
}
