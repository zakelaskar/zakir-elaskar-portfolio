import type { ResearchQuestionsBlock } from "../data/projects";

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 8v4l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V5M8 19v-6m4 6V9m4 10v-3m4 3v-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRoute({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 17v1.5M6 11h12M18 17v1.5M4 11a2 2 0 012-2h12a2 2 0 012 2v5a1 1 0 01-1 1h-1.5M4 17h1.5M6 19h3m6 0h3m-9-8v2m6-2v2M8 15h.01M16 15h.01"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardStyles = [
  "from-sky-500/[0.12] via-white to-indigo-500/[0.08] ring-sky-200/70 text-sky-950",
  "from-violet-500/[0.11] via-white to-fuchsia-500/[0.07] ring-violet-200/70 text-violet-950",
  "from-emerald-500/[0.11] via-white to-teal-500/[0.08] ring-emerald-200/70 text-emerald-950",
] as const;

const iconWrap = [
  "bg-sky-500/15 text-sky-800 ring-sky-300/50",
  "bg-violet-500/15 text-violet-800 ring-violet-300/50",
  "bg-emerald-500/15 text-emerald-800 ring-emerald-300/50",
] as const;

const icons = [IconClock, IconChart, IconRoute] as const;

export function ResearchQuestionsSection({ intro, questions }: ResearchQuestionsBlock) {
  return (
    <div className="mt-6">
      <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">{intro}</p>
      <p className="mt-3 text-sm font-medium text-slate-500">
        Use these questions as a roadmap—the related analysis links jump to the matching sections and
        figures later on this page.
      </p>

      <ol className="mt-10 grid list-none gap-6 p-0 lg:grid-cols-3" role="list">
        {questions.map((q, i) => {
          const Icon = icons[i] ?? IconClock;
          const card = cardStyles[i % cardStyles.length];
          const wrap = iconWrap[i % iconWrap.length];
          return (
            <li key={q.code} role="listitem">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] ring-1 ${card}`}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/40 blur-2xl"
                  aria-hidden
                />
                <div className="relative flex flex-wrap items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ${wrap}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-2xl bg-white/95 px-4 py-2 text-2xl font-black tracking-tight text-slate-900 shadow-md ring-1 ring-slate-200/90 sm:text-3xl">
                    {q.code}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold leading-snug tracking-tight text-slate-900">
                  {q.title}
                </h3>

                <div className="relative mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Purpose</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{q.purpose}</p>
                </div>

                <div className="relative mt-5 flex flex-1 flex-col border-t border-slate-200/60 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Related analysis
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500">
                    Jump to the matching section or figure later on this page.
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {q.relatedAnalysis.map((item) => (
                      <li key={`${q.code}-${item.anchorId}-${item.label}`}>
                        <a
                          href={`#${item.anchorId}`}
                          className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-100/80 transition hover:border-sky-300 hover:bg-sky-50/90 hover:text-sky-950"
                        >
                          {item.label}
                          <span className="ml-1 text-sky-600" aria-hidden>
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
