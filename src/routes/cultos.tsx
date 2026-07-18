import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/cultos')({
  component: function CultosPage() {
    return <PageShell title="Cultos" description="Informações sobre nossos cultos e celebrações." />
  },
})
