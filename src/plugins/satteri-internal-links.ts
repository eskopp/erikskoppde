/**
 * satteri-internal-links — Resolves `[text](post:slug)` and
 * `[text](page:slug)` links to the actual (locale-aware, base-path-aware)
 * URL of that post/page, instead of hand-writing `/posts/my-post/`.
 *
 * Benefit over a hardcoded path: if the site's routing changes (locale
 * prefixes, a new BASE_PATH, or the post/page itself moving), every
 * internal reference updates automatically at the next build instead of
 * needing a repo-wide find/replace.
 *
 * Resolves to the SAME locale as the document the link lives in (falls
 * back to the default locale if that translation doesn't exist). Emits a
 * root-relative path — `satteri-base-links`, which must run after this in
 * the plugin chain, adds the BASE_PATH prefix.
 *
 * An unknown slug fails the build, same as `satteri-named-links`.
 */

import { fileURLToPath } from 'node:url';
import { defineHastPlugin } from 'satteri';

export interface InternalLinksOptions {
  /** slug -> set of locales it exists in, e.g. from scanning src/content/posts/<locale>/*.md */
  posts: Map<string, Set<string>>;
  pages: Map<string, Set<string>>;
  locales: readonly string[];
  defaultLocale: string;
}

const PREFIX_PATTERN = /^(post|page):(.+)$/;

function localeFromFileURL(
  fileURL: URL | undefined,
  locales: readonly string[],
  defaultLocale: string,
): string {
  if (!fileURL) return defaultLocale;
  const path = fileURLToPath(fileURL).replace(/\\/g, '/');
  const match = path.match(/\/src\/content\/(?:posts|pages)\/([^/]+)\//);
  const seg = match?.[1];
  return seg && locales.includes(seg) ? seg : defaultLocale;
}

export function satteriInternalLinks(options: InternalLinksOptions) {
  const { posts, pages, locales, defaultLocale } = options;

  return defineHastPlugin({
    name: 'satteri-internal-links',
    element: [
      {
        filter: ['a'],
        visit(node, ctx) {
          const href = node.properties?.href;
          if (typeof href !== 'string') return;

          const match = href.match(PREFIX_PATTERN);
          if (!match) return;
          const [, kind, slug] = match;

          const index = kind === 'post' ? posts : pages;
          const availableLocales = index.get(slug);
          if (!availableLocales) {
            throw new Error(
              `satteri-internal-links: unknown ${kind} slug "${slug}" (linked as "${href}"). ` +
                `Check src/content/${kind}s/<locale>/${slug}.md exists.`,
            );
          }

          const docLocale = localeFromFileURL(ctx.fileURL, locales, defaultLocale);
          const locale = availableLocales.has(docLocale)
            ? docLocale
            : availableLocales.has(defaultLocale)
              ? defaultLocale
              : [...availableLocales][0]!;

          const base = kind === 'post' ? `/posts/${slug}/` : `/${slug}/`;
          const resolved = locale === defaultLocale ? base : `/${locale}${base}`;

          ctx.replaceNode(node, {
            ...node,
            properties: { ...node.properties, href: resolved },
          });
        },
      },
    ],
  });
}
