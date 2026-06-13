import { motion } from "framer-motion";
import type { SkillCategory } from "../data/skills";
import { SkillCategoryIcon } from "./skillCategoryIcons";

const chipBase =
  "inline-block cursor-default rounded-full border border-slate-200/90 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm ring-1 ring-white/50 backdrop-blur-sm transition-colors duration-200 sm:text-[13px]";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/60 bg-white/55 p-5 shadow-soft ring-1 ring-slate-100/90 backdrop-blur-md sm:p-6"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/12 via-white to-sky-500/15 text-violet-700 ring-1 ring-violet-100/80"
          aria-hidden
        >
          <SkillCategoryIcon id={category.iconId} className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
            {category.title}
          </h3>
          {category.description ? (
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
              {category.description}
            </p>
          ) : null}
          <ul className="mt-4 flex list-none flex-wrap gap-2" aria-label={`Skills in ${category.title}`}>
            {category.skills.map((skill) => (
              <li key={skill}>
                <motion.span
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  className={`${chipBase} hover:border-violet-200/90 hover:bg-violet-50/50 hover:text-violet-950`}
                >
                  {skill}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
