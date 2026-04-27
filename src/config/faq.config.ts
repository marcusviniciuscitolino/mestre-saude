import type { FaqItem } from '@/types/content'

export const faqItems: readonly FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Os cursos têm certificado?',
    answer:
      'Sim. Ao concluir as atividades e critérios de aprovação, você recebe certificado digital com carga horária correspondente.',
  },
  {
    id: 'faq-2',
    question: 'Como acesso o conteúdo depois da compra?',
    answer:
      'Você recebe acesso por e-mail à área do aluno (plataforma indicada na página de cada curso). O acesso segue as regras de cada produto (ex.: prazo de reprodução das aulas).',
  },
  {
    id: 'faq-3',
    question: 'Serve para quem está começando na enfermagem?',
    answer:
      'Há trilhas com níveis distintos. Confira a descrição de cada curso: indicamos público-alvo, pré-requisitos e objetivos de aprendizagem.',
  },
  {
    id: 'faq-4',
    question: 'Posso tirar dúvidas diretamente com o enfermeiro?',
    answer:
      'Canais oficiais: WhatsApp, Instagram e e-mail listados nesta página. Horários e política de resposta podem variar; mensagens objetivas são respondidas mais rápido.',
  },
] as const
