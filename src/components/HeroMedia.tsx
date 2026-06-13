import { ProjectCover } from "./ProjectCover";

type HeroMediaProps = {
  slug: string;
  heroImage?: string;
  title: string;
  className?: string;
};

export function HeroMedia({ slug, heroImage, title, className = "" }: HeroMediaProps) {
  if (heroImage) {
    return (
      <div className={`relative min-h-0 overflow-hidden bg-slate-100 ${className}`}>
        <img
          src={heroImage}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
      </div>
    );
  }
  return <ProjectCover slug={slug} className={`min-h-0 ${className}`} />;
}
