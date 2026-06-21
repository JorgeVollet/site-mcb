import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { getProjeto } from '../lib/ambientesData'
import { contatos } from '../lib/siteData'

export default function ProjetoPage() {
  const { ambiente, projeto } = useParams()
  const data = getProjeto(ambiente, projeto)
  const [lightbox, setLightbox] = useState(null)

  const fotos = data?.projeto.fotos || []
  const fechar = useCallback(() => setLightbox(null), [])
  const anterior = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length)),
    [fotos.length]
  )
  const proximo = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % fotos.length)),
    [fotos.length]
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proximo()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, fechar, anterior, proximo])

  if (!data) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center bg-cream pt-32 text-center">
          <div>
            <h1 className="font-display text-3xl text-ink">Projeto não encontrado</h1>
            <Link to="/ambientes" className="mt-4 inline-block text-wood-600 hover:underline">
              Voltar para ambientes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const { ambiente: amb, projeto: proj } = data
  const msg = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de um orçamento parecido com o projeto "${proj.nome}".`
  )

  return (
    <>
      <Navbar />
      <main className="bg-cream pt-32">
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
          <Link
            to={`/ambientes/${amb.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-mcb-gray-500 transition-colors hover:text-wood-600"
          >
            <ArrowLeft size={16} /> {amb.nome}
          </Link>

          <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">{amb.nome}</span>
              <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                {proj.nome}
              </h1>
            </div>
            <a
              href={`https://wa.me/${contatos[0].whatsapp}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-wood-500 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-wood-600 hover:shadow-glow sm:self-auto"
            >
              <MessageCircle size={16} /> Quero algo assim
            </a>
          </div>

          {/* Galeria — mosaico */}
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {fotos.map((foto, i) => (
              <motion.button
                key={foto}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden rounded-xl bg-mcb-gray-200 shadow-card"
              >
                <img
                  src={foto}
                  alt={`${proj.nome} ${i + 1}`}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && fotos[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
            onClick={fechar}
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20"
              onClick={fechar}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
            {fotos.length > 1 && (
              <>
                <button
                  className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:left-8"
                  onClick={(e) => {
                    e.stopPropagation()
                    anterior()
                  }}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:right-8"
                  onClick={(e) => {
                    e.stopPropagation()
                    proximo()
                  }}
                  aria-label="Próximo"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}
            <motion.img
              key={fotos[lightbox]}
              src={fotos[lightbox]}
              alt={`${proj.nome} ${lightbox + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-5xl rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm text-cream backdrop-blur">
              {lightbox + 1} / {fotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
