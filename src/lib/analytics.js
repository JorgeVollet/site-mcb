// ─── Umami Analytics ────────────────────────────────────────────────
// Cole aqui o "Website ID" que aparece no painel do Umami
// (Settings → Websites → Edit → Website ID). Vazio = analytics desligado.
export const UMAMI_WEBSITE_ID = 'f53b705a-64f1-4cb1-b86a-9bbbb223827d'
const UMAMI_SCRIPT = 'https://cloud.umami.is/script.js'
// Só conta visitas no domínio de produção (não suja os dados com localhost)
const DOMINIOS = 'moveiscastelobranco.com.br,www.moveiscastelobranco.com.br'
// ─────────────────────────────────────────────────────────────────────

import { contatos } from './siteData'

// Eventos disparados antes do script do Umami carregar ficam numa fila
const fila = []
let flushAgendado = false
function flush() {
  if (window.umami?.track) {
    while (fila.length) {
      const [ev, d] = fila.shift()
      try { window.umami.track(ev, d) } catch { /* ignora */ }
    }
    return
  }
  // tenta de novo por até ~10s
  if (flush.tentativas++ < 40) setTimeout(flush, 250)
}
flush.tentativas = 0

// Envia um evento pro Umami. Seguro de chamar mesmo se o script não carregou.
export function track(evento, dados) {
  if (typeof window === 'undefined' || !UMAMI_WEBSITE_ID) return
  try {
    if (window.umami?.track) return window.umami.track(evento, dados)
    fila.push([evento, dados])
    if (!flushAgendado) {
      flushAgendado = true
      flush()
    }
  } catch {
    /* nunca quebrar o site por causa de analytics */
  }
}

function nomeDoContato(numero) {
  const c = contatos.find((x) => x.whatsapp === numero)
  return c ? c.nome : numero
}

// Descobre de qual parte do site veio o clique
function origemDoClique(el) {
  const marcada = el.closest('[data-origem]')
  if (marcada) return marcada.getAttribute('data-origem')
  if (el.closest('[role="dialog"]')) return 'aviso-agenda'
  if (el.closest('footer')) return 'rodape'
  if (el.closest('nav, header')) return 'menu'
  const secao = el.closest('section[id]')
  if (secao) return secao.id
  return window.location.pathname
}

// Clique num link de WhatsApp (usado também por botões que abrem via window.open)
export function trackWhatsApp(numero, origem) {
  track('whatsapp', {
    contato: nomeDoContato(numero),
    origem,
    pagina: window.location.pathname,
  })
}

// Captura global: qualquer <a> de WhatsApp, telefone, e-mail ou redes sociais
function onClickGlobal(e) {
  const a = e.target.closest?.('a[href]')
  if (!a) return
  const href = a.getAttribute('href') || ''
  const origem = origemDoClique(a)
  const pagina = window.location.pathname

  const wa = href.match(/wa\.me\/(\d+)/)
  if (wa) return trackWhatsApp(wa[1], origem)
  if (href.startsWith('tel:')) return track('telefone', { origem, pagina })
  if (href.startsWith('mailto:')) return track('email', { origem, pagina })
  if (/instagram\.com/.test(href)) return track('instagram', { origem, pagina })
  if (/facebook\.com/.test(href)) return track('facebook', { origem, pagina })
  if (/#contato$/.test(href)) return track('botao-orcamento', { origem, pagina })
}

let iniciado = false
export function iniciarAnalytics() {
  if (iniciado || typeof window === 'undefined') return
  iniciado = true

  document.addEventListener('click', onClickGlobal, { capture: true })

  if (!UMAMI_WEBSITE_ID) return
  const s = document.createElement('script')
  s.defer = true
  s.src = UMAMI_SCRIPT
  s.setAttribute('data-website-id', UMAMI_WEBSITE_ID)
  s.setAttribute('data-domains', DOMINIOS)
  document.head.appendChild(s)
}
