import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { WhatsAppFloatingAction } from '@/components/layout/WhatsAppFloatingAction'

type AppLayoutProps = {
  children: ReactNode
  /** when false, omits the floating action (e.g. minimal view) */
  showWhatsApp?: boolean
}

export function AppLayout({ children, showWhatsApp = true }: AppLayoutProps) {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main id="conteudo-principal" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      {showWhatsApp ? <WhatsAppFloatingAction /> : null}
    </div>
  )
}
