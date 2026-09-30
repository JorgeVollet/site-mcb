import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqLista from '../components/FaqLista'
import CtaOrcamento from '../components/CtaOrcamento'
import PostCard from '../components/PostCard'
import { perguntasFrequentes } from '../lib/institucional'
import { getPost } from '../content/blog/posts'

export default function FaqPage() {
  const guias = ['quanto-custam-moveis-planejados', 'mdf-ou-mdp', 'garantia-de-moveis-planejados']
    .map(getPost)
    .filter(Boolean)

  return (
    <Pagina>
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Perguntas frequentes']]} />

        <header className="mt-6 max-w-3xl">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">Perguntas frequentes</h1>
          <p className="mt-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
            Preço, orçamento, materiais, garantia, prazo, financiamento e cidades atendidas. Se a sua dúvida não
            estiver aqui, fale com a gente pelo WhatsApp.
          </p>
        </header>

        <div className="mt-12">
          <FaqLista faq={perguntasFrequentes()} />
        </div>

        <section className="mt-20">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Quer entender melhor?</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guias.map((p) => (
              <PostCard key={p.slug} post={p} compacto />
            ))}
          </div>
        </section>

        <div className="mt-20">
          <CtaOrcamento origem="faq" />
        </div>
      </div>
    </Pagina>
  )
}
