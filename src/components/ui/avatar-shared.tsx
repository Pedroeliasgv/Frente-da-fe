import type { HTMLAttributes, ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function AvatarRoot({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('relative inline-flex h-12 w-12 overflow-hidden rounded-full bg-slate-100', className)} {...props} />
}

export function AvatarImage({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={cn('h-full w-full object-cover', className)} {...props} />
}

export function AvatarFallback({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('flex h-full w-full items-center justify-center bg-slate-200 text-sm font-semibold text-slate-600', className)} {...props} />
}
