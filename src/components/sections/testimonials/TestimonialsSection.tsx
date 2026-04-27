import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/config/testimonials.config'
import { gentleTransition } from '@/lib/motion'
import { cn } from '@/lib/cn'

const INTERVAL_MS = 7000

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const tick = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(tick, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, tick])

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

        <div className="mt-14 hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex h-full flex-col rounded-3xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8"
            >
              <Quote className="size-8 text-gold/80" aria-hidden />
              <p className="mt-4 flex-1 font-display text-lg leading-relaxed text-foreground sm:text-xl">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-border/60 pt-4 text-sm text-muted">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="mx-2 text-border">·</span>
                <span>{t.role}</span>
              </footer>
            </article>
          ))}
        </div>

        <div
          className="relative mt-14 md:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-surface p-6 shadow-soft sm:p-8">
            <Quote className="mx-auto size-10 text-gold/80 sm:size-12" aria-hidden />
            <div className="relative mt-6 min-h-[9rem] sm:min-h-[8rem]">
              <AnimatePresence mode="wait" initial={false}>
                <TestimonialSlide item={testimonials[index]!} key={testimonials[index]!.id} />
              </AnimatePresence>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition',
                  'hover:border-primary/40 hover:text-primary',
                )}
                aria-label="Depoimento anterior"
                onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
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

function TestimonialSlide({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <motion.blockquote
      key={item.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={gentleTransition}
      className="text-center"
    >
      <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
        “{item.quote}”
      </p>
      <footer className="mt-8 text-sm text-muted">
        <span className="font-medium text-foreground">{item.name}</span>
        <span className="mx-2 text-border">·</span>
        <span>{item.role}</span>
      </footer>
    </motion.blockquote>
  )
}
