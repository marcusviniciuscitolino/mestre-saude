import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { GoldDivider, PulseLineBg } from '@/components/ui/decorative'
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
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-cream/80 via-background to-surface"
    >
      <PulseLineBg className="opacity-[0.055]" />
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-[0.28]',
          '[background-image:radial-gradient(circle_at_18%_22%,rgba(14,142,138,0.16),transparent_48%),radial-gradient(circle_at_88%_8%,rgba(184,148,90,0.15),transparent_42%)]',
        )}
        aria-hidden
      />

      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-16 lg:py-24 xl:gap-20">
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={reduce ? m.fadeUp : stagger}
        >
          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className="flex flex-wrap items-center gap-3"
          >
            <ShieldCheck className="size-5 text-gold" aria-hidden />
            <GoldDivider />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary">
              Enfermagem · Educação · Clínica
            </p>
          </motion.div>

          <motion.h1
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-7 font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-foreground text-balance sm:text-[2.85rem] lg:text-[3.15rem] xl:text-[3.35rem]"
          >
            Acelere sua carreira em enfermagem com método validado por centenas de milhares de
            profissionais
          </motion.h1>

          <GoldDivider className="mt-8 w-16 max-w-[33%] via-gold sm:mt-9" />

          <motion.p
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={m.fadeUp}
            transition={m.transition}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to={{ pathname: '/', hash: 'trilhas' }} className={cn(buttonVariants({ size: 'xl', variant: 'default' }))}>
              Ver trilhas
              <ArrowRight className="size-[1.05rem]" aria-hidden />
            </Link>
            <Link
              to={{ pathname: '/', hash: 'parceiro' }}
              className={cn(buttonVariants({ size: 'xl', variant: 'outline' }), 'hidden sm:inline-flex')}
            >
              Seja parceiro
            </Link>
            <button
              type="button"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline sm:ml-2"
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
              <ChevronRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...m.transition, delay: 0.12, duration: 0.45 }}
        >
          <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.75rem] bg-gradient-to-br from-gold/35 via-primary/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/35 bg-surface p-1 shadow-soft">
              <div className="overflow-hidden rounded-[2.2rem] border border-border/50">
                <img
                  src={`${heroImageBase}-800.jpg`}
                  srcSet={srcSet}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  alt="Profissional de saúde em ambiente clínico moderno e luminoso"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  width={900}
                  height={1100}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-gold/35 bg-surface/96 p-5 shadow-card backdrop-blur-md sm:left-10 sm:right-10">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
              <p className="mt-4 font-display text-lg text-foreground">Enfermeiro · Mestre em Ciências</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Excelência no cuidado
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Protocolos atuais, ética e comunicação clara — do plantão à gestão.
              </p>
              <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {siteConfig.coren}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
