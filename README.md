# erikskopp.de

Mein privater Blog, erreichbar unter [erikskopp.de](https://erikskopp.de/).

Gebaut mit [Astro](https://astro.build) auf Basis des [Chirping Astro](https://github.com/kannansuresh/chirping-astro) Themes, deployed automatisch per GitHub Actions auf GitHub Pages.

## Stack

- **Astro v7** + **Tailwind CSS v4** / **daisyUI v5**
- **Pagefind** für die Suche
- Einsprachig Deutsch

## Lokal entwickeln

```bash
bun install
bun dev
```

Seite läuft dann unter [http://localhost:4321](http://localhost:4321).

```bash
bun run build     # Produktions-Build nach ./dist/
bun preview        # Produktions-Build lokal ansehen
bun run lint        # ESLint
bun run format      # Prettier
```

## Deploy

Push nach `main` löst automatisch den Build + Deploy nach GitHub Pages aus (`.github/workflows/deploy.yml`). Ein zweiter Workflow spiegelt den Stand zusätzlich nach GitLab (`.github/workflows/mirror-to-gitlab.yml`).

## Lizenz

GPL-3.0-or-later — siehe [LICENSE](./LICENSE). Basiert auf [chirping-astro-starter](https://github.com/kannansuresh/chirping-astro-starter) (MIT) — siehe [NOTICE.md](./NOTICE.md).
