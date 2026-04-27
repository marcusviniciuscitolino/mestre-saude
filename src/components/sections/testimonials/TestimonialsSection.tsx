import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/config/testimonials.config'
import { gentleTransition } from '@/lib/motion'
import { cn } from '@/lib/cn'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  const current = testimonials[index]!

  return (
    <section
      id="depoimentos"
      className="border-b border-border/60 bg-gradient-to-b from-background to-primary/5 py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Confiança"
          title="Depoimentos"
          description="Resultados reais de profissionais que aplicaram o método no dia a dia."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-surface p-8 shadow-soft sm:p-12">
            <Quote
              className="mx-auto size-10 text-gold/80 sm:size-12"
              aria-hidden
            />

            <div className="relative mt-8 min-h-[9rem] sm:min-h-[8rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={gentleTransition}
                  className="text-center"
                >
                  <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                    “{current.quote}”
                  </p>
                  <footer className="mt-8 text-sm text-muted">
                    <span className="font-medium text-foreground">{current.name}</span>
                    <span className="mx-2 text-border">·</span>
                    <span>{current.role}</span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition',
                  'hover:border-primary/40 hover:text-primary',
                )}
                aria-label="Depoimento anterior"
                onClick={() =>
                  setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                }
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Ir para depoimento ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2.5 rounded-full transition-all',
                      i === index ? 'w-9 bg-primary' : 'w-2.5 bg-border',
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition',
                  'hover:border-primary/40 hover:text-primary',
                )}
                aria-label="Próximo depoimento"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
