import { motion } from 'framer-motion'
import { Cross, Eye, Heart } from 'lucide-react'
import { SectionTitle } from '@/components/sections/section-title'

const cards = [
  {
    icon: Cross,
    title: 'Missão',
    description:
      'Levar pessoas a conhecerem Jesus, viverem Sua Palavra e experimentarem uma vida transformada.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description:
      'Ser uma igreja relevante, cheia da presença de Deus e comprometida em alcançar vidas.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Amor, honra, excelência, integridade, comunhão e serviço ao Reino de Deus.',
  },
]

export function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-[#101010] py-36 text-white">

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/15 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Nossa Essência"
          title="Tudo o que fazemos começa em Jesus."
          description="Nossa missão, visão e valores refletem aquilo que acreditamos e vivemos diariamente."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >

          {cards.map((item) => {

            const Icon = item.icon

            return (

              <article
                key={item.title}
                className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-red-600 to-red-500 shadow-[0_20px_60px_rgba(255,0,0,.30)]">

                  <Icon size={28} />

                </div>

                <h3 className="mt-10 text-3xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-white/70">

                  {item.description}

                </p>

              </article>

            )

          })}

        </motion.div>

      </div>

    </section>
  )
}