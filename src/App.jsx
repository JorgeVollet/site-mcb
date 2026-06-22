import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import MarqueeMarca from './components/MarqueeMarca'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import Pilares from './sections/Pilares'
import Ambientes from './sections/Ambientes'
import Destaques from './sections/Destaques'
import Depoimentos from './sections/Depoimentos'
import Contato from './sections/Contato'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Barra de progresso de leitura */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-wood-500"
      />

      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Pilares />
        <Destaques />
        <Ambientes />
        <MarqueeMarca />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
