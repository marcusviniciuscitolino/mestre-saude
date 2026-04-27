import type { To } from 'react-router-dom'

export type MainNavItem =
  | { label: string; kind: 'section'; id: string }
  | { label: string; kind: 'route'; to: To }
