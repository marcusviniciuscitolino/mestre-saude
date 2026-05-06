import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { homeScrollSpyIds, mainNav } from '@/config/navigation.config'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import type { MainNavItem } from '@/types/navigation'
import { cn } from '@/lib/cn'

const brandMarkSrc = `${import.meta.env.BASE_URL}favicon.svg`

function navItemToProps(item: MainNavItem) {
  if (item.kind === 'section') {
    return { to: { pathname: '/', hash: item.id } as const, hashId: item.id }
  }
  return { to: item.to, hashId: null as string | null }
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = useMatch({ path: '/', end: true })
  const activeId = useScrollSpy(homeScrollSpyIds, Boolean(isHome))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  function isItemActive(item: MainNavItem) {
    if (item.kind === 'route') {
      if (item.to === '/blog') {
        return location.pathname === '/blog' || location.pathname.startsWith('/blog/')
      }
      return false
    }
    if (!isHome) {
      return false
    }
    if (item.id === 'inicio') {
      return activeId === 'inicio' || !activeId
    }
    return activeId === item.id
  }

  return (
    <>
      <a href="#conteudo-principal" className="skip-to-content">
        Pular para o conteúdo
      </a>
      <header
        className={cn(
          'sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl',
          scrolled && 'shadow-sm shadow-foreground/[0.04]',
        )}
      >
        <Container className="flex h-[4rem] items-center justify-between gap-4 lg:h-[4.75rem] lg:gap-6">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 sm:gap-3.5"
            onClick={() => setOpen(false)}
          >
            <img
              src={brandMarkSrc}
              alt=""
              className="h-[1.85rem] w-[1.85rem] shrink-0 object-contain opacity-95 sm:h-9 sm:w-9"
              width={36}
              height={34}
              loading="eager"
              decoding="async"
            />
            <span className="flex min-w-0 flex-col items-start gap-0.5 leading-tight">
              <span className="truncate font-display text-[1.05rem] tracking-tight text-foreground transition group-hover:text-primary sm:text-[1.125rem]">
                {siteConfig.title}
              </span>
              <span className="max-w-[10rem] truncate text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted sm:max-w-[14rem] sm:text-[0.65rem]">
                {siteConfig.professionalName}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Principal">
            {mainNav.map((item) => {
              const { to } = navItemToProps(item)
              const active = isItemActive(item)
              return (
                <Link
                  key={item.label}
                  to={to}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm transition',
                    active
                      ? 'font-medium text-foreground'
                      : 'text-muted hover:bg-foreground/[0.04] hover:text-foreground',
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0.5 left-1/2 h-[2px] w-9 max-w-[65%] -translate-x-1/2 rounded-full bg-gold transition-opacity duration-[280ms]',
                      active ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-hidden
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
            <span
              className="hidden max-w-[11rem] truncate whitespace-nowrap text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.12em] text-muted xl:inline"
              title="Registro profissional"
            >
              {siteConfig.coren}
            </span>
            <Button
              size="sm"
              variant="default"
              className="shrink-0"
              onClick={() => {
                window.open(
                  getWhatsAppHref(
                    `Olá, ${siteConfig.professionalName}! Vim pelo site "${siteConfig.title}".`,
                  ),
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
              type="button"
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex rounded-full p-2 text-foreground"
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-[opacity,backdrop-filter]',
          open ? 'pointer-events-auto opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-foreground/[0.40] transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          tabIndex={open ? 0 : -1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        />

        <div
          id="mobile-nav-panel"
          className={cn(
            'absolute bottom-0 right-0 top-[4rem] flex w-[min(20rem,calc(100vw-2.5rem))] flex-col gap-6 overflow-y-auto border-l border-border/70 bg-background/98 px-6 py-8 shadow-[-12px_0_40px_rgba(11,31,29,0.12)] backdrop-blur-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col gap-0.5" aria-label="Menu móvel">
            {mainNav.map((item) => {
              const { to } = navItemToProps(item)
              return (
                <Link
                  key={item.label}
                  to={to}
                  className="rounded-xl py-3.5 text-base font-medium text-muted hover:bg-primary/7 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted">
            {siteConfig.coren}
          </p>
          <Button
            variant="default"
            className="w-full"
            type="button"
            onClick={() => {
              setOpen(false)
              window.open(
                getWhatsAppHref(
                  `Olá, ${siteConfig.professionalName}! Vim pelo site.`,
                ),
                '_blank',
              )
            }}
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </>
  )
}
