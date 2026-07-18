import { MapPin, Navigation } from 'lucide-react'

export function Map() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-5 border-b border-slate-200 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Nossa localização
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Venha nos visitar
          </h2>

          <div className="mt-4 flex items-start gap-3 text-slate-600">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

            <p>
              Alameda Grajaú, 129
              <br />
              Alphaville Industrial
              <br />
              Barueri • SP • CEP 06454-050
            </p>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=Alameda+Grajaú,+129,+Barueri,+SP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
        >
          <Navigation className="h-5 w-5" />
          Abrir no Google Maps
        </a>
      </div>

      {/* Mapa */}
      <div className="relative h-[520px] overflow-hidden">
        <iframe
          title="Frente da Fé Alphaville"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14635.909892869548!2d-46.84676740057696!3d-23.49732087106116!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02232b2b7a37%3A0x9dfb7d66c2586fc0!2sAlameda%20Graja%C3%BA%2C%20129%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006454-050!5e0!3m2!1spt-BR!2sbr!4v1784393891388!5m2!1spt-BR!2sbr"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Gradiente superior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  )
}