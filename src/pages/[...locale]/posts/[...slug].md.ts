import type { APIRoute } from 'astro';
import { SITE } from '~/config';
import { getPosts, getUnlistedPosts, postSlug, type Post } from '~/utils/posts';
import { postToMarkdown } from '~/utils/post-markdown';

export async function getStaticPaths() {
  const paths = [];
  for (const locale of SITE.locales) {
    const localeParams = { locale: locale === SITE.defaultLocale ? undefined : locale };
    const posts = [...(await getPosts(locale)), ...(await getUnlistedPosts(locale))];
    paths.push(
      ...posts.map((post) => ({
        params: { ...localeParams, slug: postSlug(post) },
        props: { post },
      })),
    );
  }
  return paths;
}

export const GET: APIRoute = ({ props }) => {
  const { post } = props as { post: Post };
  return new Response(postToMarkdown(post), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
