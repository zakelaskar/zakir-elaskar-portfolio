import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { GalleryGrid } from "../components/GalleryGrid";
import { ResearchQuestionsSection } from "../components/ResearchQuestionsSection";
import { TechnicalCaseStudyFigure } from "../components/TechnicalCaseStudyFigure";
import { VisualWalkthroughSteps } from "../components/VisualWalkthroughSteps";
import { HeroMedia } from "../components/HeroMedia";
import { Markdown } from "../components/Markdown";
import { SEO } from "../components/SEO";
import type { ContentSection, Project } from "../data/projects";
import { getAdjacentProjects, getProjectBySlug } from "../data/projects";
import { nonEmpty, nonEmptyArray } from "../lib/content";
import { profile, siteBaseUrl } from "../data/site";
import { NotFound } from "./NotFound";

const box =
  "mt-10 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 sm:p-8";

function leadSectionIsRenderable(s: ContentSection, project: Project): boolean {
  if (s.renderMode === "metrics-grid" || s.renderMode === "live-demo-cta") return true;
  if (s.renderMode === "visual-walkthrough" && nonEmptyArray(s.walkthrough?.steps)) return true;
  if (s.renderMode === "impact-highlights" && nonEmptyArray(project.impactHighlights)) return true;
  if (
    s.renderMode === "research-questions" &&
    nonEmptyArray(s.researchQuestions?.questions)
  ) {
    return true;
  }
  if (
    s.renderMode === "technical-figure" &&
    s.technicalFigure !== undefined &&
    Boolean(project.gallery[s.technicalFigure.galleryIndex]?.src)
  ) {
    return true;
  }
  if (nonEmpty(s.body)) return true;
  if (nonEmptyArray(s.galleryIndices)) return true;
  return false;
}

