import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Breadcrumbs from '../components/Breadcrumbs'
import Contato from '../sections/Contato'
import { empresa } from '../lib/siteData'

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16">
          <Breadcrumbs itens={[['Início', '/'], ['Contato']]} />
          <header className="mt-6 max-w-3xl">
            <span className="eyebrow">Orçamento e contato</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Fale com a Móveis Castelo Branco
            </h1>
            <p className="mt-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
              Pelo WhatsApp você fala direto com o Ademir ou com a equipe de projeto. Atendemos de {empresa.horario.toLowerCase()},
              na nossa sede em {empresa.cidade}, e fazemos visitas em toda a{' '}
              <Link to="/regiao-atendida" className="font-medium text-wood-600 underline-offset-4 hover:underline">
                região atendida
              </Link>
              . Antes de pedir o orçamento, veja{' '}
              <Link to="/como-funciona" className="font-medium text-wood-600 underline-offset-4 hover:underline">
                como funciona
              </Link>
              .
            </p>
          </header>
        </div>
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
