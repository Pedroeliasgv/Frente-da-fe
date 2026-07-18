import { SectionTitle } from '@/components/sections/section-title'
import { VerseCard } from '@/components/sections/verse-card'

export function VerseSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Palavra da Semana"
          title="Uma palavra de inspiração para o seu caminho"
          description="Reflexões que fortalecem a fé e trazem equilíbrio para a semana." 
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <VerseCard
            verse="Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento."
            reference="Provérbios 3:5"
          />
          <div className="rounded-[1.5rem] border border-border bg-surface p-8 shadow-sm">
            <p className="text-lg font-semibold text-text">Essa semana</p>
            <p className="mt-4 text-sm leading-7 text-secondary">Uma palavra de fé para orientar suas decisões e renovar seu propósito.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
