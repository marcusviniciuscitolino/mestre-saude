import { cn } from '@/lib/cn'

type PriceTagProps = {
  className?: string
  fromLabel?: string
  children: string
}

export function PriceTag({ className, fromLabel = 'A partir de', children }: PriceTagProps) {
  return (
    <p className={cn('text-sm', className)}>
      <span className="text-muted">{fromLabel} </span>
      <span className="font-semibold text-primary">{children}</span>
    </p>
  )
}
