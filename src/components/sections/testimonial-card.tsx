interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20">
      <p className="text-base leading-8 text-text">“{quote}”</p>
      <div className="mt-6 space-y-1">
        <p className="text-sm font-semibold text-text">{author}</p>
        <p className="text-sm text-secondary">{role}</p>
      </div>
    </article>
  )
}
