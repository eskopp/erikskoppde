/** Turns the MDX source of a post into plain Markdown that reads well outside the site. */
export function cleanPostBody(source: string): string {
  return source
    .replace(/^import\s.+$/gm, '')
    .replace(/<(VideoEmbed|PgnViewer|SmartImage)\b[\s\S]*?\/>/g, '')
    .replace(/<Callout\b[^>]*>([\s\S]*?)<\/Callout>/g, (_, inner: string) =>
      inner
        .trim()
        .split('\n')
        .map((line) => `> ${line}`.trimEnd())
        .join('\n'),
    )
    .replace(
      /<figcaption[^>]*>([\s\S]*?)<\/figcaption>/g,
      (_, inner: string) => `*${inner.trim()}*`,
    )
    .replace(/<\/?(figure|div)\b[^>]*>/g, '')
    .replace(/!\[([^\]]*)\]\((?!https?:)[^)]*\)/g, (_, alt: string) =>
      alt ? `*[Bild: ${alt}]*` : '',
    )
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function postToMarkdown(post: {
  body?: string;
  data: { title: string; description: string; pubDate: Date };
}): string {
  const date = post.data.pubDate.toISOString().slice(0, 10);
  return `# ${post.data.title}\n\n${post.data.description}\n\n*Veröffentlicht am ${date}*\n\n${cleanPostBody(post.body ?? '')}\n`;
}
