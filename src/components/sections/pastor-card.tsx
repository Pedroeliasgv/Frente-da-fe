interface PastorCardProps {
  name: string
  role: string
  description: string
}

export function PastorCard({ name, role, description }: PastorCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-text">{name}</p>
            <p className="text-sm uppercase tracking-[0.18em] text-secondary">{role}</p>
          </div>
        </div>
        <p className="text-sm leading-6 text-secondary">{description}</p>
      </div>
    </article>
  )
}
