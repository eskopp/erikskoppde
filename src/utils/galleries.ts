/**
 * Gallery (album) helpers. Mirrors `posts.ts`: filters drafts in
 * production, infers locale from the filesystem path, sorts pinned
 * albums first, and resolves cover/image sources for `<SmartImage>`.
 */

import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

import { SITE, type Locale } from '../config';
import { withBase } from '../i18n/utils';
import { slugify } from './slugify';

export type Album = CollectionEntry<'galleries'>;
export type AlbumImage = Album['data']['images'][number];

const isProd = import.meta.env.PROD;
const skipGalleryCollections = import.meta.env.CI_SKIP_CONTENT_COLLECTIONS === 'true';

function localeFromId(id: string): Locale {
  const seg = id.split(/[\\/]/)[0];
  if (seg && (SITE.locales as readonly string[]).includes(seg)) return seg as Locale;
  return SITE.defaultLocale;
}

function stripLocaleFromId(id: string): string {
  const segs = id.split(/[\\/]/);
  if (segs[0] && (SITE.locales as readonly string[]).includes(segs[0])) {
    return segs.slice(1).join('/');
  }
  return id;
}

/** Public slug used for the URL: filename minus locale and extension. */
export function albumSlug(entry: Album): string {
  return stripLocaleFromId(entry.id).replace(/\.(md|mdx)$/i, '');
}

/** Full localized URL path for an album. */
export function albumPath(entry: Album, locale: Locale): string {
  const slug = albumSlug(entry);
  const path = locale === SITE.defaultLocale ? `/gallery/${slug}/` : `/${locale}/gallery/${slug}/`;
  return withBase(path);
}

/** URL for the gallery index page. */
export function galleryIndexPath(locale: Locale): string {
  const path = locale === SITE.defaultLocale ? '/gallery/' : `/${locale}/gallery/`;
  return withBase(path);
}

/** Sort albums: pinned first, then by date desc. */
export function sortAlbums(albums: Album[]): Album[] {
  return [...albums].sort((a, b) => {
    if (a.data.pinned !== b.data.pinned) return a.data.pinned ? -1 : 1;
    const at = a.data.date?.valueOf?.() ?? 0;
    const bt = b.data.date?.valueOf?.() ?? 0;
    return bt - at;
  });
}

/** Get all albums for a locale (drafts hidden in prod, sorted). */
export async function getAlbums(locale: Locale): Promise<Album[]> {
  if (skipGalleryCollections) return [];
  const all = await getCollection('galleries', (entry) => {
    if (isProd && entry.data.draft) return false;
    return localeFromId(entry.id) === locale;
  });
  return sortAlbums(all);
}

/** Find a single album by locale + slug (path-relative). */
export async function getAlbumBySlug(locale: Locale, slug: string): Promise<Album | undefined> {
  const albums = await getAlbums(locale);
  return albums.find((a) => albumSlug(a) === slug);
}

/** Resolve a `cover`/image `src` field into a shape `<SmartImage>` accepts. */
export function resolveImageSrc(src: ImageMetadata | string): ImageMetadata | string {
  if (typeof src === 'string') {
    return src.startsWith('/') && !src.startsWith('//') ? withBase(src) : src;
  }
  return src;
}

/** The album's cover image, defaulting to its first photo. */
export function albumCover(album: Album): ImageMetadata | string {
  return resolveImageSrc(album.data.cover ?? album.data.images[0].src);
}

export { slugify };
