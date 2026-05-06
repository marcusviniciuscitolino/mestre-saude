/**
 * Preencha com dados oficiais antes de publicar (COREN, e-mail, WhatsApp, etc.).
 * @see .env.example para variáveis de SEO e formulário.
 */
export const siteConfig = {
  title: 'Mestre em Saúde',
  professionalName: 'Enf. Clairton Marcos Citolino',
  /** Especialidade / registro profissional exibido no site */
  coren: 'Especialista em Cardiopneumologista de Alta Complexidade',
  slogan: 'Mestre em Saúde',
  tagline:
    'Cursos práticos, atualização clínica e orientações para sua carreira em enfermagem — com método, ética e resultados.',
  email: 'contato@exemplo.com',
  /** Apenas dígitos, com DDI (Brasil 55) */
  whatsappPhone: '5511999999999',
} as const

export function getWhatsAppHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappPhone}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

