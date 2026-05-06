import { type ReactNode } from 'react'

import { cn } from '@/lib/cn'

type StatProps = {
  value: ReactNode
  label: string
  description?: string
  icon?: ReactNode
  variant?: 'default' | 'minimal' | 'dark' | 'inverse'
  size?: 'md' | 'lg' | 'sm'
  className?: string
}

const variantRoot: Record<NonNullable<StatProps['variant']>, string> = {
  default: 'text-foreground',
  minimal: 'text-foreground',
  dark: '',
  inverse: '',
}

export function Stat({
  value,
  label,
  description,
  icon,
  variant = 'default',
  size = 'md',
  className,
}: StatProps) {
  const muted =
    variant === 'dark'
      ? 'text-gold-soft/85'
      : variant === 'inverse'
        ? 'text-primary-foreground/85'
        : 'text-muted'

  const valueCls =
    size === 'lg'
      ? 'font-display text-3xl tabular-nums tracking-tight sm:text-4xl'
      : size === 'sm'
        ? 'font-display text-xl tabular-nums tracking-tight sm:text-2xl'
        : 'font-display text-2xl tabular-nums tracking-tight sm:text-3xl'

  const valueColor =
    variant === 'dark' ? 'text-gold-soft' : variant === 'inverse' ? 'text-primary-foreground' : ''

  const lineVia =
    variant === 'dark' || variant === 'inverse'
      ? 'via-primary-foreground/35'
      : 'via-gold/55'

  const iconTone =
    variant === 'dark' || variant === 'inverse' ? 'text-gold-soft' : 'text-gold'

  return (
    <div className={cn('flex flex-col gap-2', variantRoot[variant], className)}>
      {icon ? <div className={iconTone}>{icon}</div> : null}
      <div
        className={cn(
          'h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-transparent sm:w-14',
          lineVia,
        )}
        aria-hidden
      />
      <div className={cn(valueCls, valueColor)}>{value}</div>
      <p className={cn('text-[0.65rem] font-semibold uppercase tracking-[0.22em]', muted)}>
        {label}
      </p>
      {description ? <p className={cn('text-xs leading-snug', muted)}>{description}</p> : null}
    </div>
  )
}
