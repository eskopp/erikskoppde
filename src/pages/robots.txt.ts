/* global URL */
import type { APIRoute } from 'astro';
import { SITE } from '~/config';

/**
 * Generated instead of a static `public/robots.txt` so the `Sitemap`
 * directive is always an absolute URL matching the actual deployed
 * `SITE.url`/base path — a relative Sitemap URL fails Lighthouse's SEO
 * "robots.txt is not valid" check.
 */
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const siteWithBase = `${(site ?? new URL(SITE.url)).origin}${base}`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteWithBase}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
