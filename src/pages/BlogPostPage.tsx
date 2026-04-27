import { useParams, Navigate } from 'react-router-dom'

import { AppLayout } from '@/components/layout/AppLayout'
import { BlogPostHeader } from '@/components/blog/BlogPostHeader'
import { BlogProse } from '@/components/blog/BlogProse'
import { SeoHead } from '@/components/seo/SeoHead'
import { Container } from '@/components/ui/container'
import { getAbsolutePath, getSiteUrl } from '@/config/site-url'
import { getPostBySlug } from '@/lib/blog'

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)
  if (!post) {
    return <Navigate to="/404" replace />
  }

  const Content = post.Component
  const site = getSiteUrl() || (typeof window !== 'undefined' ? window.location.origin : '')
  const imageUrl = site ? `${site}${getAbsolutePath(post.cover)}` : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: 'Mestre em Saúde' },
  }

  return (
    <>
      <SeoHead
        title={`${post.title} — Mestre em Saúde`}
        description={post.excerpt}
        path={`blog/${post.slug}`}
        imageUrl={imageUrl}
        jsonLd={jsonLd}
      />
      <AppLayout>
        <article className="border-b border-border/60 py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 overflow-hidden rounded-3xl border border-border/60 bg-surface">
                <img
                  src={`${import.meta.env.BASE_URL}${post.cover.replace(/^\//, '')}`}
                  alt=""
                  className="aspect-[2/1] w-full object-cover"
                  width={1200}
                  height={600}
                  loading="eager"
                />
              </div>
              <BlogPostHeader meta={post} />
              <BlogProse className="mt-10">
                <Content />
              </BlogProse>
            </div>
          </Container>
        </article>
      </AppLayout>
    </>
  )
}
