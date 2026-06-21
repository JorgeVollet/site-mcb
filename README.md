# Móveis Castelo Branco — Site

Site institucional da **Móveis Castelo Branco** (MCB), marcenaria sob medida em Três de Maio/RS.
Construído com **React + Vite + Tailwind CSS**, animações com **Framer Motion**, formulário de orçamento integrado ao **Supabase** e atalhos diretos para o **WhatsApp**.

Estética: minimalista claro com quebras no cinza da marca (`#989898`) e acento madeira/cobre (`#b47b53`). Logo e fotos são os arquivos reais da empresa.

---

## Rodando localmente

Pré-requisito: Node.js 18+ instalado.

```bash
npm install     # instala as dependências
npm run dev     # sobe o servidor de desenvolvimento (http://localhost:5173)
```

Para gerar a versão de produção:

```bash
npm run build   # gera a pasta dist/
npm run preview # testa a build localmente
```

> A pasta `dist/` já vem com uma build pronta. Mesmo assim, rode `npm install` antes de desenvolver.

---

## Configurar o Supabase (formulário de orçamento)

O formulário salva os leads no seu Supabase **e** abre o WhatsApp com os dados preenchidos.
Enquanto o Supabase não estiver configurado, o site funciona normalmente e segue direto para o WhatsApp.

### 1. Criar a tabela

No painel do Supabase: **SQL Editor → New query**, cole o conteúdo de
[`supabase-leads.sql`](./supabase-leads.sql) e clique em **Run**.
Isso cria a tabela `leads` com RLS: visitantes só podem **inserir**; a leitura fica restrita ao seu painel.

### 2. Informar as credenciais

Copie `.env.example` para `.env` e preencha:

```
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

Pegue em **Supabase → Project Settings → API**. Use a chave **anon public** (nunca a `service_role`).

---

## Contatos do WhatsApp

Os botões de WhatsApp já apontam para:

- **Ademir Noronha** (Fundador) — (55) 9 9622-7124
- **Ana Laura** (Projetista) — (55) 9 9994-2637

Para alterar, edite `src/lib/siteData.js` (campo `contatos`).

---

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente (já há um `vercel.json`).
4. Em **Settings → Environment Variables**, adicione `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
5. **Deploy**. Pronto.

Para o domínio `moveiscastelobranco.com.br`, aponte o DNS conforme as instruções da Vercel em **Settings → Domains**.

---

## Estrutura

```
public/
  logo-mcb.svg            logo oficial (cinza da marca)
  logo-mcb-mono.svg       logo que herda a cor (currentColor)
  favicon.ico
  fonts/                  fontes da marca (Bw Modelica, Juicy Pro)
  fotos/                  fotos reais dos projetos
src/
  components/             Navbar, Logo, Reveal, MagneticButton, WhatsAppFloat
  sections/               Hero, Sobre, Pilares, Ambientes, Portfolio, Depoimentos, Contato, Footer
  lib/                    siteData.js (conteúdo) · supabase.js (integração)
  hooks/                  useReveal.js
supabase-leads.sql        script da tabela de leads
.env.example              modelo das variáveis de ambiente
vercel.json               configuração de deploy
```

---

## Personalizando o conteúdo

Quase tudo (textos, ambientes, portfólio, depoimentos, contatos) está centralizado em
**`src/lib/siteData.js`** — edite lá sem precisar mexer nos componentes.

Para trocar fotos: substitua os arquivos em `public/fotos/` mantendo o nome, ou edite os
caminhos em `siteData.js`.
