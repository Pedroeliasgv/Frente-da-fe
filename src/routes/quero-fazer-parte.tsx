import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/quero-fazer-parte')({
  component: function QueroFazerPartePage() {
    return <PageShell title="Quero Fazer Parte" description="Descubra como se envolver com nossa comunidade." />
  },
})
