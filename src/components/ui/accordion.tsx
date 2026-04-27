/* eslint-disable react-refresh/only-export-components -- Radix primitive re-exports */
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-border/80 py-1', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-4 py-4 text-left font-medium text-foreground transition hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-5 shrink-0 text-gold transition group-data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn('overflow-hidden text-muted', className)}
    {...props}
  >
    <div className="pb-4 pr-2 text-sm leading-relaxed">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName
