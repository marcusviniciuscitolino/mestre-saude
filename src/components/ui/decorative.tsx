import { type HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export function GoldDivider({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent', className)}
      aria-hidden
    />
  )
}

type PulseLineBgProps = HTMLAttributes<HTMLDivElement> & {
  /** 0–100 opacity scale for the layered pattern */
  opacityClassName?: string
}

export function PulseLineBg({ className, opacityClassName, ...props }: PulseLineBgProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 bg-pulseline', opacityClassName ?? 'opacity-[0.045]', className)}
      aria-hidden
      {...props}
    />
  )
}
