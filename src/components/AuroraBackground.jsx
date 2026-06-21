import { motion } from 'framer-motion'

// Fundo animado próprio, na paleta marrom/cobre da MCB.
// Camadas de gradientes radiais que se movem lentamente (aurora) + leve grão.
// Leve (CSS/SVG, sem WebGL) e 100% controlável.
export default function AuroraBackground({ className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      {/* Base escura amadeirada com leve gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #2a1f16 0%, #1c1510 55%, #120d09 100%)',
        }}
      />

      {/* Glow central fixo — garante cor marrom sempre visível atrás do conteúdo */}
      <div
        className="absolute left-1/2 top-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(180,123,83,0.35) 0%, rgba(180,123,83,0.08) 50%, rgba(180,123,83,0) 72%)',
        }}
      />

      {/* Blobs de aurora em movimento — mais luminosos pra aparecer */}
      <motion.div
        className="absolute left-[5%] top-[0%] h-[75vh] w-[75vh] rounded-full blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(196,138,93,0.85) 0%, rgba(180,123,83,0.25) 45%, rgba(180,123,83,0) 70%)',
        }}
        animate={{ x: [0, 140, -40, 0], y: [0, 90, 40, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[2%] top-[8%] h-[65vh] w-[65vh] rounded-full blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(208,162,115,0.7) 0%, rgba(154,96,56,0.2) 45%, rgba(154,96,56,0) 70%)',
        }}
        animate={{ x: [0, -110, 30, 0], y: [0, 70, -50, 0], scale: [1, 1.1, 1.05, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[28%] h-[60vh] w-[60vh] rounded-full blur-[85px]"
        style={{
          background:
            'radial-gradient(circle, rgba(224,182,138,0.6) 0%, rgba(208,162,115,0.18) 45%, rgba(208,162,115,0) 70%)',
        }}
        animate={{ x: [0, 90, -60, 0], y: [0, -60, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute right-[18%] bottom-[-8%] h-[50vh] w-[50vh] rounded-full blur-[75px]"
        style={{
          background:
            'radial-gradient(circle, rgba(170,108,66,0.7) 0%, rgba(122,77,46,0) 70%)',
        }}
        animate={{ x: [0, -80, 50, 0], y: [0, -50, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Partículas de luz flutuando */}
      {PARTICULAS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-wood-200"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0.18 }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* Vinheta + grão sutil pra dar textura e legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(18,13,9,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}

const PARTICULAS = [
  { left: '12%', top: '30%', size: 4, dur: 7, delay: 0 },
  { left: '78%', top: '22%', size: 3, dur: 9, delay: 1 },
  { left: '40%', top: '18%', size: 5, dur: 8, delay: 2 },
  { left: '64%', top: '60%', size: 3, dur: 10, delay: 0.5 },
  { left: '25%', top: '70%', size: 4, dur: 7.5, delay: 1.5 },
  { left: '88%', top: '50%', size: 3, dur: 9.5, delay: 2.5 },
  { left: '52%', top: '80%', size: 4, dur: 8.5, delay: 1 },
  { left: '8%', top: '55%', size: 3, dur: 11, delay: 3 },
]
