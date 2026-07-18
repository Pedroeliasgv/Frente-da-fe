import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import { SectionTitle } from '@/components/sections/section-title'

const upcomingServices = [
  {
    day: 'DOMINGO',
    time: '09:00',
    title: 'Culto da Família',
    description:
      'Um culto para toda a família viver um tempo de adoração, palavra e comunhão.',
  },
  {
    day: 'QUARTA',
    time: '20:00',
    title: 'Culto de Ensino',
    description:
      'Uma noite dedicada ao crescimento espiritual através da Palavra de Deus.',
  },
  {
    day: 'SEXTA',
    time: '20:00',
    title: 'Culto de Oração',
    description: 'Uma noite de oração, milagres, cura e fortalecimento da fé.',
  },
]

export function UpcomingServices() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f5] py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FF0000]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Próximos Cultos"
          title="Experiências que renovam"
          description="Cada culto é pensado para fortalecer sua fé com música, palavra e um ambiente elegante e acolhedor."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {upcomingServices.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white/95 p-8 shadow-[0_40px_90px_rgba(16,16,16,0.08)] transition duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_50px_110px_rgba(16,16,16,0.14)]"
            >
              <div className="absolute inset-x-8 top-0 h-24 rounded-3xl bg-gradient-to-b from-[#FF0000]/12 to-transparent opacity-90" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {service.day}
                  </span>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock3 size={18} />
                    <span className="font-semibold">{service.time}</span>
                  </div>
                </div>

                <h3 className="mt-10 text-3xl font-semibold text-text">{service.title}</h3>
                <p className="mt-5 leading-8 text-secondary">{service.description}</p>

                <div className="my-10 h-px bg-black/5" />
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-3xl bg-primary/10 p-3 text-primary shadow-[0_12px_30px_rgba(255,0,0,0.12)]">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Todas as semanas</p>
                      <span className="text-sm text-secondary">Entrada gratuita</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-3xl bg-primary/10 p-3 text-primary shadow-[0_12px_30px_rgba(255,0,0,0.12)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Alphaville</p>
                      <span className="text-sm text-secondary">Alameda Grajaú, 129</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/contato"
                  className="mt-10 inline-flex items-center gap-2 font-semibold text-primary transition duration-300 group-hover:gap-3"
                >
                  Planejar minha visita
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}