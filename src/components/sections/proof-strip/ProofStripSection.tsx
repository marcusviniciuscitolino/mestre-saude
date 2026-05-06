import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AtSign,
  BarChart3,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

import { Container } from '@/components/ui/container'
import { Stat } from '@/components/ui/stat'
import { courses } from '@/config/courses.config'
import {
  formatMetricNumber,
  socialPresenceMetrics,
} from '@/config/social-metrics.config'
import { INITIAL_ALUNAS } from '@/config/proof-numbers'
import { socialLinks } from '@/config/social.config'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'

const ig = socialLinks.find((s) => s.id === 'ig')
const tt = socialLinks.find((s) => s.id === 'tt')

export function ProofStripSection() {
  const m = useSectionMotion()
  const [alunasCount, setAlunasCount] = useState(INITIAL_ALUNAS)
  const totalViews = socialPresenceMetrics.channels.reduce(
    (acc, ch) => acc + ch.engagementLast90Days.views,
    0,
  )

  useEffect(() => {
    let ticks = 0
    const id = setInterval(() => {
      ticks += 1
      setAlunasCount((prev) => prev + 1 + (ticks % 5 === 0 ? 7 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative border-b border-gold/35 bg-cream section-divider-gold py-10 lg:py-12"
      aria-label="Números e presença digital"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden />

      <Container>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={m.fadeUp}
          transition={m.transition}
        >
          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className="flex flex-col gap-3 pr-0 lg:border-r lg:border-gold/25 lg:pr-8"
          >
            <Stat
              size="lg"
              icon={<BarChart3 className="size-5" />}
              value={
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={m.transition}
                  className="inline-block"
                >
                  {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
                  <span className="text-gold">{socialPresenceMetrics.totalFollowersSuffix}</span>
                </motion.span>
              }
              label="Seguidores combinados"
              description={`Presença em ${socialPresenceMetrics.channels.length} redes principais`}
            />
          </motion.div>

          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className={cn(
              'flex flex-col gap-3 border-t border-border/50 pt-8 sm:border-t-0 sm:pt-0 lg:border-l-0 lg:px-8',
              'lg:border-r lg:border-gold/25',
            )}
          >
            <Stat
              size="lg"
              icon={<TrendingUp className="size-5" />}
              value={
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={m.transition}
                  className="inline-block"
                >
                  {formatMetricNumber(totalViews)}
                </motion.span>
              }
              label="Visualizações orgânicas"
              description={`Janela: ${socialPresenceMetrics.engagementWindowLabel}`}
            />
          </motion.div>

          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className={cn(
              'flex flex-col gap-3 border-t border-border/50 pt-8 lg:border-l-0 lg:border-t-0 lg:px-8 lg:pt-0',
              'lg:border-r lg:border-gold/25',
            )}
          >
            <Stat
              size="lg"
              icon={<Users className="size-5" />}
              value={
                <span className="font-display tabular-nums tracking-tight">
                  {alunasCount.toLocaleString('pt-BR')}
                </span>
              }
              label="Alunos(as) impactados(as)"
              description="Comunidade ativa nos cursos e trilhas"
            />
          </motion.div>

          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className="flex flex-col gap-3 border-t border-border/50 pt-8 lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <Stat
              size="lg"
              icon={<BookOpen className="size-5" />}
              value={
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={m.transition}
                  className="inline-block"
                >
                  {courses.length}+
                </motion.span>
              }
              label="Cursos disponíveis"
              description="Conteúdo clínico e gestão atualizado continuamente"
            />
            <div className="flex flex-wrap gap-2 pt-2 lg:justify-end">
              {ig ? (
                <a
                  href={ig.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted transition hover:border-gold hover:text-foreground"
                >
                  <AtSign className="size-4 text-primary" aria-hidden />
                  Instagram
                </a>
              ) : null}
              {tt ? (
                <a
                  href={tt.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted transition hover:border-gold hover:text-foreground"
                >
                  <Sparkles className="size-4 text-primary" aria-hidden />
                  TikTok
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" aria-hidden />
    </section>
  )
}
