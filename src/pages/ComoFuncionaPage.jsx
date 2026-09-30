import { Link } from 'react-router-dom'
import { Ruler, PenTool, Layers, ShieldCheck, Landmark } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import CtaOrcamento from '../components/CtaOrcamento'
import PostCard from '../components/PostCard'
import { etapas } from '../lib/institucional'
import { getPost } from '../content/blog/posts'

const diferenciais = [
  { Icone: Ruler, titulo: 'Várias visitas e medições', texto: 'Medimos quantas vezes for preciso, e a medição final é feita com a obra pronta.' },
  { Icone: PenTool, titulo: 'Projetistas próprios', texto: 'O projeto é desenhado pela nossa equipe, junto com você, antes de qualquer corte.' },
  { Icone: Layers, titulo: 'MDF de primeira linha', texto: 'Nos móveis planejados usamos só MDF de primeira linha, e MDF resistente à umidade nas áreas molhadas.' },
  { Icone: ShieldCheck, titulo: 'Garantia vitalícia', texto: 'Os móveis que fabricamos têm garantia vitalícia, com as condições no contrato.' },
  { Icone: Landmark, titulo: 'Financiamento', texto: 'Trabalhamos com financiamento, principalmente pelo Sicredi.' },
]

export default function ComoFuncionaPage() {
  const leituras = ['quanto-tempo-demora-moveis-planejados', 'quanto-custam-moveis-planejados', 'como-escolher-uma-marcenaria']
    .map(getPost)
    .filter(Boolean)

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Como funciona']]} />

        <header className="mt-6 max-w-3xl">
          <span className="eyebrow">Do primeiro contato à montagem</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">Como funciona</h1>
          <p className="mt-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
            Na Móveis Castelo Branco o processo é completo: visitas e medições, projeto feito pelos nossos
            projetistas, orçamento em cima do seu projeto, produção na nossa fábrica em Três de Maio, montagem e
            garantia vitalícia. Não trabalhamos com preço de tabela: cada projeto tem um preço único, porque é feito
            para a sua casa.
          </p>
        </header>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="relative rounded-2xl border border-mcb-gray-200 bg-white/60 p-7">
              <span className="font-display text-4xl text-wood-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-4 font-display text-xl text-ink">{e.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mcb-gray-600">{e.texto}</p>
            </li>
          ))}
        </ol>

        <section className="mt-24">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">O que você tem com a MCB</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {diferenciais.map(({ Icone, titulo, texto }) => (
              <li key={titulo}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-wood-500/10 text-wood-600">
                  <Icone size={22} />
                </div>
                <h3 className="mt-4 font-medium text-ink">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mcb-gray-600">{texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 rounded-3xl bg-mcb-gray-50 p-8 sm:p-12">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Uma dica antes de começar a obra</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-mcb-gray-600">
            Chame a marcenaria cedo. Planejar tomadas, iluminação, água e gás junto com os móveis evita tomada no meio
            da porta do armário e cano passando onde ia a gaveta. A medição que vai para a produção é feita depois,
            com paredes, piso e revestimentos prontos. Dúvidas?{' '}
            <Link to="/perguntas-frequentes" className="font-medium text-wood-600 underline-offset-4 hover:underline">
              Veja as perguntas frequentes
            </Link>
            .
          </p>
        </section>

        <section className="mt-24">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Para ler antes de contratar</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leituras.map((p) => (
              <PostCard key={p.slug} post={p} compacto />
            ))}
          </div>
        </section>

        <div className="mt-20">
          <CtaOrcamento origem="como-funciona" />
        </div>
      </div>
    </Pagina>
  )
}
