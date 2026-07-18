interface VerseCardProps {
  verse: string
  reference: string
}

export function VerseCard({ verse, reference }: VerseCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-primary/15 bg-primary/5 p-6 shadow-sm">
      <p className="text-lg leading-8 text-text">{verse}</p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{reference}</p>
    </article>
  )
}
