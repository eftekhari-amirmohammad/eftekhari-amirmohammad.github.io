# Portfolio — Setup & Maintenance Guide

Everything you need to run, update, and publish the site. No coding required for
day-to-day updates.

---

## 1. Run the site locally

Requirements: Node 20 or 22 (Node 18 is too old for Astro 5).

```bash
npm install      # or copy an existing node_modules folder to skip this
npm run dev      # open the URL it prints, e.g. http://localhost:4321/
npm run build    # production build into dist/
npm run preview  # preview the production build
```

---

## 2. Your projects (automatic from GitHub)

Projects are pulled live from your GitHub account (`eftekhari-amirmohammad`)
every time the site is built. You never add projects by hand.

- Public, non-fork, non-archived repos appear automatically, newest first.
- Your profile-readme repo (the one named like your username) and any `.github`
  repo are hidden automatically.
- **Card title & description** come from each repo's **Description** field on
  GitHub. If a repo has no description, the site reads the repo's `README.md`
  (first `# Heading` = title, first paragraph = description).
- **Tags** come from the repo **Topics**.
- **"View code"** links to that exact repository.
- **"Live demo"** appears only if the repo has a Homepage set.

> Best-looking cards: on GitHub open each repo -> the gear next to "About" ->
> set a short **Description** and a few **Topics**. That instantly improves the
> card on your site after the next build/deploy.

---

## 3. Learning Journey (optional GitHub repo)

Right now the Journey uses the built-in list in `src/data/timeline.ts`.
When you want to drive it from a GitHub repo instead:

1. Create a repo (e.g. `learning-journey`) with a `journey.json` at its root.
2. In `src/lib/journey.ts`, set `JOURNEY_REPO = "learning-journey"`.

`journey.json` format:

```json
[
  {
    "icon": "rocket",
    "title": { "en": "HomeLab", "de": "HomeLab" },
    "description": { "en": "Building my own lab.", "de": "Aufbau meines Labors." },
    "status": "current"
  }
]
```

`status` can be `"done"`, `"current"`, or omitted. `"current"` shows the small
green "Currently learning" badge.

---

## 4. Your photo

A transparent-background PNG works best. The needed sizes are already generated.
To replace it later, drop your image and regenerate these files in
`public/images/profile/`:

- `amir-400.avif`, `amir-600.avif`, `amir-900.avif`
- `amir-400.webp`, `amir-600.webp`, `amir-900.webp`

(Easiest: just send me a new photo and I'll regenerate all six for you.)

---

## 5. Certificates

1. Put the image in `public/images/certificates/` — landscape, ~4:3,
   ~1200x900px, WebP/PNG/JPG, under ~300 KB, kebab-case filename.
2. Add an entry in `src/data/certificates.ts` (see the commented example).

---

## 6. Impressum (legal page)

Germany expects an Impressum. Edit `src/components/sections/Impressum.astro`
and fill in your real name, postal address, and email.

---

## 7. Publish for free — GitHub Pages (no Vercel, works from Iran)

You do NOT need Vercel. The included workflow deploys to GitHub Pages for free.

1. Create a repo named **`eftekhari-amirmohammad.github.io`** and push this
   project to it (branch `main`).
2. On GitHub: repo -> **Settings -> Pages -> Build and deployment -> Source:
   GitHub Actions**.
3. Done. Your site goes live at `https://eftekhari-amirmohammad.github.io`.

The workflow (`.github/workflows/deploy.yml`) also runs **once per day**, so new
GitHub repos show up on the site automatically.

When you buy a domain (e.g. `amireftekhari.dev`): repo -> Settings -> Pages ->
Custom domain, then update `site` in `astro.config.mjs` to the new URL.

---

## 8. Handy commands

```bash
npm run dev       # local dev
npm run build     # build to dist/
npm run preview   # preview production build
```
