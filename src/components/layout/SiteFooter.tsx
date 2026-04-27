import { AtSign, BarChart3, MessageCircle, PlayCircle, Sparkles } from 'lucide-react'

import { Container } from '@/components/ui/container'
import {
  formatMetricNumber,
  socialPresenceMetrics,
} from '@/config/social-metrics.config'
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
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl text-foreground">{siteConfig.title}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 text-xs text-muted">
            {siteConfig.professionalName} · {siteConfig.coren}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contato
            </p>
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
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Redes
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
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

          <div className="sm:col-span-2 xl:col-span-1">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <BarChart3 className="size-3.5" />
              Números das redes
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-border/80 bg-background p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Presença digital
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
                  {socialPresenceMetrics.totalFollowersSuffix}
                </p>
                <p className="text-xs text-muted">seguidores totais</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialPresenceMetrics.channels.map((channel) => (
                  <div
                    key={channel.id}
                    className="rounded-xl border border-border/80 bg-background p-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {formatMetricNumber(channel.followers)}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 rounded-xl border border-border/80 bg-background p-3 text-xs text-muted">
                {socialPresenceMetrics.channels.map((channel) => (
                  <li key={`${channel.id}-90d`} className="space-y-1">
                    <p className="font-medium text-foreground">
                      {channel.label} · {socialPresenceMetrics.engagementWindowLabel}
                    </p>
                    <p>
                      {formatMetricNumber(channel.engagementLast90Days.views)} visualizações ·{' '}
                      {formatMetricNumber(channel.engagementLast90Days.reachedAccounts)} contas
                      alcançadas ·{' '}
                      {formatMetricNumber(channel.engagementLast90Days.interactions)} interações
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border/60 bg-background/60">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.professionalName}. Conteúdo educacional — não substitui
            orientação presencial quando necessário.
          </p>
          <p className="text-muted/90">Construído com React · Vite · TypeScript</p>
        </Container>
      </div>
    </footer>
  )
}
