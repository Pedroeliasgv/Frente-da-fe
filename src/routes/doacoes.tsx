import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/doacoes')({
  component: function DoacoesPage() {
    return <PageShell title="Doações" description="Saiba como contribuir com a missão da igreja." />
  },
})
