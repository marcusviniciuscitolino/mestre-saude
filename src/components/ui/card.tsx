import { cva, type VariantProps } from 'class-variance-authority'
import { type HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

const cardVariants = cva('rounded-3xl border shadow-card transition', {
  variants: {
    variant: {
      default: 'border-border/80 bg-surface p-6',
      elevated: 'border-border/60 bg-surface p-6 shadow-soft',
      'gold-trim': 'border-border/75 border-t-[3px] border-t-gold bg-surface p-6 pt-[calc(theme(spacing[6])+1px)]',
      dark: 'border-foreground/20 bg-footer-ink text-primary-foreground p-6',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-3 space-y-1', className)} {...props} />
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-display text-xl text-foreground sm:text-2xl', className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-relaxed text-muted', className)} {...props} />
}
