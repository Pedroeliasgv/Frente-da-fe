import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'

interface PortalLayoutProps {
  children: ReactNode
}

export function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="lg:flex lg:min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-background">
          <Topbar />
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  )
}
