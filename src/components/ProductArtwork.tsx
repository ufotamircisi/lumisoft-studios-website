import Image from "next/image";

interface ProductArtworkProps {
  src: string;
  name: string;
  alt: string;
  label: string;
  accent: string;
  priority?: boolean;
}

export default function ProductArtwork({
  src,
  name,
  alt,
  label,
  accent,
  priority = false,
}: ProductArtworkProps) {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute inset-8 rounded-full blur-3xl"
        aria-hidden="true"
        style={{ background: accent }}
      />
      <div className="card-glass relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden p-8 text-center sm:min-h-[420px] sm:p-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at 50% 35%, ${accent}, transparent 58%)`,
          }}
        />
        <Image
          src={src}
          alt={alt}
          width={512}
          height={512}
          priority={priority}
          sizes="(max-width: 640px) 224px, 288px"
          className="relative h-56 w-56 object-contain drop-shadow-[0_24px_48px_rgba(5,7,15,0.55)] sm:h-72 sm:w-72"
        />
        <figcaption className="relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {name} <span aria-hidden="true">·</span> {label}
        </figcaption>
      </div>
    </figure>
  );
}
