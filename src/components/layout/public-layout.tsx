import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'

interface PublicLayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main className="py-8">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
