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
    <section className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          eyebrow="Nossa Essência"
          title="Tudo o que fazemos começa em Jesus."
          description="Nossa missão, visão e valores refletem aquilo que acreditamos e vivemos diariamente."
        />

        <div className="mt-24 grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="rounded-full bg-[#FF0000]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF0000]">
              Nossa identidade
            </span>

            <h3 className="mt-8 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#101010]">
              Uma igreja construída sobre o Evangelho de Cristo.
            </h3>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#666]">
              Existimos para anunciar Jesus, formar discípulos e servir
              pessoas. Tudo o que fazemos é guiado pela Palavra de Deus,
              buscando excelência, comunhão e uma vida cheia da presença
              do Espírito Santo.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">

              <div>
                <h4 className="text-4xl font-semibold text-[#101010]">
                  Cristo
                </h4>

                <p className="mt-2 text-sm text-[#666]">
                  Nosso fundamento.
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-semibold text-[#101010]">
                  Bíblia
                </h4>

                <p className="mt-2 text-sm text-[#666]">
                  Nossa direção.
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-semibold text-[#101010]">
                  Pessoas
                </h4>

                <p className="mt-2 text-sm text-[#666]">
                  Nossa missão.
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-6"
          >
                        {cards.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                  className="group rounded-[32px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0000]/20 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF0000]/10 transition-colors duration-300 group-hover:bg-[#FF0000]">

                      <Icon
                        size={28}
                        className="text-[#FF0000] transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#999]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-tight text-[#101010]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#666]">
                    {item.description}
                  </p>
                </motion.article>
              )
            })}

          </motion.div>

        </div>

      </div>

    </section>
  )
}