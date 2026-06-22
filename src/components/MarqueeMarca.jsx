// Faixa de texto rolante (marquee) com a marca MCB.
// Roda de fora a fora, infinito, na paleta amadeirada do site.

const base = [
  'MCB',
  'Móveis Sob Medida',
  'Móveis Castelo Branco',
  'Para quem exige qualidade',
]

// Repete as frases várias vezes para que cada bloco já encha a tela inteira,
// evitando qualquer espaço vazio durante o loop.
const frases = Array.from({ length: 4 }, () => base).flat()

function Sequencia() {
  return (
    <>
      {frases.map((f, i) => (
        <span key={i} className="flex items-center">
          <span className="text-xs font-medium uppercase tracking-widest text-cream/85 sm:text-sm">
            {f}
          </span>
          <span
            aria-hidden="true"
            className="mx-4 text-[10px] text-wood-400 sm:mx-6 sm:text-xs"
          >
            ✦
          </span>
        </span>
      ))}
    </>
  )
}

export default function MarqueeMarca() {
  return (
    <section
      aria-label="Móveis Castelo Branco — móveis sob medida"
      className="relative overflow-hidden border-y border-white/5 bg-[#1c1510] py-3"
    >
      {/* glow sutil de fundo na cor da marca */}
      <div className="glow-wood pointer-events-none absolute left-1/2 top-1/2 h-40 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl" />

      <div className="relative flex w-max animate-marquee-marca items-center will-change-transform">
        <div className="flex items-center">
          <Sequencia />
        </div>
        <div className="flex items-center" aria-hidden="true">
          <Sequencia />
        </div>
      </div>

      {/* máscaras laterais pra sumir suave nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1c1510] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1c1510] to-transparent sm:w-32" />
    </section>
  )
}
