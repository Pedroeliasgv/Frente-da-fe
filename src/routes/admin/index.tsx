import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/admin/')({
  component: function AdminPage() {
    return <PageShell title="Admin" description="Área administrativa da aplicação." />
  },
})
