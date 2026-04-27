import type { TrailItem } from '@/types/content'

/** @todo Trocar URLs `exemplo.com` pelas páginas reais de checkout. */

const enrollmentNote = 'Todos com certificado'

export const trails: readonly TrailItem[] = [
  {
    id: 'mega-combo-enfermagem',
    title: 'Mega Combo Enfermagem',
    subtitle: `Cinco cursos + e-book de anotação com 15% de desconto. ${enrollmentNote}.`,
    discount: '15% de desconto',
    courses: [
      'Enfermagem na Segurança do Paciente',
      'Anotação de Enfermagem: Registros com Qualidade + e-book com 250 modelos de anotações',
      'Cálculo de medicamentos para a enfermagem',
      'Eletrocardiograma Descomplicado para Enfermagem',
      'Candidato a Contratado: Preparatório para Processo Seletivo na Enfermagem',
    ],
    priceFrom: 'R$169,50',
    priceTo: 'R$144,00',
    href: 'https://exemplo.com/trilhas/mega-combo-enfermagem',
    popular: true,
    bestSeller: true,
  },
  {
    id: 'combo-assistencia-segura',
    title: 'Combo Assistência Segura',
    subtitle: `Quatro cursos + e-book de anotação com 10% de desconto. ${enrollmentNote}.`,
    discount: '10% de desconto',
    courses: [
      'Enfermagem na Segurança do Paciente',
      'Anotação de Enfermagem: Registros com Qualidade + e-book com 250 modelos de anotações',
      'Cálculo de medicamentos para a enfermagem',
      'Eletrocardiograma Descomplicado para Enfermagem',
    ],
    priceFrom: 'R$129,60',
    priceTo: 'R$116,00',
    href: 'https://exemplo.com/trilhas/combo-assistencia-segura',
  },
  {
    id: 'combo-essencial',
    title: 'Combo Essencial',
    subtitle: `Três cursos + e-book de anotação com 10% de desconto. ${enrollmentNote}.`,
    discount: '10% de desconto',
    courses: [
      'Enfermagem na Segurança do Paciente',
      'Anotação de Enfermagem: Registros com Qualidade + e-book com 250 modelos de anotações',
      'Cálculo de medicamentos para a enfermagem',
    ],
    priceFrom: 'R$68,80',
    priceTo: 'R$61,00',
    href: 'https://exemplo.com/trilhas/combo-essencial',
  },
] as const

export function getTrailTitleById(id: string) {
  return trails.find((t) => t.id === id)?.title
}
