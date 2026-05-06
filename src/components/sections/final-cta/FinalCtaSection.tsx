import { motion } from 'framer-motion'
import { MessageCircle, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { PulseLineBg } from '@/components/ui/decorative'
import { Stat } from '@/components/ui/stat'
import { formatMetricNumber, socialPresenceMetrics } from '@/config/social-metrics.config'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { courses } from '@/config/courses.config'
import { INITIAL_ALUNAS } from '@/config/proof-numbers'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'

export function FinalCtaSection() {
  const m = useSectionMotion()
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden border-b border-border/55 bg-gradient-to-br from-primary via-primary to-primary-deep py-20 text-primary-foreground lg:py-24"
    >
      <PulseLineBg opacityClassName="opacity-[0.14]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,217,181,0.12),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(14,142,138,0.45),transparent_40%)]"
        aria-hidden
      />
      <Container className="relative">
        <motion.div
          className="flex flex-col gap-10 text-left lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.32 }}
          variants={m.fadeUp}
          transition={m.transition}
        >
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary-foreground/85">
              <Sparkles className="size-4 text-gold-soft" aria-hidden />
              Próximo passo
            </p>
            <h2 className="mt-4 font-display text-[2.1rem] leading-tight tracking-[-0.02em] sm:text-[2.45rem] lg:text-[3rem]">
              Pronto para evoluir clínica e carreira com método?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/88 sm:text-base">
              Veja as trilhas com desconto e cursos com certificação — ou fale comigo no WhatsApp.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:max-w-2xl sm:flex-row">
            <a href="#trilhas" className={cn(buttonVariants({ size: 'lg', variant: 'gold' }), 'w-full sm:w-auto')}>
              Ver trilhas
            </a>
            <Button
              size="lg"
              type="button"
              variant="outline"
              className="w-full border-primary-foreground/45 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              onClick={() => {
                window.open(
                  getWhatsAppHref(
                    `Olá, ${siteConfig.professionalName}! Quero entender as trilhas e cursos do site.`,
                  ),
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </Button>
            <Link
              to="/blog"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'ghost' }),
                'w-full justify-center border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 sm:w-auto',
              )}
            >
              Ir ao blog
            </Link>
          </div>

          <div className="grid gap-6 border-t border-primary-foreground/20 pt-10 sm:grid-cols-3">
            <Stat
              variant="inverse"
              icon={<TrendingUp className="size-5" />}
              size="sm"
              value={
                <>
                  {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
                  <span className="text-gold-soft">{socialPresenceMetrics.totalFollowersSuffix}</span>
                </>
              }
              label="Seguidores"
            />
            <Stat
              variant="inverse"
              icon={<Users className="size-5" />}
              size="sm"
              value={<span className="tabular-nums">{INITIAL_ALUNAS.toLocaleString('pt-BR')}+</span>}
              label="Alunos(as)"
              description="Comunidade ativa"
            />
            <Stat
              variant="inverse"
              icon={<Sparkles className="size-5" />}
              size="sm"
              value={`${courses.length}+`}
              label="Cursos publicados"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
