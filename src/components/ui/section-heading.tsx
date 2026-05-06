import { type HTMLAttributes } from 'react'

import { GoldDivider } from '@/components/ui/decorative'
import { cn } from '@/lib/cn'

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <div className={cn('mb-3 flex items-center gap-3', align === 'center' && 'justify-center')}>
          <GoldDivider />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
          {align === 'center' ? <GoldDivider /> : null}
        </div>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground text-balance sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
