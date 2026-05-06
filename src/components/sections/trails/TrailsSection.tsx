import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgePercent,
  CheckCircle2,
  GraduationCap,
  Star,
  TrendingUp,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { trails } from '@/config/trails.config'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { PulseLineBg } from '@/components/ui/decorative'
import { cn } from '@/lib/cn'

export function TrailsSection() {
  const m = useSectionMotion()
  return (
    <section id="trilhas" className="relative overflow-hidden border-b border-border/50 bg-surface py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.035]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Trilhas"
          title="Combos para acelerar sua formação"
          description="Escolha uma trilha com cursos complementares, e-book de anotação e certificado em todos os módulos."
        />

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={m.stagger}
        >
          {trails.map((trail) => (
            <motion.article
              key={trail.id}
              variants={m.fadeUp}
              transition={m.transition}
              className={cn(trail.popular && 'lg:z-[1]')}
            >
              <Card
                variant="default"
                className={cn(
                  'relative flex h-full flex-col overflow-hidden border-border/70 p-0 transition-transform duration-[380ms] hover:-translate-y-1 hover:shadow-soft',
                  trail.popular && 'shadow-glow-gold ring-1 ring-gold/35 lg:scale-[1.02]',
                )}
              >
                {trail.popular ? (
                  <div
                    className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-1.5 bg-gradient-to-b from-gold via-gold-soft to-gold/70 lg:block"
                    aria-hidden
                  />
                ) : null}

                <div
                  className={cn(
                    'relative border-b-[3px] border-gold/50 bg-primary px-6 pb-7 pt-8 text-primary-foreground',
                    trail.popular && 'pl-8',
                  )}
                >
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    {trail.bestSeller ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft/40 bg-gold-soft/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold-soft backdrop-blur-sm">
                        <TrendingUp className="size-3.5" aria-hidden />
                        Mais vendido
                      </span>
                    ) : null}
                    {trail.popular ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary-foreground/95 backdrop-blur">
                        <Star className="size-3.5" aria-hidden />
                        Mais procurado
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/25 bg-primary-deep/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                      <BadgePercent className="size-3.5" aria-hidden />
                      {trail.discount}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/25 bg-primary-deep/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                      <GraduationCap className="size-3.5" aria-hidden />
                      Certificado
                    </span>
                  </div>

                  <h3 className="font-display text-[1.65rem] leading-tight sm:text-[1.85rem]">
                    {trail.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/88">
                    {trail.subtitle}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  {trail.priceFrom && trail.priceTo ? (
                    <div className="mb-6 space-y-4 rounded-2xl border border-primary/12 bg-cream/70 px-5 py-5">
                      <div className="flex items-baseline gap-2 text-muted">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]">De</span>
                        <span className="font-display text-lg font-medium line-through">{trail.priceFrom}</span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                          Investimento
                        </span>
                        <span className="font-display text-[1.75rem] font-semibold tracking-tight text-primary">
                          {trail.priceTo}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <ul className="space-y-3">
                    {trail.courses.map((course) => (
                      <li key={course} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-muted">
                      <CheckCircle2 className="size-4 text-primary" aria-hidden />
                      Todos com certificado
                    </div>
                    {trail.popular ? (
                      <a
                        href={trail.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ className: 'w-full' }))}
                      >
                        Garantir esta trilha
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <Button
                        className="w-full"
                        type="button"
                        variant="outline"
                        onClick={() => {
                          window.open(trail.href, '_blank', 'noopener,noreferrer')
                        }}
                      >
                        Saiba mais
                        <ArrowUpRight className="size-4" aria-hidden />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
