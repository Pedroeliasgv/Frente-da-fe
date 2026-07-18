import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
}

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-white p-10 text-center shadow-card">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.32em] text-primary">Próxima etapa</p>
        <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
        <p className="mx-auto max-w-xl text-base leading-7 text-secondary">{description}</p>
        <Button className="mx-auto">Quero Fazer Parte</Button>
      </div>
    </section>
  )
}
