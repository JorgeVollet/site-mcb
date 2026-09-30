import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarCheck, X, MessageCircle } from 'lucide-react'
import { contatos } from '../lib/siteData'
import { track } from '../lib/analytics'
import { AGENDA_FECHADA_ATE, DATA_LIMITE_TEXTO } from '../lib/agenda'

// ─── Configuração do aviso ───────────────────────────────────────────
// Datas da agenda ficam em src/lib/agenda.js. Depois delas o pop-up some sozinho.
// Mostra 1x por sessão (fecha o navegador → aparece de novo na próxima visita)
const CHAVE_SESSAO = 'mcb-aviso-agenda-visto'
const ATRASO_MS = 700
// ─────────────────────────────────────────────────────────────────────

function jaViu() {
  try {
    return sessionStorage.getItem(CHAVE_SESSAO) === '1'
  } catch {
    return false
  }
}

function marcarVisto() {
  try {
    sessionStorage.setItem(CHAVE_SESSAO, '1')
  } catch {
    /* navegador sem storage: sem problema */
  }
}

export default function AvisoAgenda() {
  const [aberto, setAberto] = useState(false)
  const dialogRef = useRef(null)

  // Abre logo após o carregamento
  useEffect(() => {
    if (new Date() > AGENDA_FECHADA_ATE || jaViu()) return
    const t = setTimeout(() => {
      setAberto(true)
      track('aviso-agenda-exibido')
    }, ATRASO_MS)
    return () => clearTimeout(t)
  }, [])

  // ESC fecha + trava o scroll do fundo enquanto aberto
  useEffect(() => {
    if (!aberto) return
    const onKey = (e) => e.key === 'Escape' && fechar()
    window.addEventListener('keydown', onKey)
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflowAnterior
    }
  }, [aberto])

  function fechar() {
    marcarVisto()
    setAberto(false)
  }

  const linkWhats = `https://wa.me/${contatos[0].whatsapp}?text=${encodeURIComponent(
    `Olá! Vi o aviso no site de que a agenda está fechada até ${DATA_LIMITE_TEXTO} e gostaria de começar a planejar meu projeto para depois dessa data.`
  )}`

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Fundo escurecido — clicar fora fecha */}
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={fechar}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="aviso-agenda-titulo"
            aria-describedby="aviso-agenda-texto"
            tabIndex={-1}
            ref={dialogRef}
            className="relative w-full max-w-xl overflow-hidden outline-none rounded-3xl bg-cream text-ink shadow-soft"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            {/* Faixa madeira no topo */}
            <div className="h-1.5 w-full bg-gradient-to-r from-wood-700 via-wood-500 to-wood-300" />

            <button
              type="button"
              onClick={fechar}
              aria-label="Fechar aviso"
              className="absolute right-4 top-5 flex h-9 w-9 items-center justify-center rounded-full text-mcb-gray-500 transition hover:bg-mcb-gray-100 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-500"
            >
              <X size={20} />
            </button>

            <div className="px-6 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-wood-50 text-wood-600">
                <CalendarCheck size={24} />
              </div>

              <span className="text-xs font-medium uppercase tracking-widest2 text-wood-600">
                Aviso importante
              </span>

              <h2
                id="aviso-agenda-titulo"
                className="mt-2 pr-8 text-2xl font-bold leading-tight sm:text-3xl"
              >
                Nossa agenda está completa até {DATA_LIMITE_TEXTO}
              </h2>

              <div id="aviso-agenda-texto" className="mt-4 space-y-3 text-[15px] leading-relaxed text-mcb-gray-600">
                <p>
                  Ficamos muito felizes com a procura! Para manter o cuidado e a
                  qualidade que cada móvel merece, não conseguimos assumir novos
                  projetos antes dessa data.
                </p>
                <p>
                  Novas produções serão agendadas a partir de{' '}
                  <strong className="font-semibold text-ink">31 de março de 2027</strong>.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-wood-100 bg-wood-50/70 px-4 py-3.5 text-[15px] leading-relaxed text-wood-800">
                <strong className="font-semibold">Este é o melhor momento para planejar.</strong>{' '}
                Quem começa o projeto agora sai na frente na próxima agenda.
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={linkWhats}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={marcarVisto}
                  className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-wood-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-wood-600"
                >
                  <MessageCircle size={18} />
                  Quero planejar meu projeto
                </a>
                <button
                  type="button"
                  onClick={fechar}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-mcb-gray-200 px-6 py-3.5 text-sm font-medium text-mcb-gray-600 transition hover:border-mcb-gray-300 hover:text-ink"
                >
                  Continuar no site
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
