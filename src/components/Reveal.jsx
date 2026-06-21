import { motion } from 'framer-motion'

// Wrapper de scroll reveal com Framer Motion.
// Revela o conteúdo com fade + subida suave quando entra na viewport.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
