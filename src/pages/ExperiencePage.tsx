import { MotionLink } from "../components/MotionLink";
import { SEO } from "../components/SEO";
import { experienceEntries } from "../data/experience";
import { cardLinkInteractive } from "../lib/cardLink";

export function ExperiencePage() {
  return (
    <>
      <SEO
        title="Experience"
        description="Internships and professional experience in public health analytics, data science, and higher education."
      />
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Experience
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Internships and coordination roles where analytics met real-world operations — county
          surveillance support, campus engagement analytics, and state public health modernization.
        </p>
      </header>

      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-violet-200 via-indigo-200 to-transparent sm:left-[15px]"
        />
        <ol className="space-y-10">
          {experienceEntries.map((e, idx) => (
            <li key={e.slug} className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-gradient-to-br from-violet-500 to-indigo-500 shadow-sm sm:top-3 sm:h-8 sm:w-8">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <MotionLink
                to={`/experience/${e.slug}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className={`group block rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 no-underline hover:ring-violet-100/80 sm:p-8 ${cardLinkInteractive}`}
              >
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-violet-800">
                    {e.role}
                  </h2>
                  <p className="mt-1 text-slate-700">{e.organization}</p>
                  <p className="mt-2 text-sm font-medium text-violet-700">{e.duration}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {e.timelineBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </MotionLink>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
