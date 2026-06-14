import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { profile } from "../data/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nReply-to: ${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Zakir Sajid Elaskar for data science, analytics, and collaboration opportunities."
      />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
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

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-slate-100 bg-white/90 p-6 shadow-soft sm:p-8"
        >
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <label className="mt-6 block text-sm font-medium text-slate-800" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-violet-200 transition focus:ring-4"
            autoComplete="name"
          />
          <label className="mt-4 block text-sm font-medium text-slate-800" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-violet-200 transition focus:ring-4"
            autoComplete="email"
          />
          <label className="mt-4 block text-sm font-medium text-slate-800" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-violet-200 transition focus:ring-4"
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Compose email
          </button>
          {sent ? (
            <p className="mt-3 text-center text-xs text-slate-500">
              If your mail client did not open, email me directly at {profile.email}.
            </p>
          ) : null}
        </motion.form>
      </div>
    </>
  );
}
