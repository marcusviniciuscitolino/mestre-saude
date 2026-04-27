import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { PriceTag } from '@/components/ui/price-tag'
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

export function CoursesSection() {
  const m = useSectionMotion()
  return (
    <section id="cursos" className="border-b border-border/60 bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cursos"
          title="Meus cursos"
          description="Trilhas objetivas para evoluir clínica, comunicação e gestão — no seu ritmo, com suporte pelos canais oficiais."
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={m.stagger}
        >
          {courses.map((course) => {
            const trailTitle = course.trailId ? getTrailTitleById(course.trailId) : undefined
            return (
              <motion.article key={course.id} variants={m.fadeUp} transition={m.transition}>
                <Card
                  className={cn(
                    'flex h-full flex-col border-primary/10 transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-soft',
                    course.badge === 'mais-procurado' && 'ring-1 ring-gold/40',
                  )}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {course.level}
                      </p>
                      {course.badge ? (
                        <Badge variant="gold" className="text-[0.6rem]">
                          {badgeCopy[course.badge]}
                        </Badge>
                      ) : null}
                    </div>
                    <CardTitle className="mt-1">{course.title}</CardTitle>
                    <CardDescription className="mt-2">{course.description}</CardDescription>
                    {course.priceFrom ? (
                      <div className="mt-3">
                        <PriceTag>{course.priceFrom}</PriceTag>
                      </div>
                    ) : null}
                    {trailTitle ? (
                      <p className="mt-3 text-xs text-muted">
                        Conteúdo alinhado à trilha{' '}
                        <a href="#trilhas" className="font-medium text-primary hover:text-accent">
                          {trailTitle}
                        </a>
                        .
                      </p>
                    ) : null}
                  </CardHeader>
                  <div className="mt-auto flex flex-wrap items-center gap-3 px-6 pb-2 pt-0 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1">
                      <Clock className="size-3.5 text-primary" aria-hidden />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1">
                      <GraduationCap className="size-3.5 text-primary" aria-hidden />
                      Certificado
                    </span>
                    <Link
                      to="/blog"
                      className="ml-auto text-primary underline-offset-2 hover:underline"
                    >
                      Ver dicas no blog
                    </Link>
                  </div>
                  <div className="border-t border-border/60 px-6 py-5">
                    <Button
                      className="w-full"
                      variant="gold"
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
