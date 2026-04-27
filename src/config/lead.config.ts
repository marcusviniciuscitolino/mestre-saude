export type LeadProvider = 'brevo' | 'mailchimp' | 'formspree' | 'whatsapp' | 'disabled'

function envString(key: string, fallback = '') {
  const v = import.meta.env[key] as string | undefined
  return typeof v === 'string' ? v : fallback
}

export const leadConfig = {
  provider: (envString('VITE_LEAD_PROVIDER', 'disabled') as LeadProvider) || 'disabled',
  /** Generic POST URL (Formspree, Brevo form action, serverless, etc.) */
  endpoint: envString('VITE_LEAD_ENDPOINT', ''),
  /** Brevo: often form action contains sib-form; Mailchimp: form action URL */
  mailchimpUserId: envString('VITE_MAILCHIMP_USER_ID', ''),
  mailchimpListId: envString('VITE_MAILCHIMP_LIST_ID', ''),
  leadMagnetTitle: 'E-book de anotação de enfermagem (250 modelos)',
  leadMagnetDescription:
    'Receba no e-mail o guia de modelos e um checklist para evolução mais segura e objetiva.',
  successMessage: 'Obrigado! Verifique sua caixa de entrada (e o spam) em instantes.',
  errorMessage: 'Não foi possível enviar agora. Tente pelo WhatsApp ou mais tarde.',
} as const

export function isLeadFormEnabled() {
  if (leadConfig.provider === 'disabled') return false
  if (leadConfig.provider === 'whatsapp') return true
  return Boolean(leadConfig.endpoint)
}
