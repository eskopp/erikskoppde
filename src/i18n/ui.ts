/**
 * UI dictionaries.
 * Add new locales by adding a key to `messages` and to `SITE.locales` in
 * src/config.ts. All keys must exist for every locale (TypeScript enforces it).
 */

import type { Locale } from '../config';

export const messages = {
  de: {
    'site.skipToContent': 'Zum Inhalt springen',
    'nav.home': 'Start',
    'nav.posts': 'Beiträge',
    'nav.tags': 'Tags',
    'nav.categories': 'Kategorien',
    'nav.archives': 'Archiv',
    'nav.gallery': 'Galerie',
    'nav.about': 'Über',
    'nav.search': 'Suche',
    'nav.toggleMenu': 'Menü umschalten',

    'theme.toggle': 'Theme umschalten',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.system': 'System',

    'lang.switcher': 'Sprache',
    'lang.en': 'Englisch',

    'panel.recentlyUpdated': 'Zuletzt aktualisiert',
    'panel.trendingTags': 'Beliebte Tags',

    'post.publishedOn': 'Veröffentlicht am',
    'post.updatedOn': 'Aktualisiert am',
    'post.readingTime': 'Min. Lesezeit',
    'post.toc': 'Inhaltsverzeichnis',
    'post.tags': 'Tags',
    'post.categories': 'Kategorien',
    'post.previous': 'Zurück',
    'post.next': 'Weiter',
    'post.comments': 'Kommentare',
    'post.commentsDisabled': 'Kommentare sind für diesen Beitrag deaktiviert.',
    'post.commentsSetupTitle': 'Kommentare müssen konfiguriert werden',
    'post.commentsSetupBody':
      'Giscus ist aktiviert, aber noch nicht konfiguriert. Trage unten die Repository-Details ein, um Kommentare zu sammeln.',
    'post.commentsSetupStep1':
      'Besuche `giscus.app` und wähle dein öffentliches GitHub-Repository aus (Discussions müssen aktiviert sein).',
    'post.commentsSetupStep2':
      'Kopiere die generierten Werte für `data-repo-id`, `data-category` und `data-category-id`.',
    'post.commentsSetupStep3':
      'Setze die Umgebungsvariablen `PUBLIC_GISCUS_ENABLED`, `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY` und `PUBLIC_GISCUS_CATEGORY_ID` in deiner `.env`-Datei.',
    'post.commentsSetupStep4':
      'Baue die Seite neu — dieser Hinweis wird dann durch den echten Kommentarbereich ersetzt.',
    'post.commentsSetupDocs': 'giscus.app öffnen',
    'post.share': 'Teilen',
    'post.copyLink': 'Link kopieren',
    'post.copied': 'Kopiert!',
    'post.author': 'Autor',

    'list.allPosts': 'Alle Beiträge',
    'list.empty': 'Keine Beiträge gefunden.',
    'list.tagPosts': 'Beiträge mit Tag',
    'list.categoryPosts': 'Beiträge in',
    'list.totalPosts': 'Beiträge',
    'list.totalPostsOne': 'Beitrag',

    'pagination.previous': 'Vorherige Seite',
    'pagination.next': 'Nächste Seite',
    'pagination.page': 'Seite',
    'pagination.of': 'von',

    'archives.title': 'Archiv',
    'archives.empty': 'Noch keine Beiträge.',

    'tags.title': 'Tags',
    'tags.empty': 'Noch keine Tags.',

    'categories.title': 'Kategorien',
    'categories.empty': 'Noch keine Kategorien.',

    'gallery.title': 'Galerie',
    'gallery.empty': 'Noch keine Alben.',
    'gallery.back': 'Zurück zur Galerie',
    'gallery.imageCount': 'Bilder',
    'gallery.imageCountOne': 'Bild',
    'gallery.close': 'Schließen',
    'gallery.previous': 'Vorheriges Bild',
    'gallery.next': 'Nächstes Bild',

    'search.title': 'Suche',
    'search.placeholder': 'Seite durchsuchen',
    'search.openLabel': 'Suche öffnen',
    'search.closeLabel': 'Suche schließen',
    'search.empty': 'Keine Ergebnisse.',
    'search.loading': 'Suche wird geladen…',
    'search.typeToStart': 'Tippen zum Suchen…',
    'search.hintShortcut': '/ drücken, um die Suche zu öffnen',
    'search.searching': 'Suche läuft…',
    'search.noResultsFor': 'Keine Ergebnisse für',
    'search.resultsCount': 'Ergebnisse',
    'search.resultsCountOne': 'Ergebnis',
    'search.hintNavigate': 'zum Navigieren',
    'search.hintSelect': 'zum Öffnen',
    'search.clearLabel': 'Löschen',

    'code.copy': 'Kopieren',
    'code.copied': 'Kopiert',

    '404.title': 'Seite nicht gefunden',
    '404.description': 'Die gesuchte Seite ist nicht auffindbar.',
    '404.cta': 'Zurück zur Startseite',

    'footer.poweredBy': 'Erstellt mit',
    'footer.theme': 'Theme',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': 'Alle Rechte vorbehalten.',
  },
  en: {
    'site.skipToContent': 'Skip to content',
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.tags': 'Tags',
    'nav.categories': 'Categories',
    'nav.archives': 'Archives',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.search': 'Search',
    'nav.toggleMenu': 'Toggle menu',

    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    'lang.switcher': 'Language',
    'lang.en': 'English',

    'panel.recentlyUpdated': 'Recently Updated',
    'panel.trendingTags': 'Trending Tags',

    'post.publishedOn': 'Published on',
    'post.updatedOn': 'Updated on',
    'post.readingTime': 'min read',
    'post.toc': 'Table of Contents',
    'post.tags': 'Tags',
    'post.categories': 'Categories',
    'post.previous': 'Previous',
    'post.next': 'Next',
    'post.comments': 'Comments',
    'post.commentsDisabled': 'Comments are disabled for this post.',
    'post.commentsSetupTitle': 'Comments need to be configured',
    'post.commentsSetupBody':
      'Giscus is enabled but not yet configured. Fill in the repository details below to start collecting comments.',
    'post.commentsSetupStep1':
      'Visit `giscus.app` and select your public GitHub repository (Discussions must be enabled).',
    'post.commentsSetupStep2':
      'Copy the generated values for `data-repo-id`, `data-category`, and `data-category-id`.',
    'post.commentsSetupStep3':
      'Set the `PUBLIC_GISCUS_ENABLED`, `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY`, and `PUBLIC_GISCUS_CATEGORY_ID` environment variables in your `.env` file.',
    'post.commentsSetupStep4':
      'Rebuild the site — this notice will then be replaced by the real comment section.',
    'post.commentsSetupDocs': 'Open giscus.app',
    'post.share': 'Share',
    'post.copyLink': 'Copy link',
    'post.copied': 'Copied!',
    'post.author': 'Author',

    'list.allPosts': 'All Posts',
    'list.empty': 'No posts found.',
    'list.tagPosts': 'Posts tagged',
    'list.categoryPosts': 'Posts in',
    'list.totalPosts': 'posts',
    'list.totalPostsOne': 'post',

    'pagination.previous': 'Previous page',
    'pagination.next': 'Next page',
    'pagination.page': 'Page',
    'pagination.of': 'of',

    'archives.title': 'Archives',
    'archives.empty': 'No posts yet.',

    'tags.title': 'Tags',
    'tags.empty': 'No tags yet.',

    'categories.title': 'Categories',
    'categories.empty': 'No categories yet.',

    'gallery.title': 'Gallery',
    'gallery.empty': 'No albums yet.',
    'gallery.back': 'Back to gallery',
    'gallery.imageCount': 'images',
    'gallery.imageCountOne': 'image',
    'gallery.close': 'Close',
    'gallery.previous': 'Previous image',
    'gallery.next': 'Next image',

    'search.title': 'Search',
    'search.placeholder': 'Search the site',
    'search.openLabel': 'Open search',
    'search.closeLabel': 'Close search',
    'search.empty': 'No results.',
    'search.loading': 'Loading search…',
    'search.typeToStart': 'Type to start searching…',
    'search.hintShortcut': 'Press / to open search',
    'search.searching': 'Searching…',
    'search.noResultsFor': 'No results for',
    'search.resultsCount': 'results',
    'search.resultsCountOne': 'result',
    'search.hintNavigate': 'to navigate',
    'search.hintSelect': 'to open',
    'search.clearLabel': 'Clear',

    'code.copy': 'Copy',
    'code.copied': 'Copied',

    '404.title': 'Page not found',
    '404.description': "The page you're looking for can't be found.",
    '404.cta': 'Back to home',

    'footer.poweredBy': 'Powered by',
    'footer.theme': 'Theme',
    'footer.privacy': 'Privacy',
    'footer.copyright': 'All rights reserved.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof messages)['de'];
