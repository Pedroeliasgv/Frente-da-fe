import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export function EmptyState({ title, description, className, ...props }: EmptyStateProps) {
  return (
    <div className={cn('rounded-2xl border border-border bg-slate-50 p-8 text-center', className)} {...props}>
      <p className="text-xl font-semibold text-text">{title}</p>
      <p className="mt-2 text-sm text-secondary">{description}</p>
    </div>
  )
}
