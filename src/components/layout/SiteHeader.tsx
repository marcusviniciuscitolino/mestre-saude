import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { mainNav } from '@/config/navigation.config'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { cn } from '@/lib/cn'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between lg:h-[4.25rem]">
        <a
          href="#inicio"
          className="group flex flex-col items-start gap-0.5"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-lg tracking-tight text-foreground transition group-hover:text-primary sm:text-xl">
            {siteConfig.title}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
            {siteConfig.professionalName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition hover:bg-foreground/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden lg:inline-flex"
            size="sm"
            variant="default"
            onClick={() => {
              window.location.href = getWhatsAppHref(
                `Olá, ${siteConfig.professionalName}! Vim pelo site "${siteConfig.title}".`,
              )
            }}
            type="button"
          >
            Falar no WhatsApp
          </Button>

          <button
            type="button"
            className="inline-flex rounded-full p-2 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'border-b border-border/60 bg-background lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-1 pb-5 pt-2">
          {mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-3 text-base text-muted hover:bg-foreground/5 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-2 w-full"
            variant="default"
            type="button"
            onClick={() => {
              setOpen(false)
              window.location.href = getWhatsAppHref(
                `Olá, ${siteConfig.professionalName}! Vim pelo site.`,
              )
            }}
          >
            Falar no WhatsApp
          </Button>
        </Container>
      </div>
    </header>
  )
}
