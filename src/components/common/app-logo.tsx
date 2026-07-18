export function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white p-2 shadow-sm">
        <img src="/favicon.svg" alt="Frente da Fé" className="h-10 w-10" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold tracking-[0.02em] text-text">Frente da Fé</p>
        <p className="text-xs uppercase tracking-[0.28em] text-secondary">Alphaville</p>
      </div>
    </div>
  )
}
