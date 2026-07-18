import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import heroImage from '@/assets/images/hero_image.png'

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Culto Frente da Fé"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-40 pb-24 lg:px-8 lg:pt-44">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-xl"
          >
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/80">
              Frente da Fé • Alphaville
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Um lugar para
              <br />
              encontrar Deus,
              <br />
              família e propósito.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
              Mais do que uma igreja, uma família para viver o propósito de
              Deus. Um ambiente preparado para receber você e sua família com
              amor, excelência e a presença do Espírito Santo.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/quero-fazer-parte"
              className="inline-flex items-center gap-3 rounded-xl bg-[#FF0000] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#d80000]"
            >
              Quero Fazer Parte
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/cultos"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              Planejar minha visita
            </Link>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-14 grid gap-4 md:grid-cols-2"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <CalendarDays className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Culto da Família
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  Domingo • 09:00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Estamos em
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  Alameda Grajaú, 129
                </p>

                <p className="text-sm text-white/70">
                  Alphaville • Barueri
                </p>
              </div>
            </div>
          </motion.div>
                    {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF0000]" />
              Ambiente para toda a família
            </div>

            <div className="hidden h-5 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF0000]" />
              Estacionamento disponível
            </div>

            <div className="hidden h-5 w-px bg-white/20 lg:block" />

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF0000]" />
              Recepção para novos visitantes
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F7F7] to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
            Role
          </span>

          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/30 p-2">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}