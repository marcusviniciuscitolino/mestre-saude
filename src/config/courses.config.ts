import type { CourseItem } from '@/types/content'

/** Nomes e links genéricos — substitua quando tiver URLs reais. */
export const courses: readonly CourseItem[] = [
  {
    id: 'curso-1',
    title: 'Enfermagem em UTI — Fundamentos Avançados',
    description:
      'Protocolos, monitorização não invasiva e tomada de decisão com segurança em ambiente crítico.',
    level: 'Intermediário',
    duration: '40 h',
    href: 'https://exemplo.com/curso-uti',
  },
  {
    id: 'curso-2',
    title: 'Urgência e Emergência — Atualização Clínica',
    description:
      'Triagem, estabilização e comunicação eficaz em alta demanda e sob pressão.',
    level: 'Todos os níveis',
    duration: '24 h',
    href: 'https://exemplo.com/curso-urgencia',
  },
  {
    id: 'curso-3',
    title: 'Gestão e Liderança para Enfermeiros',
    description:
      'Organização de equipes, indicadores e liderança situacional no cotidiano hospitalar.',
    level: 'Avançado',
    duration: '16 h',
    href: 'https://exemplo.com/curso-gestao',
  },
] as const
