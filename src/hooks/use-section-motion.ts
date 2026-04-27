import { useReducedMotion } from 'framer-motion'
import type { Transition, Variants } from 'framer-motion'

import { fadeUp, gentleTransition, stagger } from '@/lib/motion'

const staticFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const staticStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
}

const instant: Transition = { duration: 0 }

export function useSectionMotion() {
  const reduce = useReducedMotion()
  return {
    fadeUp: reduce ? staticFade : fadeUp,
    stagger: reduce ? staticStagger : stagger,
    transition: reduce ? instant : gentleTransition,
  }
}
