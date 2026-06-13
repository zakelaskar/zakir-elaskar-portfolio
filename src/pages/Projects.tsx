import { useMemo, useState } from "react";
import { MotionLink } from "../components/MotionLink";
import { HeroMedia } from "../components/HeroMedia";
import { SEO } from "../components/SEO";
import {
  projectCategoryFilters,
  projects,
  type ProjectCategory,
} from "../data/projects";
import { cardLinkInteractive } from "../lib/cardLink";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <>
      <SEO
        title="Projects"
        description="Portfolio of data science, machine learning, and analytics projects by Zakir Sajid Elaskar."
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Case studies spanning public transit optimization (flagship B-Line analysis), AutoML tooling,
          deep learning in healthcare research, and systems-level CS writing — each grounded in
          reproducible workflows and clear communication.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {projectCategoryFilters.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={[
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                active
                  ? "bg-violet-600 text-white shadow-sm"
                  : "border border-slate-200 bg-white/80 text-slate-700 hover:border-violet-200 hover:text-violet-800",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filtered.map((p, idx) => (
          <MotionLink
            key={p.slug}
            to={`/projects/${p.slug}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`group flex min-h-0 flex-col overflow-hidden rounded-3xl bg-white/90 shadow-soft ring-1 ring-slate-100 no-underline hover:ring-violet-100/80 active:translate-y-0 ${cardLinkInteractive}`}
          >
            {/*
              Fixed aspect hero so the band always has height (absolute children inside
              grid rows otherwise collapse to 0 and create a huge blank area).
            */}
            <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden rounded-t-3xl bg-slate-100">
              <HeroMedia
                slug={p.slug}
                heroImage={p.heroImage}
                title={p.title}
                className="absolute inset-0 h-full w-full rounded-none rounded-t-3xl"
              />
            </div>

            <article className="flex min-h-0 flex-1 flex-col gap-0 px-3.5 py-2.5">
              <div className="flex flex-wrap gap-0.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-800 ring-1 ring-violet-100/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-0.5 text-lg font-bold leading-tight text-slate-900 group-hover:text-violet-800">
                {p.title}
              </h2>
              <p className="mt-0.5 line-clamp-3 text-sm leading-snug text-slate-600">{p.summary}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{p.technologies.join(" · ")}</p>

              <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-1.5">
                <p className="font-mono text-xs font-medium text-slate-600">{p.keyMetric}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 transition group-hover:text-violet-900">
                  View Project
                  <span aria-hidden>→</span>
                </span>
              </div>
            </article>
          </MotionLink>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-slate-600">No projects match this filter yet.</p>
      ) : null}
    </>
  );
}
