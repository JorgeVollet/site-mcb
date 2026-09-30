import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaDaPagina, jsonLdTexto } from '../lib/seo'

// Mantém <title>, descrição, canonical, Open Graph e JSON-LD em dia quando a
// navegação acontece dentro do site (sem recarregar). No primeiro carregamento
// o HTML já vem pronto do build, com as mesmas informações.

function setMeta(attr, chave, valor) {
  let el = document.head.querySelector(`meta[${attr}="${chave}"]`)
  if (valor == null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, chave)
    document.head.appendChild(el)
  }
  el.setAttribute('content', valor)
}

export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const m = metaDaPagina(pathname)
    document.title = m.title
    setMeta('name', 'description', m.description)
    setMeta('name', 'robots', m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:type', m.type)
    setMeta('property', 'og:title', m.title)
    setMeta('property', 'og:description', m.description)
    setMeta('property', 'og:url', m.canonical)
    setMeta('property', 'og:image', m.image)
    setMeta('property', 'og:image:alt', m.imageAlt)
    setMeta('name', 'twitter:title', m.title)
    setMeta('name', 'twitter:description', m.description)
    setMeta('name', 'twitter:image', m.image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (m.canonical) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = m.canonical
    } else {
      canonical?.remove()
    }

    let ld = document.getElementById('ld-json')
    if (!ld) {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.id = 'ld-json'
      document.head.appendChild(ld)
    }
    ld.textContent = jsonLdTexto(m.jsonLd)
  }, [pathname])

  return null
}
