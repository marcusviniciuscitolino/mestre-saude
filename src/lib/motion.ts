import type { Transition, Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const gentleTransition: Transition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
}
