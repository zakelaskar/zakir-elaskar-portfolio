import type { SkillCategoryIconId } from "../data/skills";

const cls = "h-5 w-5 shrink-0";

export function SkillCategoryIcon({
  id,
  className = cls,
}: {
  id: SkillCategoryIconId;
  className?: string;
}) {
  switch (id) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 5a3 3 0 00-3 3v1H7a2 2 0 00-2 2v1a2 2 0 002 2h1v2a3 3 0 003 3 3 3 0 003-3v-1h1a2 2 0 002-2v-1a2 2 0 00-2-2h-1V8a3 3 0 00-3-3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6M10 9h4M10 15h4"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3a7 7 0 107 7c0 2-2 3-3.5 2.5S12 14 12 12a3 3 0 013-3 7 7 0 00-3-6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="7" cy="13" r="1" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "health":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 21s-7-4.5-7-11a5 5 0 0110 0c0 6.5-7 11-7 11z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 11v5M9.5 13.5h5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M9 20l-5 2V6l5-2 6 2 5-2v16l-5 2-6-2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 10V20M15 12v8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M9 5h6M9 5a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.55" />
        </svg>
      );
    case "gears":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82 1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "toolbox":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8zM2 10h20M8 10V8a2 2 0 012-2h4a2 2 0 012 2v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        </svg>
      );
  }
}
