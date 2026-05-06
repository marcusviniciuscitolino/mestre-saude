import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { BlogPost } from '@/types/blog'
import { cn } from '@/lib/cn'

type BlogCardLayout = 'default' | 'featured' | 'compact'

type BlogCardProps = {
  post: BlogPost
  className?: string
  layout?: BlogCardLayout
}

export function BlogCard({ post, className, layout = 'default' }: BlogCardProps) {
  const cover = `${import.meta.env.BASE_URL}${post.cover.replace(/^\//, '')}`

  const isFeatured = layout === 'featured'
  const isCompact = layout === 'compact'

  return (
    <article
      className={cn(
        'group flex h-full overflow-hidden rounded-[1.85rem] border border-border/70 bg-background shadow-card transition duration-[380ms] hover:-translate-y-1 hover:border-gold/35 hover:shadow-soft',
        isFeatured && 'flex-col',
        isCompact && 'flex-row gap-5',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-surface',
          isFeatured ? 'aspect-[16/9] sm:aspect-[16/10]' : isCompact ? 'w-36 shrink-0 sm:w-44' : 'aspect-[16/10]',
          isCompact && 'rounded-l-[inherit]',
        )}
      >
        <img
          src={cover}
          alt=""
          className={cn(
            'h-full w-full object-cover transition duration-[480ms]',
            isCompact ? 'min-h-[7.5rem]' : '',
            !isCompact && 'group-hover:scale-[1.03]',
          )}
          width={800}
          height={500}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 lg:opacity-0" />
        <div className="absolute left-4 top-4 rounded-full border border-gold/45 bg-background/92 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
          {post.category}
        </div>
      </div>
      <div
        className={cn(
          'flex flex-1 flex-col',
          isFeatured ? 'p-8 lg:p-10' : isCompact ? 'py-6 pr-6' : 'p-6',
        )}
      >
        <div className="mt-3 flex items-center gap-3 text-xs text-muted">
          <span
            className="h-px w-10 bg-gradient-to-r from-transparent via-gold/80 to-gold flex-shrink-0"
            aria-hidden
          />
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt + 'T12:00:00').toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
        <h3
          className={cn(
            'mt-3 font-display text-foreground',
            isFeatured ? 'text-2xl leading-snug lg:text-[1.75rem]' : isCompact ? 'text-lg leading-snug' : 'text-xl leading-snug',
          )}
        >
          <Link to={`/blog/${post.slug}`} className="transition hover:text-primary">
            {post.title}
          </Link>
        </h3>
        {!isCompact ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        ) : (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        )}
        <Link
          to={`/blog/${post.slug}`}
          className={cn(
            'mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-accent',
            isCompact && 'mt-auto',
          )}
        >
          Ler artigo
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
