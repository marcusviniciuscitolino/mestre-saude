# Como adicionar um curso na home (modelo de card padrão)

Este projeto lista os cursos na seção **Meus cursos** (`#cursos`), em [`src/components/sections/courses/CoursesSection.tsx`](../src/components/sections/courses/CoursesSection.tsx). O curso em destaque (Protocolos) usa um **card em linha inteira**; os demais seguem o modelo padrão (ícone, nível, selo opcional, título, descrição, preço, chips de duração/certificado, botão **Acessar página do curso**).

**Curso em destaque (fixed):** o curso **Protocolos Assistenciais nos Cuidados de Enfermagem** (`id: 'curso-protocolos-assistenciais'`) deve **sempre** ser o primeiro item do array `courses` e ter `featured: true`. Ele aparece em layout largo (linha inteira) na seção `#cursos`. Não remova esse destaque nem coloque outro curso antes dele sem alinhar com o time.

---

## 1. Registrar o curso em `courses.config.ts`

Arquivo: [`src/config/courses.config.ts`](../src/config/courses.config.ts).

Adicione um novo objeto no array `courses` **depois** do curso em destaque (`curso-protocolos-assistenciais`). A ordem no array é a ordem dos cards no grid (o item com `featured: true` é sempre renderizado primeiro, em linha inteira).

Tipo TypeScript: [`CourseItem`](../src/types/content.ts) em `src/types/content.ts`.

### Campos obrigatórios

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `id` | Identificador único em kebab-case ou similar (usado para ícone opcional) | `'curso-protocolos-assistenciais'` |
| `title` | Título do curso | `'Protocolos Assistenciais nos Cuidados de Enfermagem'` |
| `description` | Parágrafo curto abaixo do título | Texto retirado do material / página do curso |
| `level` | Nível exibido em caixa alta pequena (“INTERMEDIÁRIO”, “Todos os níveis”, etc.) | `'Todos os níveis'` |
| `duration` | Carga horária mostrada no chip com relógio | `'30 h'` |
| `href` | URL absoluta da página do curso (checkout ou landing) | `https://...` |

### Campos opcionais

| Campo | Descrição |
|-------|-----------|
| `priceFrom` | Preço ou “de”; formato livre, ex. `'R$ 69,90'` |
| `priceTo` | Se existir **junto com** `priceFrom`, o card mostra `priceFrom` riscado e **A partir de** + valor destacado com `priceTo` |
| `badge` | Um de: `'novo'` \| `'popular'` \| `'mais-procurado'` (rótulo dourado no card) |
| `trailId` | Id de uma trilha em [`src/config/trails.config.ts`](../src/config/trails.config.ts); quando definido, aparece o texto “Conteúdo alinhado à trilha …” com link para `#trilhas` |
| `featured` | `true` só para o curso de Protocolos em destaque; **no máximo um** curso com essa flag. O card ocupa a largura total com layout horizontal diferenciado |

### Regra do destaque (`featured`)

- Somente **`curso-protocolos-assistenciais`** deve usar `featured: true`.
- Esse objeto deve permanecer como **primeiro** no array `courses`.
- **Não** adicione `featured: true` em outros cursos.

### Exemplo real (curso Protocolos)

Este foi o padrão usado ao adicionar o curso de Protocolos Assistenciais:

```typescript
{
  id: 'curso-protocolos-assistenciais',
  featured: true,
  title: 'Protocolos Assistenciais nos Cuidados de Enfermagem',
  description:
    'Curso que ensina você a dominar os principais protocolos assistenciais da enfermagem, aumentando sua segurança e reduzindo erros no plantão.',
  level: 'Todos os níveis',
  duration: '30 h',
  href: 'https://cursos.aprimorandoenfermagem.com.br/protocolos-assistenciais-nos-cuidados-de-enfermagem',
  priceFrom: 'R$ 69,90',
  priceTo: 'R$ 39,90',
  badge: 'novo',
},
```

- **Destaque:** `featured: true` no Protocolos faz o card aparecer primeiro, em linha inteira, com borda em destaque.
- **Promoção:** `priceFrom` + `priceTo` aciona o layout promocional automaticamente no card (sem alterar o layout geral do site).
- **Botão:** o texto do botão é sempre **Acessar página do curso**; o destino é sempre `href` (abre em nova aba).

---

## 2. (Opcional) Ícone do card em `CoursesSection.tsx`

Arquivo: [`src/components/sections/courses/CoursesSection.tsx`](../src/components/sections/courses/CoursesSection.tsx).

No objeto `courseIcons`, associe o mesmo `id` do curso a um ícone do [Lucide](https://lucide.dev/icons):

1. Importe o ícone no topo do arquivo (ex.: `ClipboardList`).
2. Adicione a linha: `'seu-id-de-curso': NomeDoIcone`.

Se você **não** mapear o `id`, o card usa `GraduationCap` como padrão.

Exemplo usado no curso Protocolos:

```typescript
'curso-protocolos-assistenciais': ClipboardList,
```

---

## 3. (Opcional) Vínculo com trilha

Se o curso faz parte de um combo listado em [`src/config/trails.config.ts`](../src/config/trails.config.ts), inclua `trailId` com o **`id`** da trilha (ex.: `'mega-combo-enfermagem'`). O título amigável da trilha é resolvido por `getTrailTitleById`.

---

## 4. O que o código faz sozinho

- **Grid:** o(s) curso(s) com `featured: true` aparecem primeiro, em **linha inteira** (`col-span-full`); os demais seguem na grade responsiva (`md:grid-cols-2` / `lg:grid-cols-3`).
- **SEO:** [`src/lib/seo-jsonld.ts`](../src/lib/seo-jsonld.ts) gera entradas `Course` no JSON-LD da home a partir do mesmo array (`name`, `description`, `url` = `href`).
- **Contagem “Cursos disponíveis”:** outros trechos usam `courses.length` (ex.: faixa de provas sociais).

---

## Checklist rápido

1. [ ] Manter `curso-protocolos-assistenciais` como **primeiro** com `featured: true` (não alterar sem combinado).
2. [ ] Novo objeto em `courses` em [`courses.config.ts`](../src/config/courses.config.ts) com `id`, `title`, `description`, `level`, `duration`, `href`.
3. [ ] Preços: só `priceFrom` **ou** par `priceFrom` + `priceTo` para promo.
4. [ ] `badge` e `trailId` só se fizer sentido; **não** usar `featured` em cursos novos.
5. [ ] (Opcional) Entrada em `courseIcons` + import Lucide em [`CoursesSection.tsx`](../src/components/sections/courses/CoursesSection.tsx).
6. [ ] Rodar `npm run build` para garantir que não há erro de TypeScript.

---

## Quando você mandar a imagem “no modelo antigo”

Envie o print ou arte de referência **do card** (título, texto, preço, horas, link desejado). Quem implementar deve apenas **transcrever** esses dados para o objeto em `courses.config.ts` e repetir o passo opcional do ícone — **sem** criar banner horizontal nem arquivo de imagem obrigatório para o card padrão.
