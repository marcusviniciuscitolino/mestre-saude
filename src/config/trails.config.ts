import type { TrailItem } from '@/types/content'

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
    href: 'https://cursos.aprimorandoenfermagem.com.br/mega-combo-todos-os-cursos-para-voce-se-destacar-no-mercado-de-trabalho-e-nos-processos-seletivos',
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
    href: 'https://cursos.aprimorandoenfermagem.com.br/combo-assistencia-segura-quatro-cursos-com-10-de-desconto',
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
    href: 'https://cursos.aprimorandoenfermagem.com.br/combo-essencial-tres-cursos-e-book-de-anotacao-com-10-de-desconto',
  },
] as const

export function getTrailTitleById(id: string) {
  return trails.find((t) => t.id === id)?.title
}
