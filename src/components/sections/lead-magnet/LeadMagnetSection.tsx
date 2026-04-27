import { motion } from 'framer-motion'
import { BookOpen, Gift } from 'lucide-react'

import { LeadForm } from '@/components/forms/LeadForm'
import { Container } from '@/components/ui/container'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { leadConfig } from '@/config/lead.config'

export function LeadMagnetSection() {
  const m = useSectionMotion()
  return (
    <section
      id="lead"
      className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={m.fadeUp}
            transition={m.transition}
            className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-surface p-8 shadow-soft sm:p-10"
          >
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-gold/15 blur-2xl" aria-hidden />
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BookOpen className="size-6" aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-3xl text-foreground sm:text-4xl">
              {leadConfig.leadMagnetTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {leadConfig.leadMagnetDescription}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
              <Gift className="size-4 text-gold" aria-hidden />
              100% gratuito · Uso o seu e-mail só para enviar o material
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-border/80 bg-surface/90 p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={m.fadeUp}
            transition={m.transition}
          >
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Receba o guia agora</h2>
            <p className="mt-2 text-sm text-muted">
              Preencha abaixo. Se preferir, use o atalho do WhatsApp no canto.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
