interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </article>
  )
}
