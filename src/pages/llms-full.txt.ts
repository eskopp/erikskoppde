/* global URL, Response */
import type { APIRoute } from 'astro';
import { SITE } from '~/config';
import { getPosts, postPath } from '~/utils/posts';

export const GET: APIRoute = async (context) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const site = `${(context.site ?? new URL(SITE.url)).origin}${base}`;
  const posts = await getPosts(SITE.defaultLocale);

  const sections = posts.map((post) => {
    const url = `${site}${postPath(post)}`;
    return [`# ${post.data.title}`, '', `URL: ${url}`, '', post.body ?? ''].join('\n');
  });

  const body = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    sections.join('\n\n---\n\n'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
