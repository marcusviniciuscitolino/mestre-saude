import { motion } from 'framer-motion'
import { ArrowUpRight, BadgePercent, CheckCircle2, GraduationCap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { trails } from '@/config/trails.config'
import { fadeUp, gentleTransition, stagger } from '@/lib/motion'

export function TrailsSection() {
  return (
    <section id="trilhas" className="border-b border-border/60 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trilhas"
          title="Combos para acelerar sua formação"
          description="Escolha uma trilha com cursos complementares, e-book de anotação e certificado em todos os módulos."
        />

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {trails.map((trail) => (
            <motion.article key={trail.id} variants={fadeUp} transition={gentleTransition}>
              <Card className="flex h-full flex-col overflow-hidden p-0 transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft">
                <div className="bg-gradient-to-br from-primary via-accent to-sky-500 p-6 text-primary-foreground">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
                      <BadgePercent className="size-3.5" aria-hidden />
                      {trail.discount}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
                      <GraduationCap className="size-3.5" aria-hidden />
                      Certificado
                    </span>
                  </div>

                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                    {trail.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                    {trail.subtitle}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {trail.priceFrom && trail.priceTo ? (
                    <div className="mb-5 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm">
                      <span className="text-muted">De </span>
                      <span className="font-medium text-muted line-through">{trail.priceFrom}</span>
                      <span className="text-muted"> por </span>
                      <span className="font-semibold text-primary">{trail.priceTo}</span>
                    </div>
                  ) : null}

                  <ol className="space-y-3">
                    {trail.courses.map((course, index) => (
                      <li key={course} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-muted">
                      <CheckCircle2 className="size-4 text-primary" aria-hidden />
                      Todos com certificado
                    </div>
                    <Button
                      className="w-full"
                      type="button"
                      onClick={() => {
                        window.open(trail.href, '_blank', 'noopener,noreferrer')
                      }}
                    >
                      Saiba mais
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Button>
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
