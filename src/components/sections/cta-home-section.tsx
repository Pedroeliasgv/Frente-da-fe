import { motion } from 'framer-motion'
import { ArrowRight, Heart, PlayCircle } from 'lucide-react'

export function HomeCTASection() {
  return (
    <section className="relative isolate overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-church.jpg"
          alt="Frente da Fé"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.18),transparent_65%)]" />

        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-red-600/20 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-500/15 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-center text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-xl">
            <Heart size={16} className="text-red-400" />
            Sua história pode começar hoje.
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight sm:text-6xl">
            Você já tem um lugar
            <br />
            para chamar de família.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/80">
            Aqui você encontrará pessoas para caminhar ao seu lado, crescer na
            fé e viver uma experiência real com Deus.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="/quero-fazer-parte"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF0000] to-[#D60000] px-8 py-4 font-semibold text-white shadow-[0_20px_60px_rgba(255,0,0,.35)] transition hover:-translate-y-1"
            >
              Quero Fazer Parte
              <ArrowRight size={18} />
            </a>

            <a
              href="/online"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              <PlayCircle size={18} />
              Assistir Online
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              'Ambiente para toda a família',
              'Recepção calorosa desde o primeiro dia',
              'Palavra, adoração e comunhão',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl"
              >
                <p className="text-base text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}