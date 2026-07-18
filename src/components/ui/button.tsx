import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const styles = {
      primary: 'border-transparent bg-primary text-white hover:bg-primary-hover',
      secondary: 'bg-white text-text border border-black/10 hover:bg-slate-50',
      ghost: 'bg-transparent text-text border border-white/20 hover:bg-white/10 hover:text-primary focus-visible:ring-white/20',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          styles[variant],
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
