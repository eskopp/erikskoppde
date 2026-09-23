/**
 * Central registry for named links. In Markdown/MDX, write `[text](name)`
 * instead of the full URL — `satteri-named-links` resolves `name` against
 * this map at build time. Update a URL here once instead of hunting it down
 * across every post when a site moves or a project gets renamed.
 */
export const LINKS: Record<string, string> = {
  pgnViewer: 'https://github.com/lichess-org/pgn-viewer',
};
