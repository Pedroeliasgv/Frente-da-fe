import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/sections/section-title'

const ministries = [
  {
    category: 'JOVENS',
    title: 'Juventude',
    description:
      'Um ambiente para crescer na fé, construir amizades verdadeiras e descobrir seu propósito.',
    image: '/images/ministries/youth.jpg',
  },
  {
    category: 'FAMÍLIAS',
    title: 'Famílias',
    description:
      'Fortalecendo lares através do discipulado, comunhão e cuidado pastoral.',
    image: '/images/ministries/family.jpg',
  },
  {
    category: 'ADORAÇÃO',
    title: 'Louvor',
    description:
      'Uma equipe apaixonada por conduzir pessoas à presença de Deus através da adoração.',
    image: '/images/ministries/worship.jpg',
  },
]

export function Ministries() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Ministérios"
          title="Existe um lugar para você servir."
          description="Cada ministério é uma oportunidade de crescer espiritualmente, desenvolver dons e construir relacionamentos que transformam vidas."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {ministries.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-[32px] ${
                index === 2
                  ? 'lg:col-span-12 h-[420px]'
                  : 'lg:col-span-6 h-[560px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="mb-4 text-xs font-semibold tracking-[0.35em] text-red-400">
                  {item.category}
                </span>

                <h3 className="text-4xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-lg leading-8 text-white/80">
                  {item.description}
                </p>

                <button className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition group-hover:translate-x-2">
                  Conhecer ministério
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}