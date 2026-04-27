import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'
import { stagger } from '@/lib/motion'

const heroImageBase = `${import.meta.env.BASE_URL}images/hero-clinical`
const srcSet = [
  `${heroImageBase}-400.jpg 400w`,
  `${heroImageBase}-800.jpg 800w`,
  `${heroImageBase}-1200.jpg 1200w`,
].join(', ')

export function HeroSection() {
  const m = useSectionMotion()
  const reduce = useReducedMotion()
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
          variants={reduce ? m.fadeUp : stagger}
        >
          <motion.p
            variants={m.fadeUp}
            transition={m.transition}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur"
          >
            <ShieldCheck className="size-4 text-gold" aria-hidden />
            Enfermagem · Educação · Clínica
          </motion.p>

          <motion.h1
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.2rem]"
          >
            Acelere sua carreira em enfermagem com método validado por centenas de milhares de profissionais
          </motion.h1>

          <motion.p
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#trilhas"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Ver trilhas
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#parceiro"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
            >
              Seja parceiro
            </a>
            <button
              type="button"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
              onClick={() => {
                window.open(
                  getWhatsAppHref(
                    `Olá, ${siteConfig.professionalName}! Gostaria de orientação sobre cursos e trilhas.`,
                  ),
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
            >
              Falar no WhatsApp
            </button>
          </motion.div>

          <motion.p
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-8 text-xs text-muted"
          >
            {siteConfig.professionalName} · {siteConfig.coren}
          </motion.p>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...m.transition, delay: 0.1 }}
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-gold/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-soft">
              <img
                src={`${heroImageBase}-800.jpg`}
                srcSet={srcSet}
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt="Profissional de saúde em ambiente clínico moderno e luminoso"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                width={900}
                height={1100}
                fetchPriority="high"
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
