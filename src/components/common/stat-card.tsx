import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string
  description?: string
}

export function StatCard({ label, value, description, className, ...props }: StatCardProps) {
  return (
    <div className={cn('rounded-2xl border border-border bg-card p-5 shadow-card', className)} {...props}>
      <p className="text-sm font-semibold text-secondary">{label}</p>
      <p className="mt-3 text-3xl font-bold text-text">{value}</p>
      {description ? <p className="mt-2 text-sm text-secondary">{description}</p> : null}
    </div>
  )
}
