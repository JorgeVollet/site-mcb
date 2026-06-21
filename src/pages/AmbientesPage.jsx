import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { ambientes } from '../lib/ambientesData'

export default function AmbientesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-32">
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="text-center">
            <span className="eyebrow">Nossos trabalhos</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Ambientes
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-mcb-gray-600">
              Explore nossos projetos por ambiente. Cada espaço, pensado e
              executado sob medida.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ambientes.map((amb, i) => (
              <motion.div
                key={amb.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/ambientes/${amb.slug}`}
                  className="glow-border group relative block h-[360px] overflow-hidden rounded-xl bg-neutral-900"
                >
                  <img
                    src={amb.capa}
                    alt={amb.nome}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_12%,transparent_22%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between border-t border-white/10 pt-4">
                      <div>
                        <h3 className="font-display text-2xl text-white">{amb.nome}</h3>
                        <p className="mt-1 text-sm text-white/70">
                          {amb.projetos.length}{' '}
                          {amb.projetos.length === 1 ? 'projeto' : 'projetos'}
                        </p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-wood-500 group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
