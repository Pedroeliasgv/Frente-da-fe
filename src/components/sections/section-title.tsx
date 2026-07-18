interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
      </div>
      <h2 className="text-4xl font-semibold tracking-[-0.02em] text-text sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-8 text-secondary">{description}</p>
      ) : null}
    </div>
  )
}
