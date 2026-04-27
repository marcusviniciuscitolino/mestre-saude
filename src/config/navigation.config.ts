import type { MainNavItem } from '@/types/navigation'

export const mainNav: readonly MainNavItem[] = [
  { label: 'Início', kind: 'section', id: 'inicio' },
  { label: 'Trilhas', kind: 'section', id: 'trilhas' },
  { label: 'Seja parceiro', kind: 'section', id: 'parceiro' },
  { label: 'Cursos', kind: 'section', id: 'cursos' },
  { label: 'Blog', kind: 'route', to: '/blog' },
  { label: 'FAQ', kind: 'section', id: 'faq' },
] as const

export const homeScrollSpyIds = [
  'inicio',
  'trilhas',
  'cursos',
  'dicas',
  'faq',
  'parceiro',
] as const
