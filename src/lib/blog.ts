import type { ComponentType } from 'react'

import type { BlogFrontmatter, BlogPost } from '@/types/blog'

type MdxModule = {
  default: ComponentType
  frontmatter: BlogFrontmatter
}

const rawModules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<
  string,
  MdxModule
>

export function getAllPosts(): BlogPost[] {
  return Object.entries(rawModules)
    .map(([key, mod]) => {
      const fm = mod.frontmatter
      return {
        ...fm,
        path: key,
        Component: mod.default,
      } satisfies BlogPost
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getRecentPosts(max = 3) {
  return getAllPosts().slice(0, max)
}
