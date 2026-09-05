# erikskoppde

Personal blog for **erikskopp.de**, built with [Astro](https://astro.build) on
top of [AstroBlogTheme](https://github.com/eskopp/AstroBlogTheme) (pulled in from
GitHub as a package).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

## Writing

Add posts under `src/content/blog/<slug>/` with a `de.md` and/or `en.md` file.
Frontmatter:

```yaml
---
title: "Post title"
description: "One line for previews and meta tags"
pubDate: 2026-08-30
# updatedDate: 2026-09-01
# tags: ["notes"]
# draft: true
---
```

The `/blog`, `/blog/<slug>`, feeds and error routes come from the theme.
`/`, `/about`, `/impressum` and `/datenschutz` live in `src/pages/`.

## Configuration

Theme options (title, nav, social, …) and the canonical domain (`site:`) are set
in `astro.config.mjs`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy-pages.yml`, which builds
the site and publishes it to **GitHub Pages**. The custom domain `erikskopp.de`
is pinned via `public/CNAME`.

## Mirrored to GitLab

Every push to `main`, every tag and every release is mirrored to
`gitlab.erik-skopp.de/Web/erikskoppde` by `.github/workflows/mirror-to-gitlab.yml`.
