import type { BlogFrontmatter } from '@/types/blog'
import type { ComponentType } from 'react'

declare module '*.mdx' {
  const MDXComponent: ComponentType
  export default MDXComponent
  export const frontmatter: BlogFrontmatter
}
