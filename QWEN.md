# Orcia Studio Site

## Visão Geral

Site institucional da **Orcia Studio**, construído com React + TypeScript + Vite, utilizando **shadcn-ui** para componentes e **Tailwind CSS** para estilização. O site faz deploy de páginas de produtos, informações da empresa, FAQ, formulário de contato e oportunidades de trabalho.

### Tecnologias Principais

- **Vite** — build e dev server
- **TypeScript** — tipagem estática
- **React 18** — UI library
- **React Router DOM** — roteamento SPA
- **TanStack React Query** — gerenciamento de estado de dados
- **shadcn-ui + Radix UI** — componentes de UI acessíveis
- **Tailwind CSS** — styling utility-first
- **Lucide React** — ícones
- **React Hook Form** — validação de formulários
- **Sonner** — notificações toast

## Estrutura de Diretórios

```
orcia-studio-site/
├── public/                 # Assets estáticos (copiados para dist sem build)
├── scripts/
│   └── optimize-images.js  # Script de otimização de imagens (sharp)
├── src/
│   ├── assets/             # Imagens e assets importados via ES modules
│   ├── components/
│   │   ├── ui/             # Componentes shadcn-ui (toaster, tooltip, etc.)
│   │   ├── Layout.tsx      # Layout principal da aplicação
│   │   └── Seo.tsx         # Componente de SEO/meta tags
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilitários e configurações (ex: utils de cn)
│   ├── pages/
│   │   ├── Index.tsx       # Página inicial
│   │   ├── Produtos.tsx    # Listagem de produtos
│   │   ├── Luce.tsx        # Página do produto Luce
│   │   ├── Vitta.tsx       # Página do produto Vitta
│   │   ├── Siena.tsx       # Página do produto Siena
│   │   ├── Sobre.tsx       # Página Sobre
│   │   ├── FAQ.tsx         # Página de Perguntas Frequentes
│   │   ├── Contato.tsx     # Formulário de contato
│   │   ├── TrabalheConosco.tsx  # Página de carreiras
│   │   ├── success.tsx     # Página de sucesso (ex: formulário enviado)
│   │   └── NotFound.tsx    # Página 404
│   ├── App.tsx             # Configuração de rotas (React Router)
│   ├── App.css             # Estilos globais específicos
│   ├── index.css           # CSS entry com diretivas Tailwind
│   ├── main.tsx            # Entry point React
│   └── vite-env.d.ts       # Type declarations para Vite
├── index.html              # HTML template base
├── vite.config.ts          # Configuração Vite (alias @, porta 8080)
├── tailwind.config.ts      # Configuração Tailwind (custom colors, fonts)
├── tsconfig.json           # Configuração TypeScript (project references)
├── eslint.config.js        # ESLint Flat Config
├── postcss.config.js       # PostCSS (autoprefixer)
└── package.json
```

## Rotas da Aplicação

| Rota                  | Página              | Descrição                     |
|-----------------------|---------------------|-------------------------------|
| `/`                   | Index               | Página inicial / home         |
| `/produtos`           | Produtos            | Catálogo de produtos          |
| `/produtos/luce`      | Luce                | Página do produto Luce        |
| `/produtos/vitta`     | Vitta               | Página do produto Vitta       |
| `/produtos/siena`     | Siena               | Página do produto Siena       |
| `/sobre`              | Sobre               | Informações sobre a empresa   |
| `/faq`                | FAQ                 | Perguntas frequentes          |
| `/trabalhe-conosco`   | TrabalheConosco     | Página de carreiras           |
| `/contato`            | Contato             | Formulário de contato         |
| `*`                   | NotFound            | Página 404                    |

## Comandos Úteis

```sh
# Instalar dependências
npm install

# Servidor de desenvolvimento (porta 8080)
npm run dev

# Build de produção
npm run build

# Build modo desenvolvimento
npm run build:dev

# Preview do build de produção
npm run preview

# Lint
npm run lint

# Otimizar imagens
npm run optimize-images
```

## Convenções do Projeto

- **Path Alias**: `@/` mapeia para `src/` (ex: `@/components/ui/button.tsx`)
- **shadcn-ui**: Componentes UI são adicionados localmente em `src/components/ui/`
- **Tailwind**: Configuração customizada com fontes (Playfair Display, Inter) e cores CSS variables
- **Lazy Loading**: Páginas são carregadas com `lazy()` + `Suspense` para code splitting
- **Dark Mode**: Suporte via classe CSS (`darkMode: ["class"]`)
- **Gerenciamento de Estado**: React Query para data fetching, React Context para temas

## Notas de Deploy

- Deploy via **Netlify** conectado ao repositório GitHub
- Build gera output no diretório `dist/`
