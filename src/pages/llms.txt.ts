/* global URL, Response */
import type { APIRoute } from 'astro';
import { SITE } from '~/config';
import { getPosts, postPath } from '~/utils/posts';

export const GET: APIRoute = async (context) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const site = `${(context.site ?? new URL(SITE.url)).origin}${base}`;
  const posts = await getPosts(SITE.defaultLocale);

  const lines = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Posts',
    '',
    ...posts.map(
      (post) => `- [${post.data.title}](${site}${postPath(post)}): ${post.data.description}`,
    ),
    '',
    '## Pages',
    '',
    `- [About](${site}/about/)`,
    `- [GPG](${site}/gpg/)`,
    '',
    `Full content of every post: ${site}/llms-full.txt`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
