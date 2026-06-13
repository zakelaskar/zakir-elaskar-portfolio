import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SkillsSection } from "../components/SkillsSection";
import { education, profile } from "../data/site";

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Background, education, and career direction for Zakir Sajid Elaskar — data scientist and analytics professional."
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About me</h1>
        <p className="mt-2 text-slate-600">Analytics, rigor, and curiosity — with a human story.</p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 rounded-[2rem] bg-white/90 p-6 shadow-card ring-1 ring-slate-100 sm:p-10"
      >
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Story</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            My path into data science began with a Bachelor&apos;s in Artificial Intelligence and Data
            Science from Savitribai Phule Pune University, where I built foundations in data analysis,
            AI, machine learning and a little bit of deep learning concepts. I then moved to the United States
            to pursue graduate study — a transition that sharpened my communication, adaptability, and
            ability to collaborate across disciplines.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            At California State University, Chico, I completed my MS in Data Science and Analytics
            (May 2026), deepening expertise in reproducible analytics, applied modeling, and
            stakeholder-ready visualization. I am motivated by problems where messy real-world data,
            careful methods, and clear storytelling must all show up together — especially in public
            health, education, and operations.
          </p>
        </section>

        <SkillsSection className="scroll-mt-28 border-t border-slate-100 pt-8" />

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Education</h2>
          <ul className="mt-3 space-y-3">
            {education.map((e) => (
              <li key={e.school} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <p className="font-semibold text-slate-900">{e.school}</p>
                <p className="text-sm text-slate-700">{e.degree}</p>
                <p className="mt-1 text-xs text-slate-500">{e.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Career goals</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            I am pursuing roles where I can own analytical workflows end-to-end — from trustworthy
            data prep to modeling, evaluation, and executive-ready communication. I want to partner
            with teams that value reproducibility, ethical deployment, and measurable impact.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Contact:{" "}
            <a className="font-medium text-violet-700 hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </section>
      </motion.div>
    </>
  );
}
