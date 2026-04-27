import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { cn } from '@/lib/cn'

export function WhatsAppFloatingAction() {
  const [hide, setHide] = useState(false)
  const href = getWhatsAppHref(
    `Olá, ${siteConfig.professionalName}! Vim pelo site "${siteConfig.title}".`,
  )

  useEffect(() => {
    const el = document.getElementById('cta-final')
    if (!el) return
    const o = new IntersectionObserver(
      (entries) => {
        setHide(Boolean(entries[0]?.isIntersecting))
      },
      { root: null, rootMargin: '0px', threshold: 0.12 },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])

  if (hide) {
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition',
        'hover:bg-primary/90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'sm:bottom-8 sm:right-8',
      )}
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  )
}
