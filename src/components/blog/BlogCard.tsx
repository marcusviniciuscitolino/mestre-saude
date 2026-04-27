import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { BlogPost } from '@/types/blog'
import { cn } from '@/lib/cn'

type BlogCardProps = {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  const cover = `${import.meta.env.BASE_URL}${post.cover.replace(/^\//, '')}`

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-card transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={cover}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          width={800}
          height={500}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {post.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs text-muted" dateTime={post.publishedAt}>
          {new Date(post.publishedAt + 'T12:00:00').toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h3 className="mt-2 font-display text-xl leading-snug text-foreground">
          <Link
            to={`/blog/${post.slug}`}
            className="transition hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-accent"
        >
          Ler artigo
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
