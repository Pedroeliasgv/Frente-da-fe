import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/portal/')({
  component: function PortalPage() {
    return <PageShell title="Portal" description="Área do portal da Frente da Fé em Alphaville." />
  },
})
