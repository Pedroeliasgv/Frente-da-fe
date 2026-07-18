import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/eventos')({
  component: function EventosPage() {
    return <PageShell title="Eventos" description="Agenda de eventos e programação da igreja." />
  },
})
