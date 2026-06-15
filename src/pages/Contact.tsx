import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { profile } from "../data/site";

export function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Zakir Sajid Elaskar for data science, analytics, and collaboration opportunities."
      />
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] bg-white/90 p-6 shadow-card ring-1 ring-slate-100 sm:p-10"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h1>
          <p className="mt-3 text-slate-600">
            I&apos;d love to hear about roles, collaborations, or research conversations aligned with
            analytics and responsible ML.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 font-medium text-slate-900 transition hover:border-violet-200"
              href={`mailto:${profile.email}`}
            >
              Email
              <span className="text-violet-700">{profile.email}</span>
            </a>
            <a
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 font-medium text-slate-900 transition hover:border-violet-200"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span className="text-violet-700">Profile →</span>
            </a>
            <a
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 font-medium text-slate-900 transition hover:border-violet-200"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span className="text-violet-700">Repositories →</span>
            </a>
          </div>
          <Link
            to="/resume"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cta-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
          >
            View resume (PDF)
          </Link>
        </motion.div>
      </div>
    </>
  );
}
