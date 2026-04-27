import type { CourseItem } from '@/types/content'

/** @todo Apontar `href` para a página real de cada curso no provedor. */
export const courses: readonly CourseItem[] = [
  {
    id: 'curso-1',
    title: 'Enfermagem em UTI — Fundamentos Avançados',
    description:
      'Protocolos, monitorização não invasiva e tomada de decisão com segurança em ambiente crítico.',
    level: 'Intermediário',
    duration: '40 h',
    href: 'https://exemplo.com/curso-uti',
    priceFrom: 'R$ 197,00',
    badge: 'mais-procurado',
    trailId: 'mega-combo-enfermagem',
  },
  {
    id: 'curso-2',
    title: 'Urgência e Emergência — Atualização Clínica',
    description:
      'Triagem, estabilização e comunicação eficaz em alta demanda e sob pressão.',
    level: 'Todos os níveis',
    duration: '24 h',
    href: 'https://exemplo.com/curso-urgencia',
    priceFrom: 'R$ 149,00',
    trailId: 'combo-assistencia-segura',
  },
  {
    id: 'curso-3',
    title: 'Gestão e Liderança para Enfermeiros',
    description:
      'Organização de equipes, indicadores e liderança situacional no cotidiano hospitalar.',
    level: 'Avançado',
    duration: '16 h',
    href: 'https://exemplo.com/curso-gestao',
    priceFrom: 'R$ 129,00',
    badge: 'novo',
  },
] as const
