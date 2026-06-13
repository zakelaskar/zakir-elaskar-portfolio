# Zakir Sajid Elaskar — Portfolio

Premium light-mode personal portfolio built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **react-markdown** (GFM). React 18 matches `react-helmet-async` peer dependencies and avoids `npm install` ERESOLVE errors.

## Quick start

```bash
cd zakir-portfolio
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy online

See **[DEPLOY.md](./DEPLOY.md)** for Vercel, Netlify, and Cloudflare Pages (SPA routing, `VITE_SITE_URL`, custom domain).

## Customize

- **Skills (categorized):** `src/data/skills.ts` — `SkillsCloud` on Home, `SkillsSection` on About (`#skills`).
- **Profile, links, education, featured achievements:** `src/data/site.ts`
- **Projects:** `src/data/projects.ts` (Markdown in `contentSections` / `content`)
- **Experience:** `src/data/experience.ts` (optional `heroImage` paths under `public/images/experience/`)
- **Publications (Research page):** `src/data/publications.ts`
- **Markdown:** `react-markdown` + `remark-gfm` (see `src/components/Markdown.tsx`)
- **Resume:** add `public/Zakir_Elaskar_Data_Scientist_Resume.pdf` (or set `profile.resumePath` / `profile.resumeDownloadFileName` in `src/data/site.ts`). The **Resume** nav link opens `/resume` for an in-browser preview and download.
- **Canonical / OG base URL:** set `VITE_SITE_URL` in `.env` (see `.env.example`).
- **Design reference:** `public/hero-design-reference.png` (your uploaded hero mockup).

## SEO

Each route sets unique `<title>` and description via `react-helmet-async`. Project and experience detail routes derive copy from their data entries.
