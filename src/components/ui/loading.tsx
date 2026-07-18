import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Loading({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-center', className)} {...props}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}
