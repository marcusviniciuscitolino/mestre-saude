import { Link } from 'react-router-dom'

import type { BlogFrontmatter } from '@/types/blog'

type BlogPostHeaderProps = {
  meta: BlogFrontmatter
}

export function BlogPostHeader({ meta }: BlogPostHeaderProps) {
  return (
    <header className="border-b border-border/60 pb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{meta.category}</p>
      <h1 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {meta.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{meta.excerpt}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
        <time dateTime={meta.publishedAt}>
          {new Date(meta.publishedAt + 'T12:00:00').toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <Link to="/blog" className="font-medium text-primary hover:text-accent">
          ← Voltar ao blog
        </Link>
      </div>
    </header>
  )
}
