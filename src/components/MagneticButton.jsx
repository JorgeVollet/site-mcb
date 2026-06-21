import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Botão "magnético": o conteúdo segue suavemente o cursor no hover.
// Renderiza como <a> (href) ou <button> (onClick).
export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const mx = e.clientX - (r.left + r.width / 2)
    const my = e.clientY - (r.top + r.height / 2)
    x.set(mx * strength)
    y.set(my * strength)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const Comp = href ? motion.a : motion.button
  const compProps = href ? { href } : { type, onClick }

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...compProps}
      {...rest}
    >
      {children}
    </Comp>
  )
}
