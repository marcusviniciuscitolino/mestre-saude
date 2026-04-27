# Mestre em Saúde — Site

Landing + blog em **React 19**, **Vite 8**, **TypeScript**, **Tailwind CSS v4** e **MDX** (posts em `src/content/blog/`).

## Scripts

- `npm run start` — servidor de desenvolvimento
- `npm run build` — build de produção (`dist/`)
- `npm run preview` — preview do build
- `npm run lint` — ESLint

## Configuração

1. Copie [`.env.example`](.env.example) para `.env` e preencha `VITE_SITE_URL` (URL pública, sem barra final) para canonical, Open Graph e JSON-LD.
2. Ajuste [`src/config/site.config.ts`](src/config/site.config.ts) (COREN, e-mail, WhatsApp).
3. **Lead / e-mail:** `VITE_LEAD_PROVIDER` + `VITE_LEAD_ENDPOINT` (ex.: Formspree) ou `whatsapp` para só abrir conversa com texto preenchido.
4. **Trilhas e cursos:** URLs em [`src/config/trails.config.ts`](src/config/trails.config.ts) e [`src/config/courses.config.ts`](src/config/courses.config.ts).

## Blog

Adicione arquivos `.mdx` em `src/content/blog/` com:

```mdx
export const frontmatter = {
  slug: 'meu-post',
  title: 'Título',
  excerpt: '...',
  category: 'Clínica',
  publishedAt: '2025-12-01',
  cover: 'images/nome.svg',
}

Conteúdo em Markdown/MDX aqui.
```

## Deploy

O `base` do Vite está em `/mestre-saude/` ([`vite.config.ts`](vite.config.ts)). Ajuste se o site for servido na raiz do domínio.
