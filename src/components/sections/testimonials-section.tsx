import { SectionTitle } from '@/components/sections/section-title'
import { TestimonialCard } from '@/components/sections/testimonial-card'

const testimonials = [
  {
    quote: 'Um espaço que une fé, design e acolhimento com muita transparência.',
    author: 'Mariana Silva',
    role: 'Membro da comunidade',
  },
  {
    quote: 'Um movimento jovem e sereno que nos trouxe proximidade com Deus.',
    author: 'João Santos',
    role: 'Participante do culto',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Vozes que compartilham experiência e transformação"
          description="Histórias reais de quem encontrou acolhimento e esperança." 
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.author} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
