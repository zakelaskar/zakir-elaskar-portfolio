import { useEffect, useState } from "react";
import { ProjectCover } from "./ProjectCover";

export type GalleryItemInput = {
  alt: string;
  src?: string;
  caption?: string;
};

type GalleryGridProps = {
  slugPrefix: string;
  items: readonly GalleryItemInput[];
  /** When true (default), clicking an image with `src` opens a full-screen lightbox */
  enableLightbox?: boolean;
};

type LightboxState = { src: string; alt: string; caption?: string } | null;

export function GalleryGrid({
  slugPrefix,
  items,
  enableLightbox = true,
}: GalleryGridProps) {
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

  if (items.length === 0) return null;

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g, i) => (
          <figure
            key={`${g.alt}-${i}`}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm"
          >
            {g.src ? (
              enableLightbox ? (
                <button
                  type="button"
                  className="group relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                  onClick={() => setLightbox({ src: g.src!, alt: g.alt, caption: g.caption })}
                  aria-label={`Enlarge: ${g.alt}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition group-hover:opacity-95"
                  />
                </button>
              ) : (
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              )
            ) : (
              <ProjectCover slug={`${slugPrefix}-g-${i}`} className="aspect-[4/3] w-full rounded-none" />
            )}
            <figcaption className="border-t border-slate-100 bg-white px-3 py-2 text-xs leading-snug text-slate-600">
              {g.caption ?? g.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-[min(1200px,96vw)] overflow-auto rounded-2xl bg-slate-900/40 p-3 shadow-2xl ring-1 ring-white/10"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            {lightbox.caption ? (
              <p className="mt-3 max-w-3xl text-center text-sm text-slate-200">{lightbox.caption}</p>
            ) : null}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100"
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
