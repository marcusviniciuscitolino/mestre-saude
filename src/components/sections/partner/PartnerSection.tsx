import { motion } from 'framer-motion'
import { ArrowRight, Handshake } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { PulseLineBg } from '@/components/ui/decorative'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { fadeUp, gentleTransition } from '@/lib/motion'

const partnerImage = `${import.meta.env.BASE_URL}images/nursing-team-clean.svg`

export function PartnerSection() {
  return (
    <section id="parceiro" className="relative overflow-hidden border-b border-border/50 bg-cream py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.04]" />
      <Container className="relative">
        <motion.div
          className="grid items-center gap-12 overflow-hidden rounded-[2.25rem] border border-gold/30 bg-surface/95 p-8 shadow-soft sm:p-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={gentleTransition}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border/60 shadow-inner">
              <img
                src={partnerImage}
                alt="Equipe de enfermagem colaborando em ambiente hospitalar"
                className="aspect-[5/4] w-full object-cover sm:aspect-[4/3]"
                width={900}
                height={720}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/40 bg-background lg:mx-0">
              <Handshake className="size-7 text-primary" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Seja parceiro</p>
              <h2 className="mt-3 font-display text-[2rem] leading-tight text-foreground sm:text-[2.35rem]">
                Você é profissional da saúde e quer compartilhar conhecimento?
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Se você tem interesse em publicar cursos, participar de lives ou transformar sua
              experiência profissional em conteúdo educativo, conheça como utilizar nossa plataforma
              para alcançar mais alunos e fortalecer sua autoridade na saúde.
            </p>
            <Button
              className="mx-auto lg:mx-0"
              size="lg"
              variant="gold"
              type="button"
              onClick={() => {
                window.location.href = getWhatsAppHref(
                  `Olá, ${siteConfig.professionalName}! Tenho interesse em ser parceiro e publicar cursos ou lives na plataforma.`,
                )
              }}
            >
              Saiba mais
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
