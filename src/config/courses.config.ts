import type { CourseItem } from '@/types/content'

/** @todo Apontar `href` para a página real de cada curso no provedor. */
export const courses: readonly CourseItem[] = [
  {
    id: 'curso-protocolos-assistenciais',
    featured: true,
    title: 'Protocolos Assistenciais nos Cuidados de Enfermagem',
    description:
      'Curso que ensina você a dominar os principais protocolos assistenciais da enfermagem, aumentando sua segurança e reduzindo erros no plantão.',
    level: 'Todos os níveis',
    duration: '30 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/protocolos-assistenciais-nos-cuidados-de-enfermagem',
    priceFrom: 'R$ 69,90',
    priceTo: 'R$ 39,90',
    badge: 'novo',
  },
  {
    id: 'curso-anotacao-enfermagem',
    title: 'Anotação de Enfermagem: Registros com Qualidade',
    description:
      'Domine a arte de registrar com segurança, clareza e respaldo legal. Saia do básico ao avançado e garanta anotações éticas, precisas e juridicamente corretas.',
    level: 'Todos os níveis',
    duration: '30 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/anotacao-de-enfermagem-registros-com-qualidade',
    priceFrom: 'R$ 49,90',
    priceTo: 'R$ 29,90',
    bonusNote: 'Ganhe o e-book gratuito: +150 exemplos práticos de anotações',
  },
  {
    id: 'curso-calculo-medicamentos',
    title: 'Cálculo de Medicamentos Para a Enfermagem: Da Matemática à Prescrição Médica',
    description:
      'Domine o cálculo de medicamentos na enfermagem com aulas práticas, direto ao ponto e certificado válido. Comece hoje mesmo!',
    level: 'Todos os níveis',
    duration: '40 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/curso-de-calculo-de-medicamentos-para-a-enfermagem-da-matematica-a-prescricao-medica',
    priceFrom: 'R$ 24,90',
  },
  {
    id: 'ebook-anotacao-exemplos',
    title: 'E-book: Anotação de Enfermagem: Exemplos para Guiar seu Plantão 2ª Edição',
    description:
      'Mais de 250 exemplos prontos de anotações de enfermagem para você registrar com clareza, segurança e respaldo legal em qualquer plantão e setor.',
    level: 'Todos os níveis',
    duration: 'E-book',
    href: 'https://cursos.aprimorandoenfermagem.com.br/anotacao-de-enfermagem-exemplos-para-guiar-seu-plantao',
    priceFrom: 'R$ 44,90',
    priceTo: 'R$ 26,90',
  },
  {
    id: 'curso-seguranca-paciente',
    title: 'Enfermagem na Segurança do Paciente',
    description:
      'Com mais de 6.000 alunos, este curso é um verdadeiro sucesso na área da enfermagem! Aprenda tudo sobre Segurança do Paciente, com linguagem clara e aplicação prática.',
    level: 'Todos os níveis',
    duration: '20 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/enfermagem-e-a-seguranca-do-paciente',
    priceFrom: 'R$ 49,90',
    priceTo: 'R$ 14,90',
  },
  {
    id: 'curso-candidato-contratado',
    title: 'De Candidato a Contratado: Preparatório para Processo Seletivo na Enfermagem',
    description:
      'Destaque-se em entrevistas, dinâmicas e provas de seleção, e aumente suas chances de conquistar a vaga dos seus sonhos na enfermagem.',
    level: 'Todos os níveis',
    duration: '30 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/de-candidato-a-contratado-preparatorio-para-processo-seletivo-na-enfermagem',
    priceFrom: 'R$ 79,90',
    priceTo: 'R$ 39,90',
  },
  {
    id: 'curso-eletrocardiograma',
    title: 'Eletrocardiograma Descomplicado para a Enfermagem',
    description:
      'Destaque-se no trabalho e em processos seletivos com um curso de eletrocardiograma claro, prático e feito especialmente para profissionais de enfermagem.',
    level: 'Todos os níveis',
    duration: '40 h',
    href: 'https://cursos.aprimorandoenfermagem.com.br/curso-de-eletrocardiograma-descomplicado-para-enfermagem',
    priceFrom: 'R$ 129,90',
    priceTo: 'R$ 59,90',
  },
] as const
