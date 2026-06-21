-- ============================================================
-- Tabela de leads do site Móveis Castelo Branco
-- Rode no Supabase: Dashboard > SQL Editor > New query > Run
-- ============================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  telefone    text not null,
  email       text,
  ambiente    text,
  mensagem    text,
  origem      text default 'site',
  created_at  timestamptz not null default now()
);

-- Índice para ordenar os leads mais recentes
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- ============================================================
-- Row Level Security (RLS)
-- O site usa a chave ANON (pública) apenas para INSERIR leads.
-- Ninguém consegue LER os leads com a chave pública — só você,
-- logado no painel do Supabase ou com a service_role.
-- ============================================================

alter table public.leads enable row level security;

-- Permite que qualquer visitante (chave anon) INSIRA um lead
drop policy if exists "permitir insert publico de leads" on public.leads;
create policy "permitir insert publico de leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- (Opcional) Caso queira ler os leads via API autenticada, crie política de select
-- só para usuários autenticados. Por padrão, leitura fica restrita ao painel.
