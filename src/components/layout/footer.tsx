import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'

import logo from '@/assets/logo/Logo-B-IFF.png'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101010] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 h-[320px] w-[320px] rounded-full bg-[#FF0000]/6 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#FF0000]/6 blur-[140px]" />

      </div>

      <div className="relative">

        {/* CTA */}

        <section className="mx-auto max-w-6xl px-6 pt-20">

          <div className="border-b border-white/10 pb-16">

            <div className="max-w-3xl">

              <span className="inline-flex rounded-full border border-[#FF0000]/20 bg-[#FF0000]/10 px-4 py-2 text-sm font-medium text-[#FF6A6A]">
                Frente da Fé
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] lg:text-5xl">
                Venha viver
                <span className="block text-[#FF0000]">
                  essa experiência.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                Nossa missão é conectar pessoas a Jesus,
                fortalecer famílias e construir uma comunidade
                marcada pela fé, amor e propósito.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/quero-fazer-parte"
                  className="inline-flex h-12 items-center gap-3 rounded-xl bg-[#FF0000] px-6 font-semibold text-white transition hover:bg-[#E60000]"
                >
                  Quero Fazer Parte

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/cultos"
                  className="inline-flex h-12 items-center rounded-xl border border-white/15 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Planejar Minha Visita
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Footer */}

        <section className="mx-auto max-w-6xl px-6 py-14">

          <div className="grid gap-10 lg:grid-cols-4">

            {/* Brand */}

            <div>

              <Link to="/" className="inline-flex">

                <img
                  src={logo}
                  alt="Frente da Fé"
                  className="h-12 w-auto object-contain"
                />

              </Link>

              <p className="mt-5 leading-7 text-white/65">
                Um lugar onde pessoas encontram Jesus,
                desenvolvem relacionamentos verdadeiros
                e vivem diariamente o propósito de Deus.
              </p>

              <div className="mt-6 flex gap-3">

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10"
                >
                  <Youtube className="h-5 w-5" />
                </a>

              </div>

            </div>
                        {/* Institucional */}

            <div>

              <h3 className="text-base font-semibold">
                Institucional
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  to="/"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Início
                </Link>

                <Link
                  to="/sobre"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Sobre
                </Link>

                <Link
                  to="/cultos"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Cultos
                </Link>

                <Link
                  to="/eventos"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Eventos
                </Link>

                <Link
                  to="/contato"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Contato
                </Link>

              </div>

            </div>

            {/* Conecte-se */}

            <div>

              <h3 className="text-base font-semibold">
                Conecte-se
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  to="/quero-fazer-parte"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Quero Fazer Parte
                </Link>

                <Link
                  to="/login"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Área do Membro
                </Link>

                <Link
                  to="/doacoes"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Doações
                </Link>

                <Link
                  to="/cultos"
                  className="text-white/65 transition hover:text-[#FF4A4A]"
                >
                  Planejar Minha Visita
                </Link>

              </div>

            </div>

            {/* Contato */}

            <div>

              <h3 className="text-base font-semibold">
                Contato
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex gap-3">

                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      Endereço
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Alameda Grajaú, 129
                      <br />
                      Alphaville • Barueri/SP
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Phone className="mt-1 h-4 w-4 shrink-0 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      Telefone
                    </p>

                    <p className="mt-1 text-sm text-white/65">
                      (11) 99993-6035
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Mail className="mt-1 h-4 w-4 shrink-0 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      E-mail
                    </p>

                    <p className="mt-1 text-sm text-white/65">
                      contato@frentedafe.com.br
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="my-10 h-px bg-white/10" />
                    <div className="mt-10 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/55 lg:flex-row">

              <p>
                © {new Date().getFullYear()} Frente da Fé em Alphaville.
                Todos os direitos reservados.
              </p>

              <div className="flex items-center gap-5">

                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Política de Privacidade
                </a>

                <span className="h-1 w-1 rounded-full bg-white/25" />

                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Termos de Uso
                </a>

              </div>

            </div>

          </div>

        </section>

      </div>

    </footer>
  )
}