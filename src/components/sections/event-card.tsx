interface EventCardProps {
  date: string
  title: string
  description: string
}

export function EventCard({ date, title, description }: EventCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{date}</p>
      <h3 className="mt-4 text-xl font-semibold text-text">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </article>
  )
}
