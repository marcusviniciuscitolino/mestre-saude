import { AtSign, MessageCircle, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { GoldDivider } from '@/components/ui/decorative'
import { Container } from '@/components/ui/container'
import { Stat } from '@/components/ui/stat'
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
    <footer id="contato" className="border-t border-gold/40 bg-footer-ink">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" aria-hidden />

      <Container className="grid gap-14 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="space-y-4 text-gold-soft lg:col-span-5">
          <GoldDivider className="w-14 via-gold-soft" />
          <p className="font-display text-[1.95rem] text-background sm:text-[2.15rem]">{siteConfig.title}</p>
          <p className="max-w-md text-sm leading-relaxed text-gold-soft/85">{siteConfig.tagline}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-gold-soft/70">
            {siteConfig.professionalName}
          </p>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft/80">
            {siteConfig.coren}
          </p>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-soft/90">Contato</p>
          <ul className="mt-5 space-y-3 text-sm text-gold-soft/80">
            <li>
              <a className="transition hover:text-background" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-background" href={wa}>
                WhatsApp direto
              </a>
            </li>
            <li>
              <Link to="/blog" className="text-gold-soft transition hover:text-background">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-soft/90">Redes</p>
          <ul className="mt-5 flex flex-wrap gap-2">
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
                    className="group inline-flex items-center gap-2 rounded-full border border-gold-soft/25 bg-transparent px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gold-soft/85 transition hover:border-gold-soft hover:bg-gold-soft/10 hover:text-background"
                    aria-label={link.label}
                  >
                    <Icon className="size-4 group-hover:text-gold-soft" />
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-12 lg:flex lg:flex-wrap lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-xl space-y-3 border-t border-gold-soft/20 pt-8 lg:flex-1 lg:border-t-0 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-soft/85">Presença</p>
            <Stat
              variant="dark"
              size="lg"
              className="!gap-1"
              value={
                <>
                  {formatMetricNumber(socialPresenceMetrics.totalFollowers)}
                  {socialPresenceMetrics.totalFollowersSuffix}
                </>
              }
              label="seguidores nas redes oficiais"
            />
          </div>
          <div className="mt-8 shrink-0 text-xs uppercase tracking-[0.18em] text-gold-soft/70 lg:mt-0 lg:text-right">
            <p>© {year}</p>
            <p className="mt-1 max-w-xl text-[0.7rem] font-normal lowercase leading-snug tracking-normal normal-case">
              Conteúdo educacional — não substitui orientação presencial quando necessário.
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-gold-soft/15 bg-background/5 py-6">
        <Container className="flex flex-wrap items-center justify-between gap-3 text-[0.7rem] text-gold-soft/70">
          <span>{siteConfig.email}</span>
          <span className="tabular-nums text-gold-soft/60">{year}</span>
        </Container>
      </div>
    </footer>
  )
}
