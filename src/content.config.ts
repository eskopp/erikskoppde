/**
 * Content Collections (Astro v7 loader API).
 *
 * Folder convention: `src/content/<collection>/<locale>/**`
 *  - posts/en/**  -> EN posts
 *  - posts/fr/**  -> FR posts
 *  - pages/en/**  -> EN static pages (about, etc.)
 *  - pages/fr/**  -> FR static pages
 *
 * The locale is derived from the file path so authors do not need to set it
 * manually (but they may override it in frontmatter).
 */

import { glob } from 'astro/loaders';
import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'zod';

import { SITE } from './config';

const localeEnum = z.enum(SITE.locales as unknown as [string, ...string[]]);

/**
 * Build the post / page frontmatter schema.
 *
 * `heroImage` accepts THREE shapes:
 *   1. An imported asset via `image()` — a path RELATIVE TO THE
 *      MARKDOWN FILE pointing into `src/assets/...`. Astro resolves
 *      it through its image pipeline (WebP, responsive `srcset`,
 *      width/height inferred). This is the recommended option.
 *   2. A public path (e.g. `/images/foo.jpg`) — copied as-is, NOT
 *      optimized.
 *   3. An external URL (https://…) — optimized at build if the host
 *      is allow-listed in `image.remotePatterns` in `astro.config.mjs`.
 */
const baseFrontmatter = ({ image }: SchemaContext) =>
  z.object({
    title: z.string().min(1).max(140),
    description: z.string().min(1).max(280),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    /**
     * Which listing a post belongs to: personal `blog` posts (default) vs.
     * `wissenschaft` (science/experiment write-ups). The main feed
     * (home, archives, RSS, sidebar) only shows `blog`; `/wissenschaft`
     * only shows `wissenschaft`. Both still get their own permalink and
     * still appear under tags/categories regardless of section.
     */
    section: z.enum(['blog', 'wissenschaft']).default('blog'),
    draft: z.boolean().default(false),
    heroImage: z.union([image(), z.string()]).optional(),
    /** Optional alt-text for the hero/featured image. */
    heroImageAlt: z.string().optional(),
    /** Per-post override of SITE.showFeaturedImages (cards + hero). */
    showFeaturedImage: z.boolean().optional(),
    /** Per-post override of SITE.dynamicPostCardHeight on listing cards. */
    dynamicPostCardHeight: z.boolean().optional(),
    canonicalURL: z.url().optional(),
    toc: z.boolean().default(true),
    /** Pin to top of listings. */
    pinned: z.boolean().default(false),
    /**
     * Opt in to LaTeX math rendering (KaTeX). When `true`, the layout
     * loads `katex.min.css` only on this page so the stylesheet stays
     * off posts/pages that don't use math.
     */
    math: z.boolean().default(false),
    /**
     * Opt in to Mermaid diagram rendering. When `true`, the layout
     * loads the Mermaid client library and initializes diagrams.
     * Defaults to `false` to keep the heavy Mermaid library off posts/pages
     * that don't use it.
     */
    mermaid: z.boolean().default(false),
    /** Optional locale override; otherwise inferred from path. */
    lang: localeEnum.optional(),
    /**
     * Maps translated variants together. Posts that share a translationKey
     * across locales are considered translations of each other and the
     * language switcher will jump between them on the same article.
     *
     * If omitted, falls back to the file slug (relative to the locale folder).
     */
    translationKey: z.string().optional(),
    /**
     * Unlisted posts/pages are NOT shown in any listing (home, archives,
     * tags, categories, RSS, sitemap) but remain accessible to anyone who
     * knows the direct URL.
     *
     * Use `unlistedHideFromSeo: true` (the default when `unlisted: true`)
     * to also emit `<meta name="robots" content="noindex, nofollow">` so
     * search engines won't index or follow links on the page.
     */
    unlisted: z.boolean().default(false),
    /**
     * When `true`, adds `<meta name="robots" content="noindex, nofollow">`
     * to the page. Defaults to `true` whenever `unlisted: true`; can be
     * set independently to hide a listed post from search engines, or to
     * keep an unlisted post indexable (e.g. for sharing via a canonical URL
     * you control).
     */
    unlistedHideFromSeo: z.boolean().optional(),
    /**
     * Opt in to an "AI-assisted" notice on the post. Set this when an AI
     * tool materially helped write or edit the content (not just spell-
     * checking) — transparency for readers, not a legal disclaimer.
     */
    aiAssisted: z.boolean().default(false),
  });

export type PostFrontmatter = z.infer<ReturnType<typeof baseFrontmatter>>;

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
  }),
  schema: baseFrontmatter,
});

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/pages',
  }),
  schema: (ctx) =>
    baseFrontmatter(ctx)
      .partial({ pubDate: true })
      .extend({
        /** Pages don't paginate or appear in archives. */
        showInNav: z.boolean().default(false),
      }),
});

/**
 * Photo galleries ("albums"). Each entry is one album; `images` lists its
 * photos in display order. `src` on both `cover` and each image accepts
 * the same three shapes as `heroImage` above (imported asset, public path,
 * or allow-listed remote URL).
 */
const galleries = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/galleries',
  }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string().min(1).max(140),
      description: z.string().min(1).max(280),
      date: z.coerce.date(),
      draft: z.boolean().default(false),
      /** Pin to top of the gallery index. */
      pinned: z.boolean().default(false),
      /** Optional cover image; defaults to the first entry in `images`. */
      cover: z.union([image(), z.string()]).optional(),
      images: z
        .array(
          z.object({
            src: z.union([image(), z.string()]),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .min(1),
    }),
});

export const collections = { posts, pages, galleries };
