import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Content({ children, className, ...props }: ContentProps) {
  return (
    <div className={cn('flex-1 py-8', className)} {...props}>
      {children}
    </div>
  )
}
