import type { MainNavItem } from '@/types/navigation'

export const mainNav: readonly MainNavItem[] = [
  { label: 'Início', kind: 'section', id: 'inicio' },
  { label: 'Trilhas', kind: 'section', id: 'trilhas' },
  { label: 'Cursos', kind: 'section', id: 'cursos' },
  { label: 'Blog', kind: 'route', to: '/blog' },
  { label: 'FAQ', kind: 'section', id: 'faq' },
  { label: 'Seja parceiro', kind: 'section', id: 'parceiro' },
] as const

export const homeScrollSpyIds = [
  'inicio',
  'trilhas',
  'cursos',
  'dicas',
  'faq',
  'parceiro',
] as const
