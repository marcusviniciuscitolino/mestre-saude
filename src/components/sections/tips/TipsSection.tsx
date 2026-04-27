import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { tips } from '@/config/tips.config'
import { fadeUp, gentleTransition, stagger } from '@/lib/motion'
import { cn } from '@/lib/cn'

export function TipsSection() {
  return (
    <section id="dicas" className="border-b border-border/60 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Conteúdo"
          title="Dicas e atualizações"
          description="Insights rápidos para o plantão, documentação e liderança — publicados também nas redes sociais."
        />

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {tips.map((tip) => (
            <motion.article
              key={tip.id}
              variants={fadeUp}
              transition={gentleTransition}
              className={cn(
                'group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-card',
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={tip.imageUrl}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {tip.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl leading-snug text-foreground">
                  {tip.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {tip.excerpt}
                </p>
                <a
                  href={tip.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-accent"
                >
                  Ler dica
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
