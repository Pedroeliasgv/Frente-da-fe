import type { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group space-y-4 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary/15">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        <p className="text-sm leading-6 text-secondary">{description}</p>
      </div>
    </div>
  )
}
