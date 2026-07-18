interface DonationCardProps {
  title: string
  description: string
  buttonLabel: string
}

export function DonationCard({ title, description, buttonLabel }: DonationCardProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-card">
      <p className="text-sm uppercase tracking-[0.32em] text-primary">{title}</p>
      <h3 className="mt-4 text-2xl font-semibold text-text">{description}</h3>
      <button className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
        {buttonLabel}
      </button>
    </div>
  )
}
