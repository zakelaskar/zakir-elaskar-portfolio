# Publish the portfolio online

This app is a **Vite + React SPA** with client-side routes (`/about`, `/projects/...`, etc.). Build output is **`dist/`**. Set **`VITE_SITE_URL`** to your real site URL for SEO/Open Graph (see `.env.example`).

---

## Option A: Vercel (recommended)

1. Push this project to **GitHub** (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo.
3. Framework: **Vite** (auto). Root: repo root. Build: `npm run build`, Output: `dist`.
4. Add environment variable **`VITE_SITE_URL`** = `https://your-domain.com` (your production URL).
5. Deploy. Connect a **custom domain** in Project → Settings → Domains.

`vercel.json` in this repo configures SPA rewrites so deep links work.

---

## Option B: Netlify

1. Push the repo to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`, Publish directory: **`dist`**.
4. **Site settings** → **Environment variables**: add `VITE_SITE_URL` = your live URL, then trigger a redeploy.

`public/_redirects` sends unknown paths to `index.html` while real files (e.g. `/assets/...`) are still served.

---

## Option C: Cloudflare Pages

1. Push the repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git.
3. Build: `npm run build`, Output: **`dist`**.
4. **Settings** → **Environment variables** → `VITE_SITE_URL` for **Production**.

If client routes 404, add a **SPA fallback** rule in Pages (single-page application) to serve `/index.html` for non-file routes, or rely on `_redirects` if your Pages setup copies `public/` into the deploy root.

---

## Before first deploy

- Run **`npm run build`** locally; fix any errors.
- Ensure **`public/Zakir_Elaskar_Data_Scientist_Resume.pdf`** (or your resume path) exists if you use `/resume`.
- After go-live, visit **`/about`**, **`/projects`**, **`/experience/...`** directly to confirm they load (SPA routing).

---

## Custom domain + HTTPS

Point your domain’s **A/AAAA or CNAME** records to your host (Vercel/Netlify/Cloudflare will show exact targets). HTTPS is usually automatic.

If you tell me which host you’re using (Vercel vs Netlify vs other), I can align config (e.g. `base` in Vite only if you deploy under a subpath like `username.github.io/repo/`).
