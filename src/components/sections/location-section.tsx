import { SectionTitle } from '@/components/sections/section-title'
import { Map } from '@/components/sections/map'

export function LocationSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Localização"
          title="Venha nos visitar em Alphaville"
          description="Nosso espaço foi concebido para ser acolhedor, acessível e bem integrado à cidade." 
        />
        <div className="mt-12">
          <Map />
        </div>
      </div>
    </section>
  )
}
