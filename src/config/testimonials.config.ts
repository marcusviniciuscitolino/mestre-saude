import type { TestimonialItem } from '@/types/content'

export const testimonials: readonly TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Ana Paula M.',
    role: 'Enfermeira — UTI',
    quote:
      'Conteúdo direto ao ponto. Os roteiros de evolução e segurança do paciente mudaram minha rotina no plantão.',
  },
  {
    id: 't-2',
    name: 'Ricardo L.',
    role: 'Enfermeiro — Emergência',
    quote:
      'A didática é clara e aplicável no mesmo dia. Recomendo para quem quer subir o nível sem enrolação.',
  },
  {
    id: 't-3',
    name: 'Marina K.',
    role: 'Supervisora de enfermagem',
    quote:
      'Conseguimos padronizar passagem de plantão e indicadores com base no que aprendi aqui. Excelente custo-benefício.',
  },
] as const
