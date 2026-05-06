import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md hover:bg-primary/92 active:scale-[0.98]',
        outline:
          'border border-primary/30 bg-surface/80 text-primary backdrop-blur hover:border-primary hover:bg-primary/5',
        ghost: 'text-muted hover:bg-foreground/5 hover:text-foreground',
        gold:
          'border border-gold/45 bg-surface text-foreground shadow-sm transition-[box-shadow,border-color,transform] hover:border-gold hover:shadow-glow-gold active:scale-[0.985]',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-[1.025rem]',
        icon: 'h-10 w-10 rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
