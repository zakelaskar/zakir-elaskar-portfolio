import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { publications } from "../data/publications";
import { getProjectBySlug } from "../data/projects";

const bLine = getProjectBySlug("b-line-public-transit-optimization");

function PubLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function Research() {
  return (
    <>
      <SEO
        title="Research"
        description="Publications and culminating work in data science and analytics by Zakir Sajid Elaskar."
      />
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Research</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Selected publications and a dedicated space for culminating academic work — with links to
          deeper project write-ups.
        </p>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 sm:p-8"
      >
        <h2 className="text-xl font-semibold text-slate-900">Publications</h2>
        <ul className="mt-4 space-y-4">
          {publications.map((pub) => (
            <li
              key={pub.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-violet-200/80"
            >
              <PubLink
                href={pub.href}
                className="block font-semibold text-violet-800 hover:text-violet-950"
              >
                {pub.title}
              </PubLink>
              <p className="mt-1 text-sm text-slate-600">
                {pub.venue} · {pub.year}
              </p>
              {pub.note ? <p className="mt-2 text-xs text-slate-500">{pub.note}</p> : null}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-500">
          Add future papers in <code className="font-mono text-slate-700">src/data/publications.ts</code>.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-600/90 to-violet-600/90 p-[1px] shadow-soft"
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            Master&apos;s culminating project
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            B-Line Public Transit: A Data-Driven Analysis for Service Optimization
          </h2>
          <p className="mt-3 text-slate-600">
            {bLine?.summary ??
              "Ridership modeling, statistical testing, and visualization to inform transit service decisions."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/projects/b-line-public-transit-optimization"
              className="inline-flex rounded-full bg-cta-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              View Project
            </Link>
            <Link
              to="/projects"
              className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800"
            >
              All projects
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="mt-6 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">Academic projects</h2>
        <p className="mt-3 text-slate-600">
          Course-driven and applied projects live alongside research-grade work in the projects
          gallery — especially where methods, evaluation, and communication standards match
          publication quality even if they are not yet peer reviewed.
        </p>
        <Link
          to="/projects"
          className="mt-4 inline-flex text-sm font-semibold text-violet-700 hover:text-violet-900"
        >
          Browse the projects gallery →
        </Link>
      </section>
    </>
  );
}
