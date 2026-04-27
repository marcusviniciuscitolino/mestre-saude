import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type BlogProseProps = {
  children: ReactNode
  className?: string
}

const proseBase =
  'max-w-none space-y-5 text-base leading-relaxed text-muted ' +
  '[&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground ' +
  '[&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground ' +
  '[&_strong]:font-semibold [&_strong]:text-foreground ' +
  '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 ' +
  '[&_a]:font-medium [&_a]:text-primary hover:[&_a]:text-accent ' +
  '[&_p]:leading-relaxed'

export function BlogProse({ children, className }: BlogProseProps) {
  return <div className={cn(proseBase, className)}>{children}</div>
}
