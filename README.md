# Zululand Dental Practice — Website

An independent React + Vite rebuild of the Zululand Dental Practice site. No
Base44 dependency of any kind — this is a plain static site you can host
anywhere.

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 2. Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## 3. Domain configuration

The production domain is set in **one place**: the `VITE_SITE_URL` variable in
`.env` (currently a placeholder: `https://www.zululanddental.co.za`). Vite
injects it into `index.html`'s canonical link, Open Graph/Twitter tags, and
the JSON-LD structured data automatically at build time — change the one line
in `.env` and rebuild.

Two static files are *not* templated by Vite and need a manual one-line
search-replace when the domain changes: `public/sitemap.xml` and
`public/robots.txt`.

## 4. Deploy

`dist/` is a plain static site — no server, database, or environment
variables needed at runtime (`.env` is only read at build time).

**Netlify**: both a `public/_redirects` file and a root `netlify.toml` are
included, so client-side routes (`/about`, `/services`, etc.) work correctly
on direct load and on refresh, whether you deploy via drag-and-drop or a
connected git repo.

**Vercel**: a root `vercel.json` is included with the equivalent SPA rewrite
rule. Connect the GitHub repo in Vercel and it builds automatically — no
extra config needed.

**Other static hosts** (Vercel, Cloudflare Pages, GitHub Pages, cPanel): all
work too, but each needs its own equivalent SPA-fallback rule (rewrite all
paths to `/index.html`) since this is a client-side-routed single-page app.
Ask if you'd like that config for a specific host.

## 5. Editing content

Almost everything text-based lives in one file: **`src/data/site.js`** —
business details, services, reviews, WhatsApp number, and the assistant's
knowledge base. Change it there rather than hunting through components.

## 6. Logo

`src/components/Navbar.jsx` and `Footer.jsx` currently render
`src/assets/logo/logo-placeholder.svg` — a deliberately obvious placeholder
(dashed border, grey "LOGO PLACEHOLDER" text), not a designed replacement
logo. I wasn't able to extract the real logo file from the live site (it's a
JavaScript-rendered app with no accessible asset files from this
environment). See `src/assets/logo/README.md` for the exact two-line swap
once you have the real logo file.

## 7. Photography

No photos are included anywhere in this build — `public/photos/` is an empty,
documented folder rather than stock imagery. I looked at pulling generic
stock photos in, but images from a web search belong to photographers/stock
agencies; embedding them in a commercial client site without a license is a
real copyright risk, not just a style choice. Combined with the brief's
requirement not to fabricate photos of the actual practice, the responsible
options were: keep the current illustrated/CSS visual system, or set up
clearly-labelled slots for real or properly-licensed photography to be added
later. I did the latter — see `public/photos/README.md` for exact filenames,
suggested dimensions, and the two-line change needed once a photo exists for
a given slot (hero, About portrait, six Gallery panels).

**`public/og-cover.jpg`** is the exception: it's a small graphic I generated
directly (practice name, tagline, brand colours, tooth mark) rather than a
photo — used for the social-share preview. It fixes what was a broken image
reference in the previous build.

## 8. AI dental assistant

The chat widget (bottom-left button) is a small **rule-based FAQ assistant** —
no external API, no API key, works fully offline once the site is loaded. It
matches a visitor's question against a keyword list in `src/data/site.js`
(`assistantTopics`) and answers only from what's actually published on the
site — it never guesses at prices, hours, diagnoses or treatment. Anything it
doesn't recognise gets redirected to WhatsApp/phone.

This is intentional, not a placeholder for a "real" AI: this project has to
run as a plain static site with no backend and no secrets, so a live LLM call
isn't a good fit without a server component to hold an API key safely.

## 9. Appointment form

No booking backend exists to connect to, so the form builds a WhatsApp
message from the visitor's details and opens `wa.me` with it pre-filled.

## 10. SEO

- Meta title/description/keywords match the original site's confirmed values
- Open Graph + Twitter card tags, now pointing at a real (generated) image
- `Dentist` structured data (JSON-LD) in `index.html` — no opening hours,
  prices or credentials were added since none were confirmed
- `public/robots.txt` and `public/sitemap.xml` included
- Semantic heading hierarchy (one `<h1>` per page)

## 11. Confirmation

- Zero Base44 packages, API calls, or runtime dependencies anywhere in this
  project — checked via a full project-wide search (see audit notes)
- Builds cleanly with `npm run build`
- Fully static output — deployable to any standard host, with Netlify's
  SPA-routing config included
