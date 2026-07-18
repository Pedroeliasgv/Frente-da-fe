import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'

import { AppLogo } from '@/components/common/app-logo'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101010] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#FF0000]/10 blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FF0000]/10 blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative">

        {/* CTA */}

        <section className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-[#151515] to-[#101010] p-10 shadow-[0_40px_120px_rgba(0,0,0,.35)] lg:p-16">

            <div className="max-w-3xl">

              <span className="inline-flex rounded-full border border-[#FF0000]/20 bg-[#FF0000]/10 px-4 py-2 text-sm font-medium text-[#FF6A6A]">
                Frente da Fé
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] lg:text-6xl">
                Venha viver
                <span className="block bg-gradient-to-r from-[#FF5A5A] via-[#FF0000] to-[#D60000] bg-clip-text text-transparent">
                  essa experiência.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Nossa missão é conectar pessoas a Jesus,
                fortalecer famílias e construir uma comunidade
                marcada pela fé, amor e propósito.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  to="/quero-fazer-parte"
                  className="inline-flex items-center gap-3 rounded-[30px] bg-gradient-to-r from-[#FF2222] via-[#FF0000] to-[#D60000] px-8 py-4 font-semibold text-white shadow-[0_30px_80px_rgba(255,0,0,.28)] transition hover:-translate-y-1"
                >
                  Quero Fazer Parte

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/cultos"
                  className="inline-flex items-center rounded-[30px] border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
                >
                  Planejar Minha Visita
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Footer Content */}

        <section className="mx-auto mt-24 max-w-7xl px-6 pb-16 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-4">

            {/* Brand */}

            <div>

              <AppLogo />

              <p className="mt-8 leading-8 text-white/65">
                Um lugar onde pessoas encontram Jesus,
                desenvolvem relacionamentos verdadeiros
                e vivem diariamente o propósito de Deus.
              </p>

              <div className="mt-8 flex gap-3">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#FF0000]/30 hover:bg-[#FF0000]/10"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#FF0000]/30 hover:bg-[#FF0000]/10"
                >
                  <Youtube className="h-5 w-5" />
                </a>

              </div>

            </div>
                        {/* Institucional */}

            <div>

              <h3 className="text-lg font-semibold">
                Institucional
              </h3>

              <div className="mt-8 flex flex-col gap-4">

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

              <h3 className="text-lg font-semibold">
                Conecte-se
              </h3>

              <div className="mt-8 flex flex-col gap-4">

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

              <h3 className="text-lg font-semibold">
                Contato
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <MapPin className="mt-1 h-5 w-5 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      Endereço
                    </p>

                    <p className="mt-1 text-white/65">
                      Alameda Grajaú, 129
                      <br />
                      Alphaville • Barueri/SP
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone className="mt-1 h-5 w-5 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      Telefone
                    </p>

                    <p className="mt-1 text-white/65">
                      (11) 99993-6035
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Mail className="mt-1 h-5 w-5 text-[#FF4A4A]" />

                  <div>

                    <p className="font-medium">
                      E-mail
                    </p>

                    <p className="mt-1 text-white/65">
                      contato@frentedafe.com.br
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="my-14 h-px bg-white/10" />

          <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/55 lg:flex-row">

            <p>
              © {new Date().getFullYear()} Frente da Fé em Alphaville. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Política de Privacidade
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Termos de Uso
              </a>

            </div>

          </div>

        </section>

      </div>

    </footer>
  )
}