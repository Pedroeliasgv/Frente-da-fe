import { createFileRoute } from '@tanstack/react-router'
import { AppLogo } from '@/components/common/app-logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/login')({
  component: function LoginPage() {
    return (
      <main className="min-h-screen bg-background py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 sm:px-6">
          <section className="rounded-[2rem] border border-border bg-surface p-8 shadow-card">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <AppLogo />
              <p className="max-w-md text-sm leading-6 text-secondary">
                Acesso seguro ao sistema, com um visual premium e minimalista.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border bg-surface p-8 shadow-card">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-primary">Login</p>
                <h1 className="mt-3 text-3xl font-semibold text-text">Bem-vindo de volta</h1>
                <p className="mt-2 max-w-xl text-base text-secondary">
                  Entre com suas credenciais para acessar o portal administrativo e suas funções.
                </p>
              </div>
              <div className="grid gap-5">
                <Input label="Email" type="email" placeholder="nome@exemplo.com" />
                <Input label="Senha" type="password" placeholder="••••••••" />
                <Button className="w-full">Entrar</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  },
})
