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
          'sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl',
          scrolled && 'shadow-sm',
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-[4.25rem]">
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src={brandMarkSrc}
              alt=""
              className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
              width={36}
              height={34}
              loading="eager"
              decoding="async"
            />
            <span className="flex flex-col items-start gap-0.5">
              <span className="font-display text-lg tracking-tight text-foreground transition group-hover:text-primary sm:text-xl">
                {siteConfig.title}
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
                {siteConfig.professionalName}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            {mainNav.map((item) => {
              const { to } = navItemToProps(item)
              return (
                <Link
                  key={item.label}
                  to={to}
                  className={cn(
                    'rounded-full px-3 py-2 text-sm transition',
                    isItemActive(item)
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-muted hover:bg-foreground/5 hover:text-foreground',
                  )}
                  aria-current={isItemActive(item) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden lg:inline-flex"
              size="sm"
              variant="default"
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
          className={cn('border-b border-border/60 bg-background lg:hidden', open ? 'block' : 'hidden')}
        >
          <Container className="flex flex-col gap-1 pb-5 pt-2">
            {mainNav.map((item) => {
              const { to } = navItemToProps(item)
              return (
                <Link
                  key={item.label}
                  to={to}
                  className="rounded-2xl px-3 py-3 text-base text-muted hover:bg-foreground/5 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button
              className="mt-2 w-full"
              variant="default"
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
          </Container>
        </div>
      </header>
    </>
  )
}
