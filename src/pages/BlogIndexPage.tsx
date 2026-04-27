import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { AppLayout } from '@/components/layout/AppLayout'
import { BlogCard } from '@/components/blog/BlogCard'
import { SeoHead } from '@/components/seo/SeoHead'
import { SectionHeading } from '@/components/ui/section-heading'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site.config'
import { getAllPosts } from '@/lib/blog'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/cn'

export function BlogIndexPage() {
  const m = useSectionMotion()
  const posts = getAllPosts()

  return (
    <>
      <SeoHead
        title={`Blog — ${siteConfig.title}`}
        description="Dicas, protocolos e soft skills em enfermagem — leitura objetiva para o plantão."
        path="blog"
      />
      <AppLayout>
        <div className="border-b border-border/60 py-12 lg:py-16">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                align="left"
                className="!mx-0"
                eyebrow="Blog"
                title="Dicas e artigos"
                description="Educação contínua com foco clínico, documentação e carreira em enfermagem."
              />
              <Link to="/" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
                Voltar à página inicial
              </Link>
            </div>

            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={m.stagger}
            >
              {posts.map((post) => (
                <motion.div key={post.slug} variants={m.fadeUp} transition={m.transition}>
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      </AppLayout>
    </>
  )
}
