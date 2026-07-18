import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import { SectionTitle } from '@/components/sections/section-title'

export function EventsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          eyebrow="Eventos"
          title="Grandes momentos começam aqui."
          description="Nossa comunidade está preparando experiências especiais para fortalecer a fé, promover comunhão e criar memórias que marcarão vidas."
        />

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-[#FF0000]/15 bg-[#FF0000]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF0000]">
              Em breve
            </span>

            <h3 className="mt-8 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#101010]">
              Estamos preparando algo especial para você.
            </h3>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#666]">
              Em breve anunciaremos conferências, encontros,
              congressos, vigílias e eventos para toda a família.
              Queremos que cada encontro seja uma oportunidade para
              fortalecer sua caminhada com Deus e viver momentos
              inesquecíveis em comunidade.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/quero-fazer-parte"
                className="inline-flex items-center gap-3 rounded-xl bg-[#FF0000] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Quero Conhecer a Igreja

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/cultos"
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-7 py-4 font-semibold text-[#101010] transition hover:border-[#FF0000] hover:text-[#FF0000]"
              >
                Ver horários dos cultos
              </Link>
            </div>

            <div className="mt-16 space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#FF0000]" />

                <span className="text-lg text-[#444]">
                  Conferências
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#FF0000]" />

                <span className="text-lg text-[#444]">
                  Congressos
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#FF0000]" />

                <span className="text-lg text-[#444]">
                  Encontros para famílias
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#FF0000]" />

                <span className="text-lg text-[#444]">
                  Vigílias e celebrações especiais
                </span>
              </div>

            </div>

          </motion.div>
                    {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FF0000]/10">
                <CalendarDays
                  className="text-[#FF0000]"
                  size={42}
                />
              </div>

              <div className="mt-10 text-center">
                <span className="rounded-full bg-[#FF0000]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#FF0000]">
                  Próximo anúncio
                </span>

                <h3 className="mt-6 text-4xl font-semibold tracking-tight text-[#101010]">
                  Nenhum evento divulgado
                </h3>

                <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-[#666]">
                  Nossa equipe está organizando uma agenda especial.
                  Em breve você encontrará aqui todos os próximos
                  eventos da Frente da Fé.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-[#F7F7F7] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#777]">
                    Comunhão
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#101010]">
                    Família
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F7] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#777]">
                    Propósito
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#101010]">
                    Fé
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F7] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#777]">
                    Crescimento
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#101010]">
                    Comunidade
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F7] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#777]">
                    Esperança
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#101010]">
                    Cristo
                  </p>
                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-dashed border-[#FF0000]/20 bg-[#FF0000]/5 p-6 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#FF0000]">
                  Fique ligado
                </p>

                <p className="mt-3 text-[#555] leading-7">
                  Assim que novos eventos forem confirmados, eles
                  aparecerão nesta página com todas as informações
                  para inscrição e participação.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}