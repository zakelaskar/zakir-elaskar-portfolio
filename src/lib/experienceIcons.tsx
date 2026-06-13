import { experienceBadgeIconKind, type ExperienceBadgeIconKind } from "./experienceBadgeKind";

function IconMap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <rect x="3" y="11" width="3.5" height="6" rx="0.5" />
      <rect x="8.25" y="7" width="3.5" height="10" rx="0.5" />
      <rect x="13.5" y="4" width="3.5" height="13" rx="0.5" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M4.5 6.5L2 10l2.5 3.5h2L4 10l2.5-3.5h-2zm11 0L18 10l-2.5 3.5h-2L16 10l-2.5-3.5h2zM7.5 3l5 14h-2L5.5 3h2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconHealth({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export type { ExperienceBadgeIconKind };

export function ExperienceBadgeIcon({
  label,
  className = "h-3.5 w-3.5 shrink-0",
}: {
  label: string;
  className?: string;
}) {
  const kind = experienceBadgeIconKind(label);
  if (kind === "map") return <IconMap className={className} />;
  if (kind === "code") return <IconCode className={className} />;
  if (kind === "health") return <IconHealth className={className} />;
  return <IconChart className={className} />;
}
