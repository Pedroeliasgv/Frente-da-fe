import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { Link } from '@tanstack/react-router'


export function HomeCTASection() {
  return (
    <section className="relative isolate overflow-hidden py-36">

      {/* Background */}
      <div className="absolute inset-0">

       

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/40" />

      </div>

      <div className="relative mx-auto flex max-w-6xl justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="max-w-4xl text-center text-white"
        >

          <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-xl">

            <Heart
              size={16}
              className="text-[#FF0000]"
            />

            Uma família esperando por você.

          </span>

          <h2 className="mt-10 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

            Sua jornada de fé
            <br />

            começa aqui.

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/75">

            Venha viver uma experiência transformadora, conhecer novas
            pessoas e caminhar conosco em direção ao propósito que Deus
            preparou para sua vida.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/quero-fazer-parte"
              className="inline-flex items-center gap-3 rounded-xl bg-[#FF0000] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Quero Fazer Parte

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/cultos"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Planejar minha visita
            </Link>

          </div>
                    {/* Bottom Information */}
          {/* Bottom Information */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl"
            >
            <div className="grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">

                <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Palavra
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                    Ensino Bíblico
                </h3>

                <p className="mt-2 text-white/70">
                    Mensagens fundamentadas na Palavra de Deus para fortalecer sua fé.
                </p>
                </div>

                <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Comunhão
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                    Uma família em Cristo
                </h3>

                <p className="mt-2 text-white/70">
                    Um ambiente acolhedor para você e sua família crescerem juntos.
                </p>
                </div>

                <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Primeira visita
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                    Você é bem-vindo
                </h3>

                <p className="mt-2 text-white/70">
                    Nossa equipe estará pronta para receber você desde o primeiro momento.
                </p>
                </div>

            </div>
            </motion.div>

        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101010] to-transparent" />

    </section>
  )
}