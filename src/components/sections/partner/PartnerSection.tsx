import { motion } from 'framer-motion'
import { ArrowRight, Handshake } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { fadeUp, gentleTransition } from '@/lib/motion'

export function PartnerSection() {
  return (
    <section id="parceiro" className="border-b border-border/60 bg-primary/5 py-20 lg:py-28">
      <Container>
        <motion.div
          className="mx-auto max-w-4xl rounded-[2rem] border border-primary/15 bg-surface p-8 text-center shadow-soft sm:p-10 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={gentleTransition}
        >
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Handshake className="size-7" aria-hidden />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Seja parceiro
          </p>

          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Você é profissional da saúde e quer compartilhar conhecimento?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Se você tem interesse em publicar cursos, participar de lives ou transformar sua
            experiência profissional em conteúdo educativo, conheça como utilizar nossa plataforma
            para alcançar mais alunos e fortalecer sua autoridade na saúde.
          </p>

          <Button
            className="mt-8"
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
        </motion.div>
      </Container>
    </section>
  )
}
