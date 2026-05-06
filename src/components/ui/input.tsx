import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-2xl border border-border/80 bg-surface px-4 text-sm text-foreground',
          'placeholder:text-muted/80',
          'focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/35',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'
