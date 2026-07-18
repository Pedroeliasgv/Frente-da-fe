import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/sobre')({
  component: function SobrePage() {
    return <PageShell title="Sobre" description="História e propósito da Frente da Fé em Alphaville." />
  },
})
