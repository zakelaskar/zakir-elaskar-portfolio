import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you are looking for does not exist on this portfolio site."
      />
      <div className="mx-auto max-w-lg rounded-[2rem] bg-white/90 p-10 text-center shadow-card ring-1 ring-slate-100">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">This page is missing</h1>
        <p className="mt-3 text-slate-600">
          The link may be outdated, or the project slug might not match the dataset in{" "}
          <code className="rounded bg-slate-100 px-1 font-mono text-xs">src/data</code>.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-cta-primary px-6 py-3 text-sm font-semibold text-white"
        >
          Back home
        </Link>
      </div>
    </>
  );
}
