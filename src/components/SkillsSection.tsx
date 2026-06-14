import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { SkillCategoryCard } from "./SkillCategoryCard";

type SkillsSectionProps = {
  /** DOM id for deep links (e.g. /about#skills) */
  id?: string;
  className?: string;
};

/** Full categorized skills; use on About. */
export function SkillsSection({ id = "skills", className = "" }: SkillsSectionProps) {
  return (
    <section id={id} className={className} aria-labelledby="skills-section-heading">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 id="skills-section-heading" className="text-lg font-semibold text-slate-900 sm:text-xl">
          Skills &amp; capabilities
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Organized by domain so it is easy to scan, from programming and ML to public health, GIS,
          survey research, and automation.
        </p>
      </motion.div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
