import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { getAmbiente } from '../lib/ambientesData'

export default function AmbientePage() {
  const { ambiente } = useParams()
  const amb = getAmbiente(ambiente)

  if (!amb) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center bg-cream pt-32 text-center">
          <div>
            <h1 className="font-display text-3xl text-ink">Ambiente não encontrado</h1>
            <Link to="/ambientes" className="mt-4 inline-block text-wood-600 hover:underline">
              Voltar para ambientes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream pt-28 sm:pt-32">
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:pb-32">
          <Link
            to="/ambientes"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-mcb-gray-500 transition-colors hover:text-wood-600"
          >
            <ArrowLeft size={16} /> Ambientes
          </Link>

          <div className="mt-6">
            <span className="eyebrow">Ambiente</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
              {amb.nome}
            </h1>
            <p className="mt-4 max-w-xl text-base text-mcb-gray-600 sm:text-lg">{amb.descricao}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {amb.projetos.map((proj, i) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/ambientes/${amb.slug}/${proj.slug}`}
                  className="glow-border group relative block h-[300px] overflow-hidden rounded-xl bg-neutral-900 sm:h-[380px]"
                >
                  <img
                    src={proj.fotos[0]}
                    alt={proj.nome}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_12%,transparent_22%)]" />
                  <div className="absolute right-4 top-4 rounded border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-200 backdrop-blur-sm">
                    {proj.fotos.length} {proj.fotos.length === 1 ? 'foto' : 'fotos'}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between border-t border-white/10 pt-4">
                      <h3 className="font-display text-xl leading-tight text-white">
                        {proj.nome}
                      </h3>
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
