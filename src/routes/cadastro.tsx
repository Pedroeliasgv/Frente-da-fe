import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/cadastro')({
  component: function CadastroPage() {
    return (
      <PageShell
        title="Cadastro"
        description="Crie sua conta em breve."
      />
    )
  },
})