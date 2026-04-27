import type { NavItem } from '@/types/content'

export const mainNav: readonly NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Meus cursos', href: '#cursos' },
  { label: 'Dicas', href: '#dicas' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
] as const