function gallerySubset(project: Project, indices?: number[]) {
  if (!nonEmptyArray(indices)) return [];
  return indices.map((i) => project.gallery[i]).filter(Boolean);
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = getAdjacentProjects(project.slug);
  const ogImage = `${siteBaseUrl}${profile.defaultOgImage}`;
  const allSections = project.contentSections ?? [];
  const leadSections = project.leadWithContent
    ? allSections.filter((s) => leadSectionIsRenderable(s, project))
    : [];
  const classicSections = !project.leadWithContent
    ? allSections.filter((s) => nonEmpty(s.body))
    : [];

  return (
    <>
      <SEO
        title={project.title}
        description={project.seoDescription}
        image={ogImage}
      />

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-[2rem] bg-white/90 shadow-card ring-1 ring-slate-100"
      >
        <HeroMedia
          slug={project.slug}
          heroImage={project.heroImage}
          title={project.title}
          className={
            project.flagship
              ? "h-56 w-full sm:h-72 md:h-80"
              : "h-52 w-full sm:h-64"
          }
        />
        <div className="p-6 sm:p-10">
          {project.flagship ? (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-gradient-to-r from-sky-50 to-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-950 ring-1 ring-sky-100/60">
              Flagship case study
              <span className="font-normal normal-case text-sky-800/90">· Transportation analytics</span>
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {[...new Set([...project.categories, ...project.tags])].map((t) => (
              <span
                key={t}
                className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800 ring-1 ring-violet-100"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Period</p>
              <p className="mt-1 font-medium text-slate-800">{project.date}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Duration</p>
              <p className="mt-1 font-medium text-slate-800">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Technologies
              </p>
              <p className="mt-1 font-medium text-slate-800">{project.technologies.join(" · ")}</p>
            </div>
          </div>
        </div>
      </motion.header>

      {!project.leadWithContent && nonEmptyArray(project.impactHighlights) ? (
        <section className={box} aria-labelledby="impact-heading">
          <h2 id="impact-heading" className="text-xl font-semibold text-slate-900">
            Impact highlights
          </h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {project.impactHighlights!.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!project.leadWithContent && nonEmptyArray(project.metrics) ? (
        <section className={box} aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="text-xl font-semibold text-slate-900">
            Key metrics
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics!.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {m.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {!project.leadWithContent && project.technologies.length > 0 ? (
        <section className={box} aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-xl font-semibold text-slate-900">
            Tools &amp; skills used
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {project.leadWithContent
        ? leadSections.map((sec, idx) => (
            <section
              key={`${sec.title}-${idx}`}
              id={sec.anchorId}
              className={[box, sec.anchorId ? "scroll-mt-28" : ""].filter(Boolean).join(" ")}
              aria-labelledby={`lead-sec-${idx}`}
            >
              <h2 id={`lead-sec-${idx}`} className="text-xl font-semibold text-slate-900">
                {sec.title}
              </h2>

              {sec.renderMode === "metrics-grid" && nonEmptyArray(project.metrics) ? (
                <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.metrics!.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-slate-900">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {sec.renderMode === "live-demo-cta" && project.liveDemoPromo ? (
                <div className="mt-4 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/90 to-white p-6 shadow-sm ring-1 ring-violet-100/80">
                  <p className="text-base leading-relaxed text-slate-700">
                    {project.liveDemoPromo.callout}
                  </p>
                  <a
                    href={project.liveDemoPromo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-violet-700"
                  >
                    {project.liveDemoPromo.buttonLabel}
                  </a>
                </div>
              ) : null}

              {sec.renderMode === "impact-highlights" && nonEmptyArray(project.impactHighlights) ? (
                <ul className="mt-4 space-y-2 text-slate-600">
                  {project.impactHighlights!.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {sec.renderMode === "research-questions" && sec.researchQuestions ? (
                <ResearchQuestionsSection {...sec.researchQuestions} />
              ) : null}

              {sec.renderMode === "visual-walkthrough" && sec.walkthrough ? (
                <VisualWalkthroughSteps
                  slug={project.slug}
                  config={sec.walkthrough}
                  gallery={project.gallery}
                />
              ) : null}

              {sec.renderMode !== "metrics-grid" &&
              sec.renderMode !== "live-demo-cta" &&
              sec.renderMode !== "visual-walkthrough" &&
              sec.renderMode !== "impact-highlights" &&
              sec.renderMode !== "research-questions" &&
              nonEmpty(sec.body) ? (
                <div className="mt-4">
                  <Markdown>{sec.body}</Markdown>
                </div>
              ) : null}

              {sec.renderMode === "technical-figure" && sec.technicalFigure ? (
                project.gallery[sec.technicalFigure.galleryIndex]?.src ? (
                  <TechnicalCaseStudyFigure
                    instanceId={`${project.slug}-fig-${sec.technicalFigure.galleryIndex}-${idx}`}
                    item={project.gallery[sec.technicalFigure.galleryIndex]!}
                    caption={sec.technicalFigure.caption}
                    keyInsight={sec.technicalFigure.keyInsight}
                    variant={sec.technicalFigure.variant}
                  />
                ) : null
              ) : null}

              {sec.renderMode !== "visual-walkthrough" &&
              sec.renderMode !== "technical-figure" &&
              sec.renderMode !== "research-questions" &&
              nonEmptyArray(sec.galleryIndices) ? (
                <GalleryGrid
                  slugPrefix={project.slug}
                  items={gallerySubset(project, sec.galleryIndices)}
                />
              ) : null}
            </section>
          ))
        : null}

      {!project.leadWithContent
        ? classicSections.map((sec) => (
            <section key={sec.title} className={box} aria-labelledby={`sec-${sec.title}`}>
              <h2 id={`sec-${sec.title}`} className="text-xl font-semibold text-slate-900">
                {sec.title}
              </h2>
              <div className="mt-4">
                <Markdown>{sec.body}</Markdown>
              </div>
            </section>
          ))
        : null}

      {project.leadWithContent && !project.hideToolsOnDetail && project.technologies.length > 0 ? (
        <section className={box} aria-labelledby="tools-heading-lead">
          <h2 id="tools-heading-lead" className="text-xl font-semibold text-slate-900">
            Tools &amp; skills used
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {nonEmpty(project.content) ? (
        <section className={box}>
          <Markdown>{project.content!}</Markdown>
        </section>
      ) : null}

      {project.gallery.length > 0 && !project.hideDetailGallery ? (
        <section className={box} aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="text-xl font-semibold text-slate-900">
            Gallery
          </h2>
          <GalleryGrid slugPrefix={project.slug} items={project.gallery} />
        </section>
      ) : null}

      {nonEmptyArray(project.links) ? (
        <section className={box} aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="text-xl font-semibold text-slate-900">
            Resources
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((l) =>
              l.disabled || !l.href ? (
                <button
                  key={l.label}
                  type="button"
                  disabled
                  title="Link will be added when the report is published"
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500"
                >
                  {l.label}
                </button>
              ) : l.href.startsWith("/") ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
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
      ) : null}

      <nav
        className="mt-12 flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Project pagination"
      >
        <div>
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              ← Previous: {prev.title}
            </Link>
          ) : (
            <span className="text-sm text-slate-400">Previous project</span>
          )}
        </div>
        <Link
          to="/projects"
          className="text-center text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
        >
          Back to Projects
        </Link>
        <div className="text-right">
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              Next: {next.title} →
            </Link>
          ) : (
            <span className="text-sm text-slate-400">Next project</span>
          )}
        </div>
      </nav>
    </>
  );
}
