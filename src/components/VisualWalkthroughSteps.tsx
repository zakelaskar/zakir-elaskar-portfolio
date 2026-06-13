import { useEffect, useState } from "react";
import type { GalleryItem, VisualWalkthroughConfig } from "../data/projects";

type LightboxState = { src: string; alt: string; caption?: string } | null;

type VisualWalkthroughStepsProps = {
  slug: string;
  config: VisualWalkthroughConfig;
  gallery: readonly GalleryItem[];
};

export function VisualWalkthroughSteps({ slug, config, gallery }: VisualWalkthroughStepsProps) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="mt-6">
        <div className="mb-10">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {config.subsectionTitle}
          </h3>
          {config.leadIn ? (
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{config.leadIn}</p>
          ) : null}
        </div>

        <div className="divide-y divide-slate-200 border-t border-slate-200">
          {config.steps.map((step, si) => {
            const item = gallery[step.galleryIndex];
            if (!item?.src) return null;

            return (
              <article key={`${slug}-wt-${step.title}-${si}`} className="py-10 first:pt-8 sm:py-12">
                <h4 className="text-lg font-semibold tracking-tight text-slate-900">{step.title}</h4>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
                  {step.explanation}
                </p>

                <div className="mt-8 flex w-full justify-center">
                  <figure className="mx-auto w-full sm:w-[90%] md:w-[88%] lg:w-[85%]">
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in rounded-xl border-0 bg-white p-1.5 text-left shadow-none ring-1 ring-slate-200/80 transition hover:ring-violet-300/70 focus-visible:outline focus-visible:ring-2 focus-visible:ring-violet-500 sm:p-2.5"
                      onClick={() =>
                        setLightbox({
                          src: item.src!,
                          alt: item.alt,
                          caption: step.figureCaption,
                        })
                      }
                      aria-label={`Open larger view: ${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading={si === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="mx-auto block h-auto w-full rounded-lg shadow-[0_16px_48px_-16px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.04]"
                      />
                    </button>
                    <figcaption className="mt-4 px-1 text-center text-sm leading-relaxed text-slate-600">
                      {step.figureCaption}
                    </figcaption>
                  </figure>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mt-12 border-t border-slate-200 pt-10"
          role="region"
          aria-labelledby={`${slug}-key-takeaways-heading`}
        >
          <h3
            id={`${slug}-key-takeaways-heading`}
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Key takeaways
          </h3>
          {config.keyTakeawaysSummary ? (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
              {config.keyTakeawaysSummary}
            </p>
          ) : null}
          <p
            className={`max-w-3xl text-base leading-relaxed text-slate-600 ${config.keyTakeawaysSummary ? "mt-8" : "mt-5"}`}
          >
            Additional details, source code, and implementation resources can be found in the{" "}
            <a
              href="https://github.com/zakelaskar/Math485-Project"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-violet-700 underline decoration-violet-200 underline-offset-2 hover:text-violet-900"
            >
              GitHub
            </a>{" "}
            repository. I encourage you to explore the project to see the complete workflow and model
            evaluation process.
          </p>
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[94vh] max-w-[min(1400px,96vw)] overflow-auto rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-200/20"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot preview"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="mx-auto block max-h-[min(88vh,1200px)] w-auto max-w-full rounded-lg object-contain"
            />
            {lightbox.caption ? (
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
                {lightbox.caption}
              </p>
            ) : null}
            <div className="mt-5 flex justify-center pb-1">
              <button
                type="button"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
