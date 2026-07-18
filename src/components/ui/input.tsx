import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ className, label, ...props }: InputProps) {
  return (
    <div className={cn('grid gap-2', className)}>
      {label ? <label className="text-sm font-semibold text-secondary">{label}</label> : null}
      <input
        className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        {...props}
      />
    </div>
  )
}
