import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { profile } from "../data/site";

export function Resume() {
  const pdfSrc = profile.resumePath;
  const downloadName = profile.resumeDownloadFileName;

  return (
    <>
      <SEO
        title="Resume"
        description="Preview and download Zakir Sajid Elaskar’s data scientist résumé (PDF)."
      />

      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-slate-100 bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 sm:flex-row sm:items-end sm:justify-between sm:p-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Resume</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Preview the PDF below. Use <strong>Download PDF</strong> for an offline copy, or{" "}
            <a
              href={pdfSrc}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-violet-700 underline-offset-2 hover:underline"
            >
              open in a new tab
            </a>{" "}
            if the preview does not load in your browser.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <a
            href={pdfSrc}
            download={downloadName}
            className="inline-flex items-center justify-center rounded-full bg-cta-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
          >
            Download PDF
          </a>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100/80 shadow-card ring-1 ring-slate-100"
      >
        <iframe
          title="Résumé PDF preview"
          src={`${pdfSrc}#view=FitH`}
          className="h-[min(78vh,1200px)] w-full min-h-[480px] bg-white"
        />
      </motion.div>
    </>
  );
}
