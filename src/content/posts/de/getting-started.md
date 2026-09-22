---
title: 'Erste Schritte'
description: 'Dein erster Beitrag mit Chirping Astro. Erfahre, wie du deine Seite konfigurierst, Beiträge schreibst und deployest.'
pubDate: 2026-05-03
tags: [getting-started, tutorial]
categories: [Guide]
translationKey: getting-started
pinned: true
toc: true
---

Willkommen auf deinem neuen Blog! Dieser Beispielbeitrag zeigt dir die Grundlagen von **Chirping Astro**.

## Seite konfigurieren

Öffne `src/config.ts` und passe an:

- **title** — Name deiner Seite/deines Blogs
- **description** — wird in Suchmaschinen und im RSS-Feed angezeigt
- **author.name** — erscheint in Sidebar und Footer
- **url** — deine Produktions-URL (per `SITE_URL`-Umgebungsvariable beim Deploy setzen)

## Umgebungsvariablen

Kopiere `.env.example` nach `.env`:

```bash
cp .env.example .env
```

Wichtige Variablen:

| Variable               | Zweck                                                        |
| ---------------------- | ------------------------------------------------------------- |
| `SITE_URL`             | Deine Produktions-URL (z. B. `https://meinblog.de`)            |
| `BASE_PATH`            | Für GitHub Pages auf `/<repo-name>` setzen, sonst leer lassen |
| `PUBLIC_GITHUB_HANDLE` | Zeigt das GitHub-Icon in der Sidebar                          |
| `PUBLIC_GISCUS_*`      | Aktiviert Giscus-Kommentare ([Setup-Anleitung](https://giscus.app)) |

## Beiträge schreiben

Lege Markdown-Dateien in `src/content/posts/de/` an:

```markdown
---
title: 'Titel meines Beitrags'
description: 'Eine kurze Beschreibung für SEO und Listenansichten.'
pubDate: 2026-05-03
tags: [tag1, tag2]
categories: [Kategorie]
---

Schreibe deinen Inhalt hier mit gewöhnlichem Markdown.
```

### Verfügbare Frontmatter-Felder

| Feld          | Erforderlich | Beschreibung                        |
| ------------- | ------------ | ------------------------------------ |
| `title`       | Ja           | Titel des Beitrags (1–140 Zeichen)   |
| `description` | Ja           | Meta-Beschreibung (1–280 Zeichen)    |
| `pubDate`     | Ja           | Veröffentlichungsdatum (ISO-Format)  |
| `tags`        | Nein         | Array von Tags                       |
| `categories`  | Nein         | Array von Kategorien                 |
| `heroImage`   | Nein         | Pfad zum Titelbild                   |
| `pinned`      | Nein         | An den Anfang der Liste anheften     |
| `toc`         | Nein         | Inhaltsverzeichnis anzeigen          |
| `draft`       | Nein         | In Produktion ausblenden             |

## MDX verwenden

Für umfangreichere Inhalte kannst du `.mdx`-Dateien nutzen, um Komponenten einzubinden:

```mdx
---
title: 'MDX-Beispiel'
description: 'Komponenten in Beiträgen verwenden.'
pubDate: 2026-05-03
tags: [mdx]
categories: [Guide]
---

import Callout from '../../components/Callout.astro';

<Callout type="tip">Du kannst Astro-Komponenten direkt in deinen Beiträgen einbetten!</Callout>
```

## Deploy

Push auf `main` bei GitHub. Der mitgelieferte Workflow baut die Seite und deployt sie automatisch auf GitHub Pages.

Für eigene Domains setze `SITE_URL` in den Umgebungsvariablen deines Repositories unter **Settings → Environments → github-pages**.

## Mehr erfahren

- [Vollständige Dokumentation](https://github.com/kannansuresh/chirping-astro)
- [Live-Demo](https://kannansuresh.github.io/chirping-astro)
- [Astro-Dokumentation](https://docs.astro.build)

---

Viel Spaß beim Bloggen! Lösche diesen Beitrag, sobald du bereit bist, eigene Inhalte zu veröffentlichen.
