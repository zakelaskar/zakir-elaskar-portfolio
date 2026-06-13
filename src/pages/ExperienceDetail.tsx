import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { HeroMedia } from "../components/HeroMedia";
import { Markdown } from "../components/Markdown";
import { SEO } from "../components/SEO";
import { getAdjacentExperience, getExperienceBySlug, type Metric } from "../data/experience";
import { nonEmpty, nonEmptyArray } from "../lib/content";
import {
  ExperienceBadgeIcon,
  type ExperienceBadgeIconKind,
} from "../lib/experienceIcons";
import { experienceBadgeIconKind } from "../lib/experienceBadgeKind";
import { profile, siteBaseUrl } from "../data/site";
import { NotFound } from "./NotFound";

const box =
  "mt-10 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 sm:p-8";

const toolBadgeBase =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition";
const toolBadgeCaseStudy =
  "border-teal-200/80 bg-gradient-to-r from-teal-50/90 to-emerald-50/70 text-teal-950 ring-1 ring-teal-100/60";
const toolBadgeDefault = "border-slate-200 bg-white text-slate-800";

function iconToneClass(kind: ExperienceBadgeIconKind): string {
  if (kind === "map") return "text-teal-700";
  if (kind === "health") return "text-rose-600";
  if (kind === "code") return "text-indigo-600";
  return "text-violet-600";
}

function ToolsSection({
  technologies,
  withIcons,
}: {
  technologies: readonly string[];
  withIcons: boolean;
}) {
  if (technologies.length === 0) return null;
  return (
    <section className={box} aria-labelledby="exp-tools">
      <h2 id="exp-tools" className="text-xl font-semibold text-slate-900">
        Tools &amp; technologies
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        {withIcons
          ? "Stack used for registry analytics, statistical programming, and GIS deliverables."
          : "Primary tools and languages used in this role."}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((t) => {
          const kind = experienceBadgeIconKind(t);
          return (
            <span
              key={t}
              className={`${toolBadgeBase} ${withIcons ? toolBadgeCaseStudy : toolBadgeDefault}`}
            >
              {withIcons ? (
                <ExperienceBadgeIcon
                  label={t}
                  className={`h-3.5 w-3.5 shrink-0 ${iconToneClass(kind)}`}
                />
              ) : null}
              {t}
            </span>
          );
        })}
      </div>
    </section>
  );
}

function SkillsDemonstratedSection({ skills }: { skills: readonly string[] }) {
  if (!nonEmptyArray(skills)) return null;
  return (
    <section className={box} aria-labelledby="exp-skills">
      <h2 id="exp-skills" className="text-xl font-semibold text-slate-900">
        Skills demonstrated
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Methods spanning epidemiology, healthcare analytics, GIS, and communication for technical and
        program audiences.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => {
          const kind = experienceBadgeIconKind(s);
          return (
            <span
              key={s}
              className={`${toolBadgeBase} ${toolBadgeCaseStudy}`}
            >
              <ExperienceBadgeIcon
                label={s}
                className={`h-3.5 w-3.5 shrink-0 ${iconToneClass(kind)}`}
              />
              {s}
            </span>
          );
        })}
      </div>
    </section>
  );
}

