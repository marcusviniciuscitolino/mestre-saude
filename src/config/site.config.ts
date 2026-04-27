export const siteConfig = {
  title: 'Mestre em Saúde',
  professionalName: 'Enf. Clairton Marcos Citolino',
  coren: 'COREN 123456 – Região de atuação genérica',
  slogan: 'Mestre em Saúde',
  tagline:
    'Cursos práticos, atualização clínica e orientações para sua carreira em enfermagem — com método, ética e resultados.',
  email: 'contato@exemplo.com',
  /** Apenas dígitos, com DDI (Brasil 55). Ajuste para seu WhatsApp real. */
  whatsappPhone: '5511999999999',
} as const

export function getWhatsAppHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappPhone}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

