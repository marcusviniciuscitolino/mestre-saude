import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/config/testimonials.config'
import { siteConfig } from '@/config/site.config'
import { gentleTransition } from '@/lib/motion'
import { cn } from '@/lib/cn'

const INTERVAL_MS = 9000

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0]
  const last = parts[parts.length - 1]?.[0]
  return `${first ?? '?'}${last && last !== first ? last : ''}`.toUpperCase()
}

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
      className="border-b border-border/50 bg-gradient-to-b from-background via-background to-primary/8 py-20 lg:py-28"
    >
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Confiança"
            title="Depoimentos"
            description="Resultados reais de profissionais que aplicaram o método no dia a dia."
            className="!mx-0 max-w-2xl"
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            <span className="flex gap-0.5 text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold/80" />
              ))}
            </span>
            Avaliação dos alunos
          </div>
        </div>

        <div className="mt-16 hidden grid-cols-1 gap-8 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex h-full flex-col rounded-[2rem] border border-border/70 bg-surface p-8 shadow-card"
            >
              <header className="flex items-center gap-4">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt=""
                    className="size-14 rounded-full border-2 border-gold/50 object-cover"
                    width={56}
                    height={56}
                  />
                ) : (
                  <span className="flex size-14 items-center justify-center rounded-full border-2 border-gold/60 bg-gold-soft/40 font-display text-lg text-primary">
                    {initialsFromName(t.name)}
                  </span>
                )}
                <div>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    {siteConfig.coren.split('–')[0]?.trim() ?? 'COREN'}
                  </p>
                </div>
              </header>
              <Quote className="mt-6 size-8 text-gold/70" aria-hidden />
              <p className="mt-4 flex-1 font-display text-lg leading-relaxed text-foreground sm:text-xl">
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>

        <div
          className="relative mt-16 md:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-surface p-8 shadow-soft sm:p-10">
            <div className="flex flex-col items-center gap-4 text-center">
              {testimonials[index]!.avatarUrl ? (
                <img
                  src={testimonials[index]!.avatarUrl}
                  alt=""
                  className="size-16 rounded-full border-2 border-gold/55 object-cover"
                  width={64}
                  height={64}
                />
              ) : (
                <span className="flex size-16 items-center justify-center rounded-full border-2 border-gold/60 bg-gold-soft/45 font-display text-2xl text-primary">
                  {initialsFromName(testimonials[index]!.name)}
                </span>
              )}
              <div>
                <p className="font-medium text-foreground">{testimonials[index]!.name}</p>
                <p className="text-sm text-muted">{testimonials[index]!.role}</p>
                <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {siteConfig.coren.split('–')[0]?.trim() ?? 'COREN'}
                </p>
              </div>
            </div>
            <Quote className="mx-auto mt-6 size-10 text-gold/75 sm:size-12" aria-hidden />
            <div className="relative mt-6 min-h-[9rem] sm:min-h-[8rem]">
              <AnimatePresence mode="wait" initial={false}>
                <TestimonialSlide item={testimonials[index]!} key={testimonials[index]!.id} />
              </AnimatePresence>
            </div>
            <div className="mt-9 flex items-center justify-center gap-4">
              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition duration-[320ms]',
                  'hover:border-gold hover:text-primary',
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
                      'h-2.5 rounded-full transition-all duration-[320ms]',
                      i === index ? 'w-9 bg-gold' : 'w-2.5 bg-border hover:bg-gold/40',
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition duration-[320ms]',
                  'hover:border-gold hover:text-primary',
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
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ ...gentleTransition, duration: 0.45 }}
      className="text-center"
    >
      <p className="font-display text-[1.35rem] leading-relaxed text-foreground sm:text-2xl">
        “{item.quote}”
      </p>
    </motion.blockquote>
  )
}
