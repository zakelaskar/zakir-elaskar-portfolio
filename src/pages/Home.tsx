import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { SkillsCloud } from "../components/SkillsCloud";
import { ProjectCover } from "../components/ProjectCover";
import {
  education,
  featuredAchievements,
  profile,
} from "../data/site";
import { projects } from "../data/projects";
import { experienceEntries } from "../data/experience";
import { cardLinkInteractive } from "../lib/cardLink";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

export function Home() {
  const featured = useMemo(
    () =>
      [...projects.filter((p) => p.featured)].sort(
        (a, b) => Number(!!b.flagship) - Number(!!a.flagship),
      ),
    [],
  );
  const latestExp = experienceEntries.slice(0, 3);

  return (
    <>
      <SEO
        fullTitle={`${profile.fullName} · ${profile.shortTitle}`}
        description={profile.heroDescription}
      />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] bg-white/90 p-8 shadow-card ring-1 ring-slate-100 sm:p-10 md:p-14"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-50/60 via-transparent to-violet-50/50" />
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800">
            <span aria-hidden>✨</span>
            {profile.availability}
          </div>
          <p className="text-lg font-semibold text-slate-900 sm:text-xl">{profile.heroIntro}</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            <span className="text-gradient-name">{profile.fullName}</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-800 sm:text-xl md:text-2xl">
            {profile.shortTitle}
          </p>
          <p className="mt-3 text-base font-medium text-violet-800 sm:text-lg">
            {profile.degreeLine1}
            <br />
            {profile.degreeLine2}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {profile.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cta-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
            >
              View Projects
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-200 hover:text-violet-800"
            >
              View resume
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-200 hover:text-violet-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mt-10 rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-slate-100 backdrop-blur sm:p-8"
      >
        <h2 className="text-lg font-semibold text-slate-900">Featured achievements</h2>
        <p className="mt-1 text-sm text-slate-600">
          Milestones across graduate study, research, internships, and large-scale analytics.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAchievements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/80 px-4 py-3 shadow-sm"
            >
              <span
                className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-sky-500"
                aria-hidden
              />
              <span className="text-sm font-medium leading-snug text-slate-800">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-12">
        <motion.section
          {...fadeUp}
          className="md:col-span-7 rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-slate-100 backdrop-blur sm:p-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Featured projects</h2>
              <p className="mt-1 text-sm text-slate-600">
            Flagship B-Line transit case study, plus ML, analytics, and systems work.
          </p>
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className={`group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/40 p-4 no-underline transition-colors hover:border-violet-200/80 hover:bg-white sm:flex-row ${cardLinkInteractive}`}
              >
                {p.heroImage ? (
                  <img
                    src={p.heroImage}
                    alt=""
                    className="h-24 w-32 shrink-0 rounded-xl object-cover ring-1 ring-slate-200/80 sm:h-28 sm:w-36"
                  />
                ) : (
                  <ProjectCover slug={p.slug} className="h-24 w-32 shrink-0 sm:h-28 sm:w-36" />
                )}
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-semibold text-slate-900 group-hover:text-violet-800">
                    {p.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-violet-700">{p.keyMetric}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 group-hover:text-violet-900">
                    View Project
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="md:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-slate-100 backdrop-blur sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-900">Experience preview</h2>
              <Link
                to="/experience"
                className="text-sm font-semibold text-violet-700 hover:text-violet-900"
              >
                Timeline
              </Link>
            </div>
            <ul className="mt-5 space-y-3">
              {latestExp.map((e) => (
                <li key={e.slug}>
                  <Link
                    to={`/experience/${e.slug}`}
                    className={`group block rounded-xl border border-slate-100 bg-slate-50/50 p-4 no-underline transition-colors hover:border-violet-200/80 hover:bg-white ${cardLinkInteractive}`}
                  >
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-violet-800">
                      {e.role}
                    </p>
                    <p className="text-sm text-slate-600">{e.organization}</p>
                    <p className="mt-1 text-xs text-slate-500">{e.duration}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-[1px] shadow-soft">
            <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
              <p className="mt-1 text-sm text-slate-600">Let’s connect.</p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-medium">
                <a className="text-violet-700 hover:underline" href={profile.github}>
                  GitHub
                </a>
                <a className="text-violet-700 hover:underline" href={profile.linkedin}>
                  LinkedIn
                </a>
                <a className="text-violet-700 hover:underline" href={`mailto:${profile.email}`}>
                  Email
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-cta-primary px-4 py-2.5 text-sm font-semibold text-white"
              >
                Open contact page
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="md:col-span-8"
        >
          <SkillsCloud />
        </motion.section>

        <motion.section
          {...fadeUp}
          className="md:col-span-4 rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-slate-100 backdrop-blur sm:p-8"
        >
          <h2 className="text-lg font-semibold text-slate-900">Education</h2>
          <ul className="mt-4 space-y-4">
            {education.map((ed) => (
              <li key={ed.school}>
                <p className="text-sm font-semibold text-slate-900">{ed.school}</p>
                <p className="text-sm text-slate-600">{ed.degree}</p>
                <p className="mt-1 text-xs text-slate-500">{ed.detail}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      <motion.section
        {...fadeUp}
        className="mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 p-[1px] shadow-card"
      >
        <div className="rounded-[calc(2rem-1px)] bg-white/95 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to collaborate?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Reach out for roles, research conversations, or project partnerships. Résumé and links
            are one click away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cta-primary px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Contact me
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-violet-200"
            >
              View resume
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
