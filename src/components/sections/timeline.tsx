interface TimelineItem {
  title: string
  description: string
  year: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.year} className="relative rounded-[1.5rem] border border-border bg-surface p-6 shadow-sm">
          <div className="absolute -left-4 top-6 h-8 w-8 rounded-full bg-primary text-white shadow-card" />
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">{item.year}</p>
          <h3 className="mt-3 text-xl font-semibold text-text">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
