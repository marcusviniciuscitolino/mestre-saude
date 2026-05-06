import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import { Activity, ArrowUpRight, Building2, Clock, GraduationCap, Siren } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle, type CardProps } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { PriceTag } from '@/components/ui/price-tag'
import { PulseLineBg } from '@/components/ui/decorative'
import { courses } from '@/config/courses.config'
import { getTrailTitleById } from '@/config/trails.config'
import { useSectionMotion } from '@/hooks/use-section-motion'
import type { CourseBadge } from '@/types/content'
import { cn } from '@/lib/cn'

const badgeCopy: Record<CourseBadge, string> = {
  'mais-procurado': 'Mais procurado',
  popular: 'Popular',
  novo: 'Novo',
}

const courseIcons: Record<string, ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  'curso-1': Activity,
  'curso-2': Siren,
  'curso-3': Building2,
}

function courseIconFor(id: string) {
  return courseIcons[id] ?? GraduationCap
}

export function CoursesSection() {
  const m = useSectionMotion()
  return (
    <section id="cursos" className="relative border-b border-border/50 bg-cream py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.04]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Cursos"
          title="Meus cursos"
          description="Trilhas objetivas para evoluir clínica, comunicação e gestão — no seu ritmo, com suporte pelos canais oficiais."
        />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={m.stagger}
        >
          {courses.map((course) => {
            const trailTitle = course.trailId ? getTrailTitleById(course.trailId) : undefined
            const Icon = courseIconFor(course.id)
            const cardVariant: NonNullable<CardProps['variant']> =
              course.badge === 'mais-procurado' ? 'gold-trim' : 'default'

            return (
              <motion.article key={course.id} variants={m.fadeUp} transition={m.transition}>
                <Card
                  variant={cardVariant}
                  className={cn(
                    '!p-0 flex h-full flex-col rounded-[1.85rem] shadow-card transition duration-[380ms] hover:-translate-y-1 hover:shadow-soft',
                    course.badge === 'mais-procurado' && 'ring-1 ring-gold/35',
                  )}
                >
                  <CardHeader className="space-y-4 px-8 pb-2 pt-10">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10">
                        <Icon className="size-7" aria-hidden />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted">
                          {course.level}
                        </p>
                        {course.badge ? (
                          <Badge variant="gold" className="text-[0.6rem] uppercase tracking-wider">
                            {badgeCopy[course.badge]}
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                    <CardTitle className="text-[1.35rem] sm:text-2xl">{course.title}</CardTitle>
                    <CardDescription className="text-[0.95rem] leading-relaxed">
                      {course.description}
                    </CardDescription>
                    {course.priceFrom ? (
                      <div className="mt-1">
                        <PriceTag>{course.priceFrom}</PriceTag>
                      </div>
                    ) : null}
                    {trailTitle ? (
                      <p className="text-xs text-muted">
                        Conteúdo alinhado à trilha{' '}
                        <a href="#trilhas" className="font-semibold text-primary hover:text-accent">
                          {trailTitle}
                        </a>
                        .
                      </p>
                    ) : null}
                  </CardHeader>
                  <div className="mt-auto flex flex-wrap items-center gap-2 px-8 pb-6 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5">
                      <Clock className="size-3.5 text-primary" aria-hidden />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5">
                      <GraduationCap className="size-3.5 text-primary" aria-hidden />
                      Certificado
                    </span>
                    <Link
                      to="/blog"
                      className="ml-auto font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Ver dicas no blog
                    </Link>
                  </div>
                  <div className="border-t border-border/50 px-8 py-6">
                    <Button
                      className="w-full"
                      variant="gold"
                      size="lg"
                      type="button"
                      onClick={() => {
                        window.open(course.href, '_blank', 'noopener,noreferrer')
                      }}
                    >
                      Acessar página do curso
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Button>
                  </div>
                </Card>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
