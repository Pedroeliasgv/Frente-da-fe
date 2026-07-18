import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-black/6 bg-white p-6 shadow-[0_8px_30px_rgba(16,16,16,0.06)] transition-transform duration-150 hover:-translate-y-0.5',
        className,
      )}
      {...props}
    />
  )
}
