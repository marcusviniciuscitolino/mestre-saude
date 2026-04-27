import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AtSign, BarChart3, Sparkles, TrendingUp, Users } from 'lucide-react'

import { Container } from '@/components/ui/container'
import {
  formatMetricNumber,
  socialPresenceMetrics,
} from '@/config/social-metrics.config'
import { socialLinks } from '@/config/social.config'
import { useSectionMotion } from '@/hooks/use-section-motion'

const ig = socialLinks.find((s) => s.id === 'ig')
const tt = socialLinks.find((s) => s.id === 'tt')

const INITIAL_ALUNAS = 10_930

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
      className="border-b border-border/60 bg-gradient-to-r from-primary/8 via-surface to-gold/10 py-8 lg:py-10"
      aria-label="Números e presença digital"
    >
      <Container>
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={m.fadeUp}
          transition={m.transition}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-4 py-2 text-foreground shadow-sm">
              <BarChart3 className="size-4 text-primary" aria-hidden />
              <span className="font-medium">
                {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
                {socialPresenceMetrics.totalFollowersSuffix} seguidores
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-4 py-2">
              <TrendingUp className="size-4 text-accent" aria-hidden />
              <span>
                {formatMetricNumber(totalViews)} visualizações (
                {socialPresenceMetrics.engagementWindowLabel})
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-4 py-2 text-foreground shadow-sm">
              <Users className="size-4 text-primary" aria-hidden />
              <span className="font-medium tabular-nums text-foreground">
                {alunasCount.toLocaleString('pt-BR')} alunos(as)
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {ig ? (
              <a
                href={ig.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-2 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-foreground"
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
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-2 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-foreground"
              >
                <Sparkles className="size-4 text-primary" aria-hidden />
                TikTok
              </a>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
