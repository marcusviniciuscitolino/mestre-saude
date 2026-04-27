import { AtSign, MessageCircle, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/ui/container'
import { formatMetricNumber, socialPresenceMetrics } from '@/config/social-metrics.config'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { socialLinks } from '@/config/social.config'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const wa = getWhatsAppHref()

  const items = [
    ...socialLinks.filter((s) => s.id !== 'wa'),
    { id: 'wa', label: 'WhatsApp', href: wa } as const,
  ]

  return (
    <footer id="contato" className="border-t border-border/80 bg-surface">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl text-foreground">{siteConfig.title}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs text-muted">
            {siteConfig.professionalName} · {siteConfig.coren}
          </p>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                className="transition hover:text-foreground"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-foreground" href={wa}>
                WhatsApp direto
              </a>
            </li>
            <li>
              <Link to="/blog" className="text-primary transition hover:text-accent">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Redes</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((link) => {
              const Icon =
                link.label === 'Instagram'
                  ? AtSign
                  : link.label === 'YouTube'
                    ? PlayCircle
                    : link.label === 'TikTok'
                      ? Sparkles
                      : MessageCircle
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-2 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-foreground"
                    aria-label={link.label}
                  >
                    <Icon className="size-4 text-primary group-hover:text-accent" />
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Presença</p>
          <p className="mt-3 text-2xl font-semibold text-foreground">
            {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
            {socialPresenceMetrics.totalFollowersSuffix}
            <span className="ml-1 text-sm font-normal text-muted">seguidores</span>
          </p>
        </div>
      </Container>

      <div className="border-t border-border/60 bg-background/60">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.professionalName}. Conteúdo educacional — não substitui
            orientação presencial quando necessário.
          </p>
        </Container>
      </div>
    </footer>
  )
}
