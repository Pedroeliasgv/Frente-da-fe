import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/common/page-header'

interface PageShellProps {
  title: string
  description: string
}

export function PageShell({ title, description }: PageShellProps) {
  return (
    <main className="min-h-screen bg-background py-10">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-card">
          <div className="mb-8 space-y-4">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Marca
            </div>
            <PageHeader title={title} description={description} />
          </div>
        </div>
      </Container>
    </main>
  )
}
