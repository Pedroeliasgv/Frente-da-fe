import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
}

export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <header className={cn('space-y-2 py-8', className)} {...props}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Frente da Fé</p>
      <h1 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h1>
      <p className="max-w-3xl text-base text-secondary">{description}</p>
    </header>
  )
}
