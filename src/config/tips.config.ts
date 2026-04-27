import type { TipItem } from '@/types/content'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const tips: readonly TipItem[] = [
  {
    id: 'tip-1',
    title: 'Como estruturar sua evolução de enfermagem em 5 passos',
    excerpt:
      'Um fluxo claro reduz retrabalho, melhora a continuidade do cuidado e fortalece a comunicação com a equipe médica.',
    href: '#dica-1',
    category: 'Documentação',
    imageUrl: publicAsset('images/stethoscope-tools-clean.svg'),
  },
  {
    id: 'tip-2',
    title: 'Hidratação e sinais vitais: o que observar no plantão',
    excerpt:
      'Pequenas mudanças antecipam descompensação. Checklist rápido para sala de emergência e enfermaria.',
    href: '#dica-2',
    category: 'Clínica',
    imageUrl: publicAsset('images/first-aid-kit-clean.svg'),
  },
  {
    id: 'tip-3',
    title: 'Comunicação assertiva na passagem de plantão',
    excerpt:
      'SBAR adaptado, registro objetivo e foco em riscos: menos ruído, mais segurança do paciente.',
    href: '#dica-3',
    category: 'Soft skills',
    imageUrl: publicAsset('images/nurses-shift-clean.svg'),
  },
] as const
