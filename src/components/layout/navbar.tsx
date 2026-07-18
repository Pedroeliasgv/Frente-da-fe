import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '@/assets/logo/Logo-IFF.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/cultos', label: 'Cultos' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/contato', label: 'Contato' },
  { to: '/doacoes', label: 'Doações' },
] as const

export function Navbar() {
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: 'easeOut',
        }}
        className="mx-auto max-w-[1440px] px-5 pt-6 lg:px-8"
      >
        <div
          className={cn(
            'flex h-20 items-center justify-between rounded-full transition-all duration-300',
            scrolled
              ? 'border border-black/5 bg-white/90 px-8 shadow-xl backdrop-blur-xl'
              : 'bg-transparent px-8',
          )}
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Frente da Fé"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => {
              const active = location.pathname === link.to

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'relative text-[15px] font-medium transition-colors duration-300',
                    active
                      ? 'text-[#FF0000]'
                      : scrolled
                        ? 'text-[#101010] hover:text-[#FF0000]'
                        : 'text-white hover:text-white/80',
                  )}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#FF0000]"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/login">
              <Button variant="secondary">
                Entrar
              </Button>
            </Link>

            <Link to="/quero-fazer-parte">
              <Button>
                Quero Fazer Parte
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden',
              scrolled
                ? 'border-black/10 bg-white text-[#101010]'
                : 'border-white/20 bg-white/10 text-white backdrop-blur-lg',
            )}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>
            <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-5 mt-4 overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col p-4">
              {links.map((link) => {
                const active = location.pathname === link.to

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      'rounded-2xl px-5 py-4 text-base font-medium transition-all duration-300',
                      active
                        ? 'bg-[#FF0000]/10 text-[#FF0000]'
                        : 'text-[#101010] hover:bg-[#F7F7F7]',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="mt-6 border-t border-black/5 pt-6">
                <div className="flex flex-col gap-3">
                  <Link to="/login" className="w-full">
                    <Button
                      variant="secondary"
                      className="h-12 w-full rounded-xl"
                    >
                      Entrar
                    </Button>
                  </Link>

                  <Link to="/quero-fazer-parte" className="w-full">
                    <Button className="h-12 w-full rounded-xl">
                      Quero Fazer Parte
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}