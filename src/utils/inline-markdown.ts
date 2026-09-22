/**
 * Minimal, dependency-free renderer for the small inline-markdown subset
 * used in short frontmatter strings (e.g. gallery `description`), which
 * are plain strings in the content schema and never go through Astro's
 * full markdown pipeline (`render()` only processes the file body).
 *
 * Supports just links, bold and italic — enough for a one-line caption,
 * not a general-purpose markdown parser.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Render `[text](url)`, `**bold**` and `*italic*` to safe HTML. */
export function renderInlineMarkdown(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_match, label: string, url: string) => `<a href="${url}">${label}</a>`,
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return html;
}

/** Strip the same syntax down to plain text, for use in <meta> tags etc. */
export function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}
