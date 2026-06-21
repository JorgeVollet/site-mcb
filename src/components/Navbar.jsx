import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import { ambientes } from '../lib/ambientesData'

const links = [
  { label: 'Sobre', target: '#sobre', type: 'hash' },
  { label: 'Ambientes', target: '/ambientes', type: 'route' },
  { label: 'Portfólio', target: '#portfolio', type: 'hash' },
  { label: 'Depoimentos', target: '#depoimentos', type: 'hash' },
  { label: 'Contato', target: '#contato', type: 'hash' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(false)
  const [dropAmbientes, setDropAmbientes] = useState(false)
  const { pathname } = useLocation()
  const naHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hashHref = (target) => (naHome ? target : `/${target}`)

  const renderLink = (l, className, onClick) => {
    if (l.type === 'route') {
      return (
        <Link to={l.target} className={className} onClick={onClick}>
          {l.label}
        </Link>
      )
    }
    return (
      <a href={hashHref(l.target)} className={className} onClick={onClick}>
        {l.label}
      </a>
    )
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-mcb-gray-200/70 bg-cream/85 py-2 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
          <Logo className="h-9 sm:h-10" variant={scrolled || !naHome ? 'dark' : 'light'} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const linkClass = `group relative inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
              scrolled || !naHome
                ? 'text-mcb-gray-700 hover:text-ink'
                : 'text-cream/80 hover:text-cream'
            }`

            if (l.label === 'Ambientes') {
              return (
                <li
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setDropAmbientes(true)}
                  onMouseLeave={() => setDropAmbientes(false)}
                >
                  <Link to={l.target} className={linkClass}>
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${dropAmbientes ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {dropAmbientes && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 mt-4 w-60 -translate-x-1/2 overflow-hidden rounded-2xl border border-mcb-gray-200/70 bg-cream/95 p-2 shadow-card backdrop-blur-xl"
                      >
                        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-mcb-gray-200/70 bg-cream/95" />
                        {ambientes.map((amb) => (
                          <Link
                            key={amb.slug}
                            to={`/ambientes/${amb.slug}`}
                            className="group/item relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-mcb-gray-700 transition-colors hover:bg-wood-500/10 hover:text-wood-700"
                          >
                            {amb.nome}
                            <span className="text-xs text-mcb-gray-400 transition-colors group-hover/item:text-wood-500">
                              {amb.projetos.length}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            }

            return <li key={l.label}>{renderLink(l, linkClass)}</li>
          })}
        </ul>

        <a
          href={hashHref('#contato')}
          className={`hidden items-center gap-2 rounded-full px-6 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:shadow-glow lg:inline-flex ${
            scrolled || !naHome
              ? 'bg-ink text-cream hover:bg-wood-600'
              : 'bg-wood-500 text-white hover:bg-wood-400'
          }`}
        >
          <Phone size={15} />
          Orçamento
        </a>

        <button
          onClick={() => setAberto((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 lg:hidden ${
            scrolled || !naHome ? 'text-ink' : 'text-cream'
          }`}
          aria-label="Abrir menu"
        >
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-mcb-gray-200/60 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.label}>
                  {renderLink(
                    l,
                    'block py-3 text-base font-medium text-mcb-gray-700 hover:text-wood-600',
                    () => setAberto(false)
                  )}
                </li>
              ))}
              <li className="border-t border-mcb-gray-200/60 pt-2">
                {ambientes.map((amb) => (
                  <Link
                    key={amb.slug}
                    to={`/ambientes/${amb.slug}`}
                    onClick={() => setAberto(false)}
                    className="block py-2 pl-4 text-sm font-medium text-mcb-gray-500 hover:text-wood-600"
                  >
                    {amb.nome}
                  </Link>
                ))}
              </li>
              <li>
                <a
                  href={hashHref('#contato')}
                  onClick={() => setAberto(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-widest text-cream"
                >
                  <Phone size={16} /> Solicitar orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
