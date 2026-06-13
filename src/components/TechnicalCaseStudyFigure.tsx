import { useEffect, useState } from "react";
import type { GalleryItem } from "../data/projects";

type LightboxState = { src: string; alt: string; caption?: string } | null;

export type TechnicalCaseStudyFigureVariant = "default" | "diagram" | "research";

type TechnicalCaseStudyFigureProps = {
  /** Unique id fragment for accessibility */
  instanceId: string;
  item: GalleryItem;
  caption: string;
  /** Shown below the caption; omit for figures that speak for themselves */
  keyInsight?: string;
  /** `diagram`: narrow schematics; `research`: wide transit / analytics figures */
  variant?: TechnicalCaseStudyFigureVariant;
};

/**
 * Large case-study figure with lightbox. Swap higher-resolution PNGs/JPEGs in
 * `public/images/projects/` under the same filenames to upgrade clarity without code changes.
 */
export function TechnicalCaseStudyFigure({
  instanceId,
  item,
  caption,
  keyInsight,
  variant = "default",
}: TechnicalCaseStudyFigureProps) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const src = item.src;
  const showInsight = typeof keyInsight === "string" && keyInsight.trim().length > 0;

  const figureWidthClass =
    variant === "diagram"
      ? "mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      : variant === "research"
        ? "mx-auto w-full max-w-[min(1024px,90vw)] sm:w-[82%] md:w-[78%] lg:w-[74%]"
        : "mx-auto w-full sm:w-[90%] md:w-[88%] lg:w-[85%]";

  const frameClass =
    variant === "research"
      ? "block w-full cursor-zoom-in rounded-2xl border border-slate-200/70 bg-gradient-to-b from-slate-50/95 to-white p-2.5 text-left shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/50 transition hover:border-sky-200/80 hover:ring-sky-200/40 focus-visible:outline focus-visible:ring-2 focus-visible:ring-sky-500 sm:p-3"
      : "block w-full cursor-zoom-in rounded-xl border border-slate-200/80 bg-slate-50/90 p-2 text-left shadow-sm ring-1 ring-slate-200/60 transition hover:border-violet-200/80 hover:ring-violet-200/50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-violet-500 sm:p-3";

  const imgClassOuter =
    variant === "research"
      ? "mx-auto block rounded-xl shadow-[0_22px_56px_-20px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/[0.06]"
      : "mx-auto block rounded-lg shadow-[0_16px_48px_-16px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.04]";

  const captionClass =
    variant === "research"
      ? "mt-5 px-1 text-center text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
      : "mt-4 px-1 text-center text-sm leading-relaxed text-slate-600";

  const insightWrapClass =
    variant === "research"
      ? "mt-6 mx-auto max-w-3xl rounded-2xl border border-sky-200/40 bg-gradient-to-br from-sky-50/90 to-slate-50/80 px-5 py-4 shadow-sm ring-1 ring-sky-100/60"
      : "mt-6 mx-auto max-w-3xl rounded-xl border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-sm ring-1 ring-slate-100/80";

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

  if (!src) return null;

  return (
    <>
      <div className="mt-8 flex w-full justify-center">
        <figure className={figureWidthClass}>
          <button
            type="button"
            className={frameClass}
            onClick={() =>
              setLightbox({
                src,
                alt: item.alt,
                caption,
              })
            }
            aria-label={`Open larger view: ${item.alt}`}
          >
            <img
              src={src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className={[
                imgClassOuter,
                variant === "diagram"
                  ? "h-auto max-h-[min(78vh,880px)] w-full max-w-full object-contain"
                  : "h-auto w-full max-w-full object-contain",
              ].join(" ")}
            />
          </button>
          <figcaption
            id={`${instanceId}-caption`}
            className={captionClass}
          >
            {caption}
          </figcaption>
        </figure>
      </div>

      {showInsight ? (
        <div
          className={insightWrapClass}
          role="note"
          aria-labelledby={`${instanceId}-insight-label`}
        >
          <p
            id={`${instanceId}-insight-label`}
            className={
              variant === "research"
                ? "text-xs font-semibold uppercase tracking-wide text-sky-900/80"
                : "text-xs font-semibold uppercase tracking-wide text-slate-600"
            }
          >
            Key insight
          </p>
          <p
            className={
              variant === "research"
                ? "mt-2 text-base leading-relaxed text-slate-800 sm:text-[1.05rem]"
                : "mt-2 text-base leading-relaxed text-slate-800"
            }
          >
            {keyInsight}
          </p>
        </div>
      ) : null}

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
            aria-label="Figure preview"
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
