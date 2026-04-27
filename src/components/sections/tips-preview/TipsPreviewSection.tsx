import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { BlogCard } from '@/components/blog/BlogCard'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { getRecentPosts } from '@/lib/blog'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'

export function TipsPreviewSection() {
  const m = useSectionMotion()
  const posts = getRecentPosts(3)

  return (
    <section id="dicas" className="border-b border-border/60 bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Blog"
            title="Dicas e atualizações"
            description="Artigos práticos para o plantão, documentação e liderança — leia no site ou acompanhe nas redes."
            className="!mx-0 max-w-2xl"
          />
          <Link to="/blog" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
            Ver todos os artigos
          </Link>
        </div>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
    </section>
  )
}
