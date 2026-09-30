import { Link } from 'react-router-dom'
import { Target, Fingerprint, BadgeCheck, Lightbulb } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import CtaOrcamento from '../components/CtaOrcamento'
import { empresa, contatos, pilares, anosDeHistoria } from '../lib/siteData'

const icones = { Target, Fingerprint, BadgeCheck, Lightbulb }

export default function SobrePage() {
  const numeros = [
    [`${anosDeHistoria()} anos`, `de história, desde ${empresa.fundacao}`],
    ['+2.500', 'projetos entregues'],
    [`${empresa.raioKm} km`, 'de raio atendido a partir de Três de Maio'],
    ['Vitalícia', 'garantia dos móveis que fabricamos'],
  ]

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Sobre']]} />

        <div className="mt-6 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <header>
            <span className="eyebrow">Sobre a empresa</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Desde {empresa.fundacao} fazendo móveis sob medida em {empresa.cidade}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
              <p>
                A {empresa.nome} faz parte da história de {empresa.cidade}, no noroeste do Rio Grande do Sul. Tudo
                começou em {empresa.fundacao}, quando o fundador, {empresa.fundador}, iniciou o trabalho numa
                marcenaria improvisada na garagem de casa.
              </p>
              <p>
                O que começou com as mãos de um só homem hoje vive em milhares de lares da região. Em{' '}
                {anosDeHistoria()} anos, a marcenaria da garagem virou uma fábrica com maquinário moderno, profissionais
                capacitados e projetistas próprios, sem perder o cuidado de quem faz cada peça como se fosse para a
                própria casa.
              </p>
              <p>
                Produzimos móveis exclusivos, sob medida, em MDF de primeira linha: cozinhas, roupeiros, closets,
                banheiros, salas e móveis para empresas. Cada projeto começa com visitas e medições, passa pelos nossos
                projetistas e só vai para a produção depois de aprovado por você.
              </p>
            </div>
          </header>

          <div className="relative lg:mt-16">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-mcb-gray" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-mcb-gray" />
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src="/fotos/fachada-mcb.jpg"
                alt="Fachada da fábrica da Móveis Castelo Branco em Três de Maio/RS"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-sm text-mcb-gray-500">
              Nossa sede e fábrica: {empresa.endereco}.
            </p>
          </div>
        </div>

        <dl className="mt-20 grid gap-8 border-y border-mcb-gray-200 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-4xl text-wood-600">{n}</dt>
              <dd className="mt-2 text-sm text-mcb-gray-600">{l}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">O que guia cada projeto</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p) => {
              const Icone = icones[p.icone]
              return (
                <div key={p.titulo} className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-wood-500/10 text-wood-600">
                    {Icone && <Icone size={22} />}
                  </div>
                  <h3 className="font-display text-xl text-ink">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mcb-gray-600">{p.descricao}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Quem atende você</h2>
          <p className="mt-4 max-w-2xl text-mcb-gray-600">
            Você fala direto com quem projeta e acompanha a produção dos seus móveis.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {contatos.map((c) => (
              <li key={c.whatsapp} className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-6">
                <p className="font-display text-xl text-ink">{c.nome}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-wood-600">{c.cargo}</p>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-origem="sobre-equipe"
                  className="mt-4 inline-block text-sm text-mcb-gray-600 transition-colors hover:text-wood-600"
                >
                  WhatsApp {c.whatsappLabel}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-16 max-w-3xl text-mcb-gray-600">
          Quer saber como é o processo, da primeira conversa à montagem? Veja{' '}
          <Link to="/como-funciona" className="font-medium text-wood-600 underline-offset-4 hover:underline">
            como funciona
          </Link>{' '}
          ou conheça os{' '}
          <Link to="/ambientes" className="font-medium text-wood-600 underline-offset-4 hover:underline">
            projetos que já entregamos
          </Link>
          .
        </p>

        <div className="mt-16">
          <CtaOrcamento origem="sobre" />
        </div>
      </div>
    </Pagina>
  )
}
