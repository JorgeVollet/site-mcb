import { Link } from 'react-router-dom'
import { MapPin, ArrowUpRight } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import CtaOrcamento from '../components/CtaOrcamento'
import { empresa, cidadesAtendidas } from '../lib/siteData'
import { paginasCidade } from '../lib/cidades'

export default function RegiaoPage() {
  const principais = cidadesAtendidas.slice(0, 9)
  const demais = cidadesAtendidas.slice(9)
  const comPagina = Object.fromEntries(paginasCidade.map((c) => [c.cidade, c.slug]))

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Região atendida']]} />

        <header className="mt-6 max-w-3xl">
          <span className="eyebrow">Onde atendemos</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
            Móveis planejados em Três de Maio e região
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
            Nossa fábrica fica em {empresa.cidade}, no noroeste do Rio Grande do Sul, e atendemos cidades num raio de
            cerca de {empresa.raioKm} km: Santa Rosa, Horizontina, Ijuí, Santo Ângelo, Três Passos e toda a região. As
            visitas, medições e montagens são feitas no local, com o mesmo cuidado de quem mora ao lado.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Principais cidades</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principais.map((c) => (
              <li key={c}>
                {comPagina[c] ? (
                  <Link
                    to={`/${comPagina[c]}`}
                    className="group flex items-center justify-between rounded-2xl border border-wood-500/40 bg-wood-500/5 px-5 py-4 transition-all hover:border-wood-500 hover:shadow-card"
                  >
                    <span className="flex items-center gap-3 font-medium text-ink">
                      <MapPin size={18} className="text-wood-500" /> {c}
                    </span>
                    <ArrowUpRight size={16} className="text-wood-500" />
                  </Link>
                ) : (
                  <span className="flex items-center gap-3 rounded-2xl border border-mcb-gray-200 bg-white/60 px-5 py-4 font-medium text-ink">
                    <MapPin size={18} className="text-mcb-gray-400" /> {c}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Também atendemos</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-mcb-gray-600">{demais.join(' · ')}</p>
          <p className="mt-6 max-w-3xl text-mcb-gray-600">
            Não achou a sua cidade? Se ela fica no noroeste gaúcho, é bem provável que a gente atenda.{' '}
            <Link to="/contato" className="font-medium text-wood-600 underline-offset-4 hover:underline">
              Fale com a gente
            </Link>
            .
          </p>
        </section>

        <section className="mt-20 grid gap-8 rounded-3xl bg-mcb-gray-50 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Nossa sede</h2>
            <p className="mt-4 leading-relaxed text-mcb-gray-600">
              {empresa.endereco}
              <br />
              {empresa.horario}
              <br />
              Telefone {empresa.telefoneFixo}
            </p>
            <a
              href={empresa.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6"
            >
              <MapPin size={16} /> Ver no mapa
            </a>
          </div>
          <div className="leading-relaxed text-mcb-gray-600">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Como é o atendimento fora de Três de Maio</h2>
            <p className="mt-4">
              É o mesmo processo de sempre: primeiro contato pelo WhatsApp, visitas e medições no seu endereço,
              projeto feito pelos nossos projetistas, produção na fábrica e montagem no local com a nossa equipe própria.
            </p>
            <Link to="/como-funciona" className="mt-4 inline-block font-medium text-wood-600 underline-offset-4 hover:underline">
              Veja como funciona
            </Link>
          </div>
        </section>

        <div className="mt-20">
          <CtaOrcamento origem="regiao" />
        </div>
      </div>
    </Pagina>
  )
}
