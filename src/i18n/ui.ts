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
    'nav.blog': 'Blog',
    'nav.labor': 'Labor',
    'nav.schach': 'Schach',
    'nav.posts': 'Beiträge',
    'nav.tags': 'Tags',
    'nav.categories': 'Kategorien',
    'nav.archives': 'Archiv',
    'nav.gallery': 'Galerie',
    'nav.about': 'Über',
    'nav.gpg': 'GPG',
    'nav.search': 'Suche',
    'nav.toggleMenu': 'Menü umschalten',

    'theme.toggle': 'Theme umschalten',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.system': 'System',

    'lang.switcher': 'Sprache',
    'lang.en': 'Englisch',
    'lang.fr': 'Französisch',

    'post.publishedOn': 'Veröffentlicht am',
    'post.updatedOn': 'Aktualisiert am',
    'post.readingTime': 'Min. Lesezeit',
    'post.toc': 'Inhaltsverzeichnis',
    'post.tags': 'Tags',
    'post.categories': 'Kategorien',
    'post.previous': 'Zurück',
    'post.next': 'Weiter',
    'post.share': 'Teilen',
    'post.copyLink': 'Link kopieren',
    'post.copied': 'Kopiert!',
    'post.author': 'Autor',
    'post.aiAssisted':
      'Dieser Beitrag ist mit Unterstützung von KI-Werkzeugen entstanden (z. B. Recherche, Formulierung oder Code).',

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

    'blog.title': 'Blog',
    'blog.description': 'Persönliche Beiträge.',
    'blog.empty': 'Noch keine Blog-Beiträge.',

    'labor.title': 'Labor',
    'labor.description': 'Experimente, Praktikumsberichte und andere wissenschaftliche Artikel.',
    'labor.empty': 'Noch keine Artikel im Labor.',

    'schach.title': 'Schach',
    'schach.description': 'Turniere, Partien und alles rund ums Schach.',
    'schach.empty': 'Noch keine Schach-Artikel.',

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

    'panel.recentlyUpdated': 'Zuletzt aktualisiert',
    'panel.trendingTags': 'Beliebte Tags',

    'comments.title': 'Kommentare',
    'comments.empty': 'Noch keine Kommentare. Sei der Erste!',
    'comments.name': 'Name',
    'comments.namePlaceholder': 'Dein Name',
    'comments.content': 'Kommentar',
    'comments.contentPlaceholder': 'Was möchtest du sagen?',
    'comments.submit': 'Kommentar absenden',
    'comments.submitting': 'Wird gesendet…',
    'comments.reply': 'Antworten',
    'comments.replyingTo': 'Antwort an',
    'comments.cancelReply': 'Abbrechen',
    'comments.error': 'Der Kommentar konnte nicht gespeichert werden. Bitte versuch es später erneut.',
    'comments.rateLimit': 'Zu viele Kommentare. Bitte warte kurz und versuch es dann erneut.',
    'comments.loading': 'Kommentare werden geladen…',
    'comments.noscript': 'Zum Lesen und Schreiben von Kommentaren wird JavaScript benötigt.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof messages)['de'];
