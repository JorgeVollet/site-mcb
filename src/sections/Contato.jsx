import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Loader2,
  MessageCircle,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { salvarLead } from '../lib/supabase'
import { empresa, contatos, ambientes } from '../lib/siteData'

const estadoInicial = {
  nome: '',
  telefone: '',
  email: '',
  ambiente: '',
  mensagem: '',
}

// Monta a mensagem pré-preenchida pro WhatsApp
function montarMensagemWhats(dados) {
  const linhas = [
    'Olá! Gostaria de solicitar um orçamento na Móveis Castelo Branco.',
    '',
    `*Nome:* ${dados.nome || '-'}`,
    `*Telefone:* ${dados.telefone || '-'}`,
  ]
  if (dados.email) linhas.push(`*E-mail:* ${dados.email}`)
  if (dados.ambiente) linhas.push(`*Ambiente:* ${dados.ambiente}`)
  if (dados.mensagem) linhas.push(`*Mensagem:* ${dados.mensagem}`)
  return encodeURIComponent(linhas.join('\n'))
}

export default function Contato() {
  const [form, setForm] = useState(estadoInicial)
  const [status, setStatus] = useState('idle') // idle | enviando | ok | erro
  const [erro, setErro] = useState('')

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const abrirWhatsApp = (numero) => {
    const msg = montarMensagemWhats(form)
    window.open(`https://wa.me/${numero}?text=${msg}`, '_blank', 'noopener')
  }

  async function onSubmit(e) {
    e.preventDefault()
    setErro('')
    if (!form.nome.trim() || !form.telefone.trim()) {
      setErro('Por favor, preencha pelo menos o nome e o telefone.')
      return
    }
    setStatus('enviando')

    // Tenta salvar no Supabase (se configurado). O envio nunca trava o usuário:
    // mesmo sem banco, seguimos para o WhatsApp.
    const res = await salvarLead(form)
    if (!res.ok && res.erro !== 'Supabase não configurado') {
      // Erro real de banco — avisa mas ainda permite o WhatsApp
      setErro('Não foi possível registrar agora, mas você pode falar direto no WhatsApp abaixo.')
    }

    setStatus('ok')
    // Abre o WhatsApp do Ademir automaticamente
    abrirWhatsApp(contatos[0].whatsapp)
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-mcb-gray-800 py-24 text-cream sm:py-32">
      <div className="glow-wood pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lado esquerdo: info + WhatsApp direto */}
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest2 text-wood-300">
                Vamos conversar
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Quer fazer um orçamento?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-mcb-gray-300">
                Conte o que você sonha e a gente projeta. Fale direto com a nossa
                equipe pelo WhatsApp ou preencha o formulário.
              </p>
            </Reveal>

            {/* Botões WhatsApp diretos */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {contatos.map((c) => (
                  <button
                    key={c.whatsapp}
                    onClick={() => abrirWhatsApp(c.whatsapp)}
                    className="group flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-wood-500/40"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-wood-500/15 text-wood-300 transition-colors group-hover:bg-wood-500 group-hover:text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-cream">{c.nome}</div>
                      <div className="text-xs text-mcb-gray-400">
                        {c.cargo} · {c.whatsappLabel}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Dados de contato */}
            <Reveal delay={0.25}>
              <ul className="mt-10 space-y-4 text-mcb-gray-300">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-wood-400" />
                  {empresa.telefoneFixo}
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-wood-400" />
                  {empresa.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-wood-400" />
                  {empresa.endereco}
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Lado direito: formulário */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md sm:p-9"
            >
              {status === 'ok' ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-wood-500 text-white">
                    <Check size={30} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">Pedido recebido!</h3>
                  <p className="mt-3 max-w-xs text-mcb-gray-300">
                    Abrimos o WhatsApp pra você concluir o orçamento com o Ademir.
                    Se não abriu, use os botões ao lado.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(estadoInicial)
                      setStatus('idle')
                    }}
                    className="mt-6 text-sm font-medium uppercase tracking-widest text-wood-300 hover:text-wood-200"
                  >
                    Enviar outro
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Campo
                      label="Nome *"
                      name="nome"
                      value={form.nome}
                      onChange={onChange}
                      placeholder="Seu nome"
                    />
                    <Campo
                      label="Telefone / WhatsApp *"
                      name="telefone"
                      value={form.telefone}
                      onChange={onChange}
                      placeholder="(55) 9 ..."
                    />
                  </div>
                  <div className="mt-4">
                    <Campo
                      label="E-mail"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-mcb-gray-400">
                      Ambiente de interesse
                    </label>
                    <select
                      name="ambiente"
                      value={form.ambiente}
                      onChange={onChange}
                      className="w-full rounded-xl border border-white/10 bg-mcb-gray-900/40 px-4 py-3 text-cream outline-none transition-colors focus:border-wood-500"
                    >
                      <option value="">Selecione…</option>
                      {ambientes.map((a) => (
                        <option key={a.id} value={a.nome}>
                          {a.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-mcb-gray-400">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={onChange}
                      rows={4}
                      placeholder="Conte o que você precisa…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-mcb-gray-900/40 px-4 py-3 text-cream outline-none transition-colors placeholder:text-mcb-gray-500 focus:border-wood-500"
                    />
                  </div>

                  {erro && (
                    <p className="mt-4 rounded-lg bg-wood-500/15 px-4 py-3 text-sm text-wood-200">
                      {erro}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'enviando'}
                    className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'enviando' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar e abrir WhatsApp
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center text-xs text-mcb-gray-500">
                    Ao enviar, abriremos uma conversa no WhatsApp com seus dados já
                    preenchidos.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Campo({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-mcb-gray-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-mcb-gray-900/40 px-4 py-3 text-cream outline-none transition-colors placeholder:text-mcb-gray-500 focus:border-wood-500"
      />
    </div>
  )
}
