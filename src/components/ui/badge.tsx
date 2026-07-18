import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'muted'
}

export function Badge({ className, variant = 'muted', ...props }: BadgeProps) {
  const styles = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    muted: 'bg-slate-100 text-slate-700',
  }

  return (
    <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-semibold', styles[variant], className)} {...props} />
  )
}
