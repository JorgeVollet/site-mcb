// Logo oficial da Móveis Castelo Branco (PNG com fundo transparente).
// variant="light"  -> cobre + texto creme  (para fundos escuros)
// variant="dark"   -> cobre + texto preto   (para fundos claros)
// só símbolo (monograma) com simbolo={true}
export default function Logo({ className = '', variant = 'dark', simbolo = false }) {
  let src
  if (simbolo) src = '/logo-mcb-simbolo.png'
  else if (variant === 'light') src = '/logo-mcb-light.png'
  else src = '/logo-mcb-full.png'

  return (
    <img
      src={src}
      alt="Móveis Castelo Branco"
      className={`w-auto select-none ${className}`}
      draggable="false"
    />
  )
}
