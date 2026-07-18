interface ContactCardProps {
  title: string
  description: string
  details: string
}

export function ContactCard({ title, description, details }: ContactCardProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-card">
      <p className="text-sm uppercase tracking-[0.28em] text-primary">{title}</p>
      <h3 className="mt-4 text-2xl font-semibold text-text">{description}</h3>
      <p className="mt-4 text-sm leading-7 text-secondary">{details}</p>
    </div>
  )
}
