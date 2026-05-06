import { forwardRef, type InputHTMLAttributes, useId } from 'react'

import { cn } from '@/lib/cn'

export type FloatingLabelInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, id, label, placeholder = ' ', ...props }, ref) => {
    const autoId = useId()
    const inputId = id ?? autoId
    return (
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          className={cn(
            'peer block w-full appearance-none rounded-2xl border border-border/80 bg-surface px-4 pb-2.5 pt-6 text-sm text-foreground',
            'placeholder-transparent',
            'focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            'pointer-events-none absolute left-4 z-10 text-muted transition-all duration-[220ms] ease-out',
            'top-1/2 -translate-y-1/2 text-sm',
            'peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:font-semibold peer-focus:text-primary',
            'peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-primary',
          )}
        >
          {label}
        </label>
      </div>
    )
  },
)
FloatingLabelInput.displayName = 'FloatingLabelInput'
