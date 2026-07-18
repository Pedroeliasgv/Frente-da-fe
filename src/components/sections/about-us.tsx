import { motion } from 'framer-motion'
import { ArrowRight, HeartHandshake, Users, Sparkles } from 'lucide-react'
import { SectionTitle } from '@/components/sections/section-title'

const stats = [
  {
    value: '15+',
    label: 'Anos transformando vidas',
  },
  {
    value: '300+',
    label: 'Membros ativos',
  },
  {
    value: '1000+',
    label: 'Vidas alcançadas',
  },
]

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Acolhimento',
    description: 'Aqui você encontra uma família pronta para caminhar ao seu lado.',
  },
  {
    icon: Users,
    title: 'Comunhão',
    description: 'Relacionamentos saudáveis que fortalecem a caminhada cristã.',
  },
  {
    icon: Sparkles,
    title: 'Propósito',
    description: 'Ajudamos pessoas a descobrirem e viverem o chamado de Deus.',
  },
]

export function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F7] py-24">

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <SectionTitle
            eyebrow="Quem Somos"
            title="Mais do que uma igreja. Uma família para caminhar com você."
            description="A Frente da Fé nasceu para conectar pessoas a Deus através de uma comunidade saudável, acolhedora e cheia da presença do Espírito Santo."
          />

          <div className="mt-12 space-y-6">

            {pillars.map((item) => {

              const Icon = item.icon

              return (

                <div
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-red-500/20"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#101010]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-neutral-600">
                      {item.description}
                    </p>
                  </div>

                </div>

              )

            })}

          </div>

          <a
            href="/sobre"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-7 py-4 font-semibold text-white shadow-[0_20px_60px_rgba(255,0,0,.25)] transition hover:scale-105"
          >
            Conheça nossa história

            <ArrowRight size={18} />

          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative"
        >

          <img
            src="/images/about.jpg"
            alt="Frente da Fé"
            className="h-[700px] w-full rounded-[28px] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-8 left-8 right-8 rounded-[28px] border border-white/20 bg-white/90 p-8 backdrop-blur-xl shadow-2xl">

            <div className="grid grid-cols-3 gap-6">

              {stats.map((item) => (

                <div key={item.label}>

                  <h2 className="text-4xl font-bold text-red-600">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-neutral-600">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}