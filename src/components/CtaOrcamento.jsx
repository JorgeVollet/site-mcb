import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { contatos } from '../lib/siteData'
import { agendaFechada, DATA_REABERTURA_TEXTO } from '../lib/agenda'

// Chamada para orçamento usada no fim das páginas internas e dos artigos.
export default function CtaOrcamento({
  titulo = 'Vamos planejar o seu projeto?',
  texto = 'Conte o que você precisa. A equipe da Móveis Castelo Branco faz as visitas, as medições e o projeto, e o orçamento é feito para a sua casa.',
  mensagem = 'Olá! Vim pelo site e gostaria de um orçamento na Móveis Castelo Branco.',
  origem = 'cta-pagina',
}) {
  const link = `https://wa.me/${contatos[0].whatsapp}?text=${encodeURIComponent(mensagem)}`
  return (
    <div
      data-origem={origem}
      className="relative overflow-hidden rounded-3xl bg-mcb-gray-800 px-6 py-10 text-cream sm:px-12 sm:py-14"
    >
      <div className="glow-wood pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-50 blur-3xl" />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">{titulo}</h2>
        <p className="mt-4 text-base leading-relaxed text-mcb-gray-300 sm:text-lg">{texto}</p>
        {agendaFechada() && (
          <p className="mt-4 text-sm text-wood-200">
            Nossa agenda de produção abre novas vagas a partir de {DATA_REABERTURA_TEXTO}. Já dá para começar a
            planejar agora.
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-wood-500 text-white hover:bg-wood-600"
          >
            <MessageCircle size={16} /> Falar no WhatsApp
          </a>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream transition-all hover:border-cream hover:bg-cream hover:text-ink"
          >
            Outras formas de contato <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
