import { createClient } from '@supabase/supabase-js'

// As credenciais vêm de variáveis de ambiente (arquivo .env na raiz).
// Veja .env.example. Use a URL do projeto e a chave ANON (pública), nunca a service_role.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Só cria o client se as credenciais existirem — assim o site funciona
// mesmo antes de você plugar o Supabase (cai no fallback de WhatsApp).
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export const supabaseAtivo = Boolean(supabase)

/**
 * Salva um lead de orçamento na tabela `leads` do Supabase.
 * @param {{nome:string, telefone:string, email:string, ambiente:string, mensagem:string}} dados
 * @returns {Promise<{ok:boolean, erro?:string}>}
 */
export async function salvarLead(dados) {
  if (!supabase) {
    return { ok: false, erro: 'Supabase não configurado' }
  }
  const { error } = await supabase.from('leads').insert([
    {
      nome: dados.nome,
      telefone: dados.telefone,
      email: dados.email || null,
      ambiente: dados.ambiente || null,
      mensagem: dados.mensagem || null,
      origem: 'site',
    },
  ])
  if (error) {
    return { ok: false, erro: error.message }
  }
  return { ok: true }
}
