import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/cn'

export function FinalCtaSection() {
  const m = useSectionMotion()
  return (
    <section
      id="cta-final"
      className="border-b border-border/60 bg-gradient-to-r from-primary via-accent to-sky-600 py-16 text-primary-foreground lg:py-20"
    >
      <Container>
        <motion.div
          className="flex flex-col items-start gap-6 text-left lg:flex-row lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={m.fadeUp}
          transition={m.transition}
        >
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/85">
              <Sparkles className="size-4" aria-hidden />
              Próximo passo
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl">
              Pronto para evoluir clínica e carreira com método?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/90">
              Veja as trilhas com desconto e cursos com certificação — ou fale comigo no WhatsApp.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:justify-end">
            <a href="#trilhas" className={cn(buttonVariants({ size: 'lg' }), 'bg-surface text-primary shadow-lg hover:bg-surface/95')}>
              Ver trilhas
            </a>
            <Button
              size="lg"
              type="button"
              variant="outline"
              className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
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
                'text-primary-foreground/95 hover:bg-primary-foreground/10',
              )}
            >
              Ir ao blog
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
