import { CalendarDays, Clock3, MapPin } from 'lucide-react'

export function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl">

      <img
        src="../assets/images/Hero_Site_(IFF).jpeg"
        alt="Frente da Fé"
        className="h-[620px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8">

        <div className="rounded-3xl bg-white p-6 shadow-xl">

          <div className="mb-6">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Próximo Culto
            </span>
          </div>

          <h3 className="text-2xl font-bold text-text">
            Domingo da Família
          </h3>

          <p className="mt-2 text-secondary">
            Um culto preparado para fortalecer sua fé e sua família.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <CalendarDays
                  className="text-primary"
                  size={20}
                />
              </div>

              <div>
                <p className="font-semibold">
                  Domingo
                </p>

                <span className="text-sm text-secondary">
                  Todos os domingos
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Clock3
                  className="text-primary"
                  size={20}
                />
              </div>

              <div>
                <p className="font-semibold">
                  09:00
                </p>

                <span className="text-sm text-secondary">
                  Início do culto
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <MapPin
                  className="text-primary"
                  size={20}
                />
              </div>

              <div>
                <p className="font-semibold">
                  Alameda Grajaú, 129
                </p>

                <span className="text-sm text-secondary">
                  Alphaville • Barueri
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}