import type { ComponentType } from 'react'

export type BlogFrontmatter = {
  /** URL slug */
  slug: string
  title: string
  excerpt: string
  category: string
  /** YYYY-MM-DD */
  publishedAt: string
  /** public path, e.g. `images/...` under BASE_URL */
  cover: string
}

export type BlogPost = BlogFrontmatter & {
  path: string
  Component: ComponentType
}
