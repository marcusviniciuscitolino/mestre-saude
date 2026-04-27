import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { cn } from '@/lib/cn'
import { fadeUp, gentleTransition, stagger } from '@/lib/motion'

const heroImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-primary/5"
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-[0.35]',
          '[background-image:radial-gradient(circle_at_20%_20%,rgba(14,165,164,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(200,169,107,0.18),transparent_40%)]',
        )}
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            transition={gentleTransition}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur"
          >
            <ShieldCheck className="size-4 text-gold" aria-hidden />
            Enfermagem · Educação · Clínica
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={gentleTransition}
            className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            {siteConfig.slogan}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={gentleTransition}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={gentleTransition}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              size="lg"
              type="button"
              onClick={() => {
                document.getElementById('trilhas')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver trilhas
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="gold"
              type="button"
              onClick={() => {
                document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver cursos
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              type="button"
              onClick={() => {
                document.getElementById('parceiro')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Seja parceiro
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              type="button"
              onClick={() => {
                window.location.href = getWhatsAppHref(
                  `Olá, ${siteConfig.professionalName}! Gostaria de saber mais sobre seus cursos.`,
                )
              }}
            >
              Agendar conversa
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={gentleTransition}
            className="mt-8 text-xs text-muted"
          >
            {siteConfig.professionalName} · {siteConfig.coren}
          </motion.p>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...gentleTransition, delay: 0.1 }}
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-gold/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-soft">
              <img
                src={heroImage}
                alt="Profissional de saúde em ambiente clínico moderno e luminoso"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                width={900}
                height={1100}
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border/80 bg-surface/95 p-4 shadow-card backdrop-blur sm:left-8 sm:right-8">
              <p className="font-display text-lg text-foreground">Excelência no cuidado</p>
              <p className="mt-1 text-sm text-muted">
                Protocolos atuais, ética e comunicação clara — do plantão à gestão.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
