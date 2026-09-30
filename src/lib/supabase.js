// As credenciais vêm de variáveis de ambiente (arquivo .env na raiz).
// Veja .env.example. Use a URL do projeto e a chave ANON (pública), nunca a service_role.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseAtivo = Boolean(supabaseUrl && supabaseAnonKey)

// O cliente do Supabase só é carregado quando alguém envia o formulário:
// deixa as páginas mais leves e não roda nada no build.
let cliente = null
async function getCliente() {
  if (!supabaseAtivo) return null
  if (!cliente) {
    const { createClient } = await import('@supabase/supabase-js')
    cliente = createClient(supabaseUrl, supabaseAnonKey)
  }
  return cliente
}

/**
 * Salva um lead de orçamento na tabela `leads` do Supabase.
 * @param {{nome:string, telefone:string, email:string, ambiente:string, mensagem:string}} dados
 * @returns {Promise<{ok:boolean, erro?:string}>}
 */
export async function salvarLead(dados) {
  const supabase = await getCliente()
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

// Chamado quando a pessoa começa a preencher o formulário: já baixa o cliente
// para o envio não demorar (e o WhatsApp abrir sem ser bloqueado).
export function preaquecerSupabase() {
  getCliente().catch(() => {})
}
