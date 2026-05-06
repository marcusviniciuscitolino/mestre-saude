import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calculator,
  ClipboardList,
  Clock,
  Gift,
  GraduationCap,
  PenLine,
  ShieldCheck,
} from 'lucide-react'
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
import type { CourseBadge, CourseItem } from '@/types/content'
import { cn } from '@/lib/cn'

const badgeCopy: Record<CourseBadge, string> = {
  'mais-procurado': 'Mais procurado',
  popular: 'Popular',
  novo: 'Novo',
}

const courseIcons: Record<string, ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  'curso-anotacao-enfermagem': PenLine,
  'curso-calculo-medicamentos': Calculator,
  'curso-protocolos-assistenciais': ClipboardList,
  'ebook-anotacao-exemplos': BookOpen,
  'curso-seguranca-paciente': ShieldCheck,
  'curso-candidato-contratado': Briefcase,
  'curso-eletrocardiograma': Activity,
}

function courseIconFor(id: string) {
  return courseIcons[id] ?? GraduationCap
}

type MotionApi = ReturnType<typeof useSectionMotion>

function CourseCard({
  course,
  variant,
  m,
}: {
  course: CourseItem
  variant: 'featured' | 'default'
  m: MotionApi
}) {
  const trailTitle = course.trailId ? getTrailTitleById(course.trailId) : undefined
  const Icon = courseIconFor(course.id)
  const cardVariant: NonNullable<CardProps['variant']> =
    course.badge === 'mais-procurado' ? 'gold-trim' : 'default'

  const metaRow = (
    <div className="flex items-start gap-4">
      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10">
        <Icon className="size-7" aria-hidden />
      </span>
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted">{course.level}</p>
        {course.badge ? (
          <Badge variant="gold" className="text-[0.6rem] uppercase tracking-wider">
            {badgeCopy[course.badge]}
          </Badge>
        ) : null}
        {variant === 'featured' ? (
          <Badge variant="outline" className="border-primary/40 text-[0.6rem] uppercase tracking-wider text-primary">
            Em destaque
          </Badge>
        ) : null}
      </div>
    </div>
  )

  const priceBlock =
    course.priceFrom && course.priceTo ? (
      <div className="mt-1 space-y-1">
        <p className="text-xs text-muted line-through">{course.priceFrom}</p>
        <PriceTag>{course.priceTo}</PriceTag>
      </div>
    ) : course.priceFrom ? (
      <div className="mt-1">
        <PriceTag>{course.priceFrom}</PriceTag>
      </div>
    ) : null

  const trailBlock =
    trailTitle != null ? (
      <p className={cn('text-xs text-muted', variant === 'featured' && 'mt-3')}>
        Conteúdo alinhado à trilha{' '}
        <Link to={{ pathname: '/', hash: 'trilhas' }} className="font-semibold text-primary hover:text-accent">
          {trailTitle}
        </Link>
        .
      </p>
    ) : null

  const bonusBlock =
    course.bonusNote != null ? (
      <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
        <Gift className="size-3.5 shrink-0" aria-hidden />
        {course.bonusNote}
      </p>
    ) : null

  const chipsRow = (
    <>
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
        className={cn(
          'font-medium text-primary underline-offset-4 hover:underline',
          variant === 'default' && 'ml-auto',
          variant === 'featured' && 'lg:ml-0',
        )}
      >
        Ver dicas no blog
      </Link>
    </>
  )

  const ctaButton = (
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
  )

  if (variant === 'featured') {
    return (
      <motion.article className="col-span-full" variants={m.fadeUp} transition={m.transition}>
        <Card
          variant={cardVariant}
          className={cn(
            '!p-0 flex h-full flex-col rounded-[1.85rem] shadow-card transition duration-[380ms] hover:-translate-y-1 hover:shadow-soft lg:flex-row',
            course.badge === 'mais-procurado' && 'ring-1 ring-gold/35',
            'ring-2 ring-primary/30',
          )}
        >
          <CardHeader className="flex-1 space-y-4 px-8 pb-8 pt-10 lg:pb-10">
            {metaRow}
            <CardTitle className="text-[1.35rem] sm:text-2xl lg:text-[1.65rem]">{course.title}</CardTitle>
            <CardDescription className="text-[0.95rem] leading-relaxed lg:max-w-2xl">
              {course.description}
            </CardDescription>
          </CardHeader>
          <div className="flex w-full shrink-0 flex-col border-t border-border/50 lg:max-w-md lg:border-l lg:border-t-0">
            <div className="space-y-1 px-8 pt-6 lg:pt-10">
              {priceBlock}
              {bonusBlock}
              {trailBlock}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2 px-8 pb-6 pt-4 text-xs text-muted lg:flex-col lg:items-stretch lg:gap-3">
              {chipsRow}
            </div>
            <div className="border-t border-border/50 px-8 py-6">{ctaButton}</div>
          </div>
        </Card>
      </motion.article>
    )
  }

  return (
    <motion.article variants={m.fadeUp} transition={m.transition}>
      <Card
        variant={cardVariant}
        className={cn(
          '!p-0 flex h-full flex-col rounded-[1.85rem] shadow-card transition duration-[380ms] hover:-translate-y-1 hover:shadow-soft',
          course.badge === 'mais-procurado' && 'ring-1 ring-gold/35',
        )}
      >
        <CardHeader className="space-y-4 px-8 pb-2 pt-10">
          {metaRow}
          <CardTitle className="text-[1.35rem] sm:text-2xl">{course.title}</CardTitle>
          <CardDescription className="text-[0.95rem] leading-relaxed">{course.description}</CardDescription>
          {priceBlock}
          {bonusBlock}
          {trailBlock}
        </CardHeader>
        <div className="mt-auto flex flex-wrap items-center gap-2 px-8 pb-6 text-xs text-muted">{chipsRow}</div>
        <div className="border-t border-border/50 px-8 py-6">{ctaButton}</div>
      </Card>
    </motion.article>
  )
}

export function CoursesSection() {
  const m = useSectionMotion()
  const featuredCourses = courses.filter((c) => c.featured)
  const otherCourses = courses.filter((c) => !c.featured)

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
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} variant="featured" m={m} />
          ))}
          {otherCourses.map((course) => (
            <CourseCard key={course.id} course={course} variant="default" m={m} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
