/**
 * satteri-named-links — Resolves `[text](name)` links against a central
 * registry (`src/data/links.ts`) instead of requiring a full URL inline.
 *
 * Anything that already looks like a URL or path (`https://…`, `/…`,
 * `#…`, `mailto:…`, `tel:…`) is left untouched, so normal links keep
 * working as-is. A bare name that isn't in the registry fails the build —
 * better to catch a typo'd link name at build time than ship a dead link.
 */

import { defineHastPlugin } from 'satteri';

const LOOKS_LIKE_URL_OR_PATH = /^([a-z][a-z0-9+.-]*:|\/|#)/i;

export function satteriNamedLinks(links: Record<string, string>) {
  return defineHastPlugin({
    name: 'satteri-named-links',
    element: [
      {
        filter: ['a'],
        visit(node, ctx) {
          const href = node.properties?.href;
          if (typeof href !== 'string' || LOOKS_LIKE_URL_OR_PATH.test(href)) return;

          const resolved = links[href];
          if (!resolved) {
            throw new Error(
              `satteri-named-links: unknown link name "${href}". Add it to LINKS in ` +
                `src/data/links.ts, or use a full URL/path if it's a one-off.`,
            );
          }

          ctx.replaceNode(node, {
            ...node,
            properties: { ...node.properties, href: resolved },
          });
        },
      },
    ],
  });
}
