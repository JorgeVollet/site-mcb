import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { contatos } from '../lib/siteData'

// Botão flutuante de WhatsApp, sempre acessível.
export default function WhatsAppFloat() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = `https://wa.me/${contatos[0].whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site e gostaria de um orçamento na Móveis Castelo Branco.'
  )}`

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-wood-500 text-white shadow-glow"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-wood-500/40" />
          <MessageCircle size={26} className="relative" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
