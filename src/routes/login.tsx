import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '@/components/common/page-shell'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <PageShell
      title="Login"
      description="Acesse sua conta quando estiver disponível."
    />
  )
}