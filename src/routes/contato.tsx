import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/contato')({
  component: function ContatoPage() {
    return <PageShell title="Contato" description="Fale conosco e envie sua mensagem." />
  },
})
