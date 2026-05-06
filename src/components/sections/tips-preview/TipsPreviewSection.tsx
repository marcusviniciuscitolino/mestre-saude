import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { BlogCard } from '@/components/blog/BlogCard'
import { PulseLineBg } from '@/components/ui/decorative'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { getRecentPosts } from '@/lib/blog'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'

export function TipsPreviewSection() {
  const m = useSectionMotion()
  const posts = getRecentPosts(3)
  const [featured, ...rest] = posts

  return (
    <section id="dicas" className="relative border-b border-border/50 bg-cream py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.035]" />
      <Container className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Blog"
            title="Dicas e atualizações"
            description="Artigos práticos para o plantão, documentação e liderança — leia no site ou acompanhe nas redes."
            className="!mx-0 max-w-2xl"
          />
          <Link
            to="/blog"
            className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto lg:shrink-0')}
          >
            Ver todos os artigos
          </Link>
        </div>

        {featured ? (
          <motion.div
            className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.82fr)] lg:gap-10 xl:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={m.stagger}
          >
            <motion.div variants={m.fadeUp} transition={m.transition}>
              <BlogCard post={featured} layout="featured" />
            </motion.div>
            <motion.div variants={m.stagger} className="flex flex-col gap-8">
              {rest.map((post) => (
                <motion.div key={post.slug} variants={m.fadeUp} transition={m.transition}>
                  <BlogCard post={post} layout="compact" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </Container>
    </section>
  )
}
