import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

import { LeadForm } from '@/components/forms/LeadForm'
import { Container } from '@/components/ui/container'
import { GoldDivider } from '@/components/ui/decorative'
import { PulseLineBg } from '@/components/ui/decorative'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { leadConfig } from '@/config/lead.config'
import { siteConfig } from '@/config/site.config'

export function LeadMagnetSection() {
  const m = useSectionMotion()
  return (
    <section id="lead" className="relative overflow-hidden border-b border-border/50 bg-cream py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.05]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={m.fadeUp}
            transition={m.transition}
            className="relative"
          >
            <div className="absolute inset-0 mx-auto hidden max-w-sm rotate-[-2deg] scale-105 rounded-[2rem] bg-gold/20 blur-[80px] lg:block" />

            <div className="relative mx-auto flex max-w-md flex-col gap-6 lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-gold/40 bg-gradient-to-br from-primary via-primary-deep to-foreground p-[2px] shadow-soft">
                <div className="flex h-full flex-col justify-between rounded-[2.1rem] bg-surface p-8 sm:p-10">
                  <div>
                    <GoldDivider className="w-16" />
                    <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">
                      E-book exclusivo
                    </p>
                    <p className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-[2.15rem]">
                      {leadConfig.leadMagnetTitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {leadConfig.leadMagnetDescription}
                    </p>
                  </div>
                  <div className="space-y-2 border-t border-border/60 pt-6 text-xs uppercase tracking-[0.18em] text-muted">
                    <p>{siteConfig.title}</p>
                    <p className="text-gold">{siteConfig.professionalName}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-surface/90 px-4 py-3 text-xs text-muted shadow-card">
                <Sparkles className="size-4 text-gold" aria-hidden />
                <span>Entrega imediata · conteúdo exclusivo para profissionais da linha de frente</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-border/70 bg-surface/95 p-8 shadow-soft sm:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={m.fadeUp}
            transition={m.transition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Receber agora</p>
            <h2 className="mt-3 font-display text-[1.85rem] text-foreground sm:text-[2.25rem]">
              Preencha para receber o guia
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Usamos o e-mail só para enviar o material. Se preferir, use o atalho do WhatsApp no canto.
            </p>
            <div className="mt-10">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
