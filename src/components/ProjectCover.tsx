import { useId } from "react";

const accents = [
  "from-violet-500/25 via-fuchsia-200/20 to-sky-300/30",
  "from-sky-400/25 via-indigo-200/25 to-violet-300/30",
  "from-indigo-500/20 via-violet-200/25 to-emerald-200/25",
] as const;

function hashIndex(slug: string, mod: number) {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h + slug.charCodeAt(i) * (i + 1)) % 997;
  return h % mod;
}

export function ProjectCover({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const patternId = `grid-${uid}`;
  const i = hashIndex(slug, accents.length);
  const pattern = (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );

  return (
    <div
      className={`relative h-full min-h-0 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${accents[i]} ${className}`}
    >
      {pattern}
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full bg-violet-300/30 blur-2xl" />
    </div>
  );
}
