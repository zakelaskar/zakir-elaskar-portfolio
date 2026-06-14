import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { featuredSkillsCloud, featuredSkillsCloudHighlights } from "../data/skills";

const highlightSet = new Set<string>(featuredSkillsCloudHighlights);

const chipBase =
  "cursor-default rounded-full border backdrop-blur-sm ring-1 transition-colors duration-200";

function skillCloudClass(label: string) {
  if (highlightSet.has(label)) {
    return `${chipBase} px-3.5 py-2 text-sm font-semibold text-violet-950 shadow-md ring-violet-200/50 border-violet-300/70 bg-gradient-to-br from-white via-violet-50/90 to-violet-100/80`;
  }
  return `${chipBase} px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm ring-white/50 border-slate-200/90 bg-white/90`;
}

type SkillsCloudProps = {
  /** Optional extra section classes (grid column span, etc.) */
  className?: string;
};

/** Compact featured skill chips for the Home page. */
export function SkillsCloud({ className = "" }: SkillsCloudProps) {
  return (
    <section
      className={`rounded-3xl border border-white/50 bg-white/70 p-6 shadow-soft ring-1 ring-slate-100/90 backdrop-blur-md sm:p-8 ${className}`}
      aria-labelledby="skills-cloud-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="skills-cloud-heading" className="text-lg font-semibold text-slate-900">
            Skills at a glance
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-600">
            A cross-section of tools and methods; see the full categorized list on About.
          </p>
        </div>
        <Link
          to="/about#skills"
          className="shrink-0 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
        >
          Full skills →
        </Link>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-2.5">
        {featuredSkillsCloud.map((s, i) => (
          <motion.span
            key={`${s}-${i}`}
            layout
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            className={skillCloudClass(s)}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