function MetricsSection({
  metrics,
  isCaseStudy,
}: {
  metrics: readonly Metric[];
  isCaseStudy: boolean;
}) {
  if (!nonEmptyArray(metrics)) return null;
  return (
    <section className={box} aria-labelledby="exp-metrics">
      <h2 id="exp-metrics" className="text-xl font-semibold text-slate-900">
        {isCaseStudy ? "Impact highlights" : "Key metrics"}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        {isCaseStudy
          ? "At-a-glance scale, data provenance, and how GIS and epidemiology framed the analysis."
          : "Quantitative anchors for this role."}
      </p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={`rounded-2xl border px-4 py-3 ${
              isCaseStudy
                ? "border-teal-100 bg-gradient-to-br from-teal-50/80 to-white ring-1 ring-teal-50"
                : "border-slate-100 bg-slate-50/80"
            }`}
          >
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {m.label}
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ImpactHighlightsSection({ highlights }: { highlights: readonly string[] }) {
  if (!nonEmptyArray(highlights)) return null;
  return (
    <section className={box} aria-labelledby="exp-impact">
      <h2 id="exp-impact" className="text-xl font-semibold text-slate-900">
        Impact highlights
      </h2>
      <ul className="mt-4 space-y-2 text-slate-600">
        {highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ExperienceDetail() {
  const { slug } = useParams();
  const entry = slug ? getExperienceBySlug(slug) : undefined;

  if (!entry) {
    return <NotFound />;
  }

  const { prev, next } = getAdjacentExperience(entry.slug);
  const ogImage = `${siteBaseUrl}${profile.defaultOgImage}`;
  const contentSections = (entry.contentSections ?? []).filter((s) => nonEmpty(s.body));
  const links = entry.links ?? [];
  const isCaseStudy = entry.detailLayout === "case-study";
  const skillsDemonstrated = entry.skillsDemonstrated ?? [];

  const contentBlocks = contentSections.map((sec) => (
    <section key={sec.title} className={box}>
      <h2 className="text-xl font-semibold text-slate-900">{sec.title}</h2>
      <div className="mt-4">
        <Markdown>{sec.body}</Markdown>
      </div>
    </section>
  ));

  const extraMarkdown =
    nonEmpty(entry.content) ? (
      <section className={box}>
        <Markdown>{entry.content!}</Markdown>
      </section>
    ) : null;

  const resourcesSection = nonEmptyArray(links) ? (
    <section className={box} aria-labelledby="exp-resources">
      <h2 id="exp-resources" className="text-xl font-semibold text-slate-900">
        Resources
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) =>
          l.href.startsWith("/") ? (
            <Link
              key={l.href}
              to={l.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              {l.label}
            </a>
          ),
        )}
      </div>
    </section>
  ) : null;

  return (
    <>
      <SEO
        title={`${entry.organization} — ${entry.role}`}
        description={entry.seoDescription}
        image={ogImage}
      />

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[2rem] bg-white/90 shadow-card ring-1 ring-slate-100"
      >
        <HeroMedia
          slug={entry.slug}
          heroImage={entry.heroImage}
          title={`${entry.role} at ${entry.organization}`}
          className="h-48 w-full sm:h-56"
        />
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-900 ring-1 ring-sky-100"
              >
                {t}
              </span>
            ))}
          </div>
          {entry.caseStudyLabel && isCaseStudy ? (
            <p className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-teal-200/80 bg-gradient-to-r from-teal-50 to-emerald-50/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-950 ring-1 ring-teal-100/60">
              {entry.caseStudyLabel}
              {nonEmpty(entry.caseStudySubcaption) ? (
                <span className="font-normal normal-case text-teal-800/90">
                  · {entry.caseStudySubcaption}
                </span>
              ) : null}
            </p>
          ) : null}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {entry.role}
          </h1>
          <p className="mt-2 text-lg text-slate-700">{entry.organization}</p>
          {entry.location ? (
            <p className="mt-1 text-sm text-slate-500">{entry.location}</p>
          ) : null}
          <p className="mt-4 text-sm font-semibold text-violet-700">{entry.duration}</p>
          <p className="mt-4 max-w-3xl text-slate-600">{entry.summary}</p>
        </div>
      </motion.header>

      {isCaseStudy ? (
        <>
          <MetricsSection metrics={entry.metrics ?? []} isCaseStudy />
          {contentBlocks}
          {extraMarkdown}
          <ToolsSection technologies={entry.technologies} withIcons />
          <SkillsDemonstratedSection skills={skillsDemonstrated} />
        </>
      ) : (
        <>
          <ImpactHighlightsSection highlights={entry.impactHighlights ?? []} />
          <MetricsSection metrics={entry.metrics ?? []} isCaseStudy={false} />
          <ToolsSection technologies={entry.technologies} withIcons={false} />
          {contentBlocks}
          {extraMarkdown}
          <SkillsDemonstratedSection skills={skillsDemonstrated} />
        </>
      )}

      {resourcesSection}

      <nav
        className="mt-12 flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Experience pagination"
      >
        <div>
          {prev ? (
            <Link
              to={`/experience/${prev.slug}`}
              className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              ← Previous: {prev.role}
            </Link>
          ) : (
            <span className="text-sm text-slate-400">Previous</span>
          )}
        </div>
        <Link
          to="/experience"
          className="text-center text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
        >
          Back to Experience
        </Link>
        <div className="text-right">
          {next ? (
            <Link
              to={`/experience/${next.slug}`}
              className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              Next: {next.role} →
            </Link>
          ) : (
            <span className="text-sm text-slate-400">Next</span>
          )}
        </div>
      </nav>
    </>
  );
}
