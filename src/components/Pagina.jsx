import Navbar from './Navbar'
import Footer from '../sections/Footer'
import WhatsAppFloat from './WhatsAppFloat'

// Estrutura comum das páginas internas: menu, conteúdo, rodapé e WhatsApp.
export default function Pagina({ children, className = 'bg-cream' }) {
  return (
    <>
      <Navbar />
      <main className={`${className} pt-28 sm:pt-32`}>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
