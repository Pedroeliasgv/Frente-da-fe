import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, PlayCircle } from 'lucide-react'
import { SectionTitle } from '@/components/sections/section-title'

export function EventsSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] py-32 text-white">
      {/* Background Effects */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#FF0000]/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FF0000]/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Eventos"
          title="Em breve teremos novidades."
          description="Nossa equipe está preparando experiências especiais para toda a comunidade. Enquanto isso, participe dos nossos cultos e acompanhe nossas redes sociais."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FF2B2B] to-[#D60000] shadow-[0_20px_60px_rgba(255,0,0,0.35)]">
            <CalendarDays size={42} />
          </div>

          <h3 className="mt-8 text-4xl font-bold tracking-tight">
            Nenhum evento programado
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Ainda não temos eventos especiais cadastrados, mas estamos preparando
            momentos incríveis para nossa igreja. Continue acompanhando esta
            página para ficar por dentro das próximas novidades.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="/quero-fazer-parte"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF0000] to-[#D60000] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,0,0,0.35)]"
            >
              Quero Visitar
              <ArrowRight size={18} />
            </a>

            <a
              href="/online"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              <PlayCircle size={18} />
              Assistir Online
            </a>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Fique ligado
            </p>

            <p className="mt-3 text-base text-white/65">
              Em breve anunciaremos conferências, encontros, vigílias,
              celebrações e outros eventos especiais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}