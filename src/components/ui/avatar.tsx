import type { HTMLAttributes } from 'react'
import { AvatarImage, AvatarFallback, AvatarRoot } from './avatar-shared'

export function Avatar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <AvatarRoot className={className} {...props}>
      <AvatarImage src="" alt="Avatar" />
      <AvatarFallback>FD</AvatarFallback>
    </AvatarRoot>
  )
}
