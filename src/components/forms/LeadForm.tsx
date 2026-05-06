import { useId, useState } from 'react'

import { Button } from '@/components/ui/button'
import { FloatingLabelInput } from '@/components/ui/floating-label-input'
import { leadConfig, isLeadFormEnabled } from '@/config/lead.config'
import { getWhatsAppHref, siteConfig } from '@/config/site.config'
import { pushDataLayerEvent } from '@/lib/analytics'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm() {
  const honeypotId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const provider = leadConfig.provider

  if (provider === 'disabled') {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 bg-background/50 p-6 text-center text-sm text-muted">
        <p>Para receber o material, fale conosco pelo WhatsApp.</p>
        <Button
          className="mt-4 w-full sm:w-auto"
          type="button"
          onClick={() => {
            window.open(
              getWhatsAppHref(
                `Olá, ${siteConfig.professionalName}! Gostaria do e-book: ${leadConfig.leadMagnetTitle}.`,
              ),
              '_blank',
            )
            pushDataLayerEvent('lead_whatsapp_fallback')
          }}
        >
          Falar no WhatsApp
        </Button>
      </div>
    )
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const hp = (form.elements.namedItem('company') as HTMLInputElement)?.value
    if (hp) {
      return
    }

    if (!isLeadFormEnabled()) {
      setMessage(leadConfig.errorMessage)
      setStatus('error')
      return
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Digite um e-mail válido.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      if (provider === 'whatsapp') {
        const text = `Olá, ${siteConfig.professionalName}! Quero o material: *${leadConfig.leadMagnetTitle}*. Nome: ${name || '—'}. E-mail: ${email}.`
        window.open(getWhatsAppHref(text), '_blank', 'noopener,noreferrer')
        setStatus('success')
        setMessage(leadConfig.successMessage)
        pushDataLayerEvent('lead_submit', { method: 'whatsapp' })
        return
      }

      if (!leadConfig.endpoint) {
        throw new Error('missing endpoint')
      }

      if (provider === 'formspree' || provider === 'brevo' || provider === 'mailchimp') {
        const res = await fetch(leadConfig.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email,
            name: name || undefined,
            _subject: `Lead: ${leadConfig.leadMagnetTitle}`,
            source: 'mestre-saude-site',
            provider,
          }),
        })
        if (!res.ok) {
          const errData = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(errData.error || res.statusText)
        }
        setStatus('success')
        setMessage(leadConfig.successMessage)
        pushDataLayerEvent('lead_submit', { method: provider })
        setName('')
        setEmail('')
        return
      }
    } catch {
      setStatus('error')
      setMessage(leadConfig.errorMessage)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <p className="text-xs leading-relaxed text-muted">{leadConfig.leadMagnetDescription}</p>
      <FloatingLabelInput
        id="lead-name"
        name="name"
        label="Nome (opcional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        disabled={status === 'loading' || status === 'success'}
      />
      <FloatingLabelInput
        id="lead-email"
        name="email"
        type="email"
        required
        label="E-mail profissional"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        disabled={status === 'loading' || status === 'success'}
      />
      <div className="hidden" aria-hidden>
        <label htmlFor={honeypotId}>Company</label>
        <input id={honeypotId} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === 'error' ? <p className="text-sm text-red-600">{message}</p> : null}
      {status === 'success' ? (
        <p className="text-sm font-medium text-primary" role="status">
          {message || leadConfig.successMessage}
        </p>
      ) : null}
      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full"
        disabled={status === 'loading' || status === 'success'}
      >
        {status === 'loading' ? 'Enviando…' : provider === 'whatsapp' ? 'Receber no WhatsApp' : 'Quero o material grátis'}
      </Button>
    </form>
  )
}
