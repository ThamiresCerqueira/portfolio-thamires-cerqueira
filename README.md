# Portfólio Profissional — Thamires Cerqueira

Portfólio moderno, responsivo e interativo de **Thamires Cerqueira**, com foco em **Estratégia de Conteúdo, SEO, Redes Sociais, Marketing e Copywriting**.

---

## ✨ Principais Melhorias Implementadas

1. **Navegação com Modal Dinâmico (SPA)**:
   - Substituição de páginas avulsas por uma experiência fluida com **Modais de Detalhes completos**.
   - O visitante visualiza o desafio, a estratégia adotada, entregáveis com checklist, resultados/métricas e navega pela galeria de imagens sem sair da página.
   - Navegação facilitada com botões de *"Projeto Anterior"* e *"Próximo Projeto"*, além de suporte a atalhos de teclado (`ESC` para fechar e `←` / `→` para navegar).

2. **Case de Destaque: Bancou**:
   - Case completo de construção de marketing, persona do mascote **Kou**, inbound marketing e **estratégia de SEO do zero** para a plataforma gamificada de concursos públicos ([bancou.app.br](https://bancou.app.br/)).
   - Banner de apresentação em destaque e link direto para a plataforma.

3. **Inclusão de Artigos & Ensaios Autorais**:
   - Integração da newsletter e ensaios do **Código da Comunicação** no Substack ([codigodacomunicacao.substack.com](https://codigodacomunicacao.substack.com)).

4. **Sistema de Filtros Interativos**:
   - Filtros instantâneos por categoria com contagem automática de projetos:
     - **Todos (7)**
     - **Estratégia & SEO**
     - **Campanhas & Copy**
     - **Artigos & Ensaios**

5. **Design e Micro-Interações**:
   - Efeito suave de reveal ao rolar a página (*Intersection Observer* nativo e leve).
   - Menu mobile drawer responsivo e acessível.
   - Botão para copiar e-mail com 1 clique e notificação toast.
   - Botão direto para conversa no WhatsApp com mensagem de apresentação pronta.
   - Seção de Serviços aprimorada com os GIFs animados e detalhamento de entregáveis.

---

## 📁 Estrutura de Arquivos Organizada

```text
portfolio-thamires-cerqueira/
│
├── index.html                    # Página principal do portfólio (Single Page com Modais)
├── README.md                     # Documentação e guia de uso
│
└── assets/
    ├── icone1.png                # Favicon
    ├── seta.png                  # Ícone de rolagem do Hero
    │
    ├── css/
    │   └── style.css             # Folha de estilo completa e responsiva
    │
    ├── js/
    │   ├── projects-data.js      # Catálogo de dados dos projetos (fácil de editar!)
    │   └── main.js               # Lógica de renderização, filtros, modal e animações
    │
    ├── fonts/
    │   └── Brown Sugar .ttf      # Tipografia autoral dos títulos
    │
    ├── gifs/                     # GIFs animados de serviços
    │   ├── branding.gif
    │   ├── copy.gif
    │   ├── criacao.gif
    │   ├── estrategia.gif
    │   ├── social.gif
    │   └── ui-ux.gif
    │
    └── imagens/                  # Imagens e capas dos cases
        ├── bancou-case.png       # Case Bancou (Marketing & SEO do Zero)
        ├── codigo-comunicacao.png# Artigos / Newsletter Substack
        ├── jeep.png              # Anúncios Jeep
        ├── TítuloJeep2.png
        ├── TítuloJeep3.png
        ├── mequicaminhada.png    # McDonald's
        ├── Nike-longcopy.png     # Nike
        ├── oakley-copy-...png    # Oakley
        ├── Portfólio Thamires.png# Foto de perfil
        └── spotify.png           # Spotify
```

---

## 🚀 Como Adicionar Novos Projetos (Super Fácil)

Todos os projetos são gerenciados no arquivo [`assets/js/projects-data.js`](assets/js/projects-data.js).

Para adicionar um novo projeto (seja um artigo, post, campanha ou trabalho completo):

1. Abra o arquivo `assets/js/projects-data.js`.
2. Adicione um novo objeto dentro do array `PORTFOLIO_PROJECTS`:

```javascript
{
  id: 'novo-case',
  title: 'Nome do Projeto ou Campanha',
  client: 'Nome do Cliente / Marca',
  category: 'estrategia', // Opções: 'estrategia' | 'campanhas' | 'artigos'
  categoryLabel: 'Estratégia & SEO',
  badge: 'Case de Sucesso',
  accentColor: '#ff007f',
  coverImage: 'assets/imagens/minha-imagem.png',
  summary: 'Resumo em 1 ou 2 frases que aparece no card.',
  challenge: 'Qual era o desafio principal.',
  strategy: 'Como foi planejada e executada a estratégia.',
  deliverables: [
    'Entregável 1',
    'Entregável 2',
    'Entregável 3'
  ],
  results: 'Resultados ou impacto obtidos.',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  link: 'https://link-do-projeto.com', // opcional
  linkText: 'Ver Projeto ao Vivo',     // opcional
  gallery: [
    {
      src: 'assets/imagens/minha-imagem.png',
      title: 'Título da Peça',
      caption: 'Legenda explicativa.'
    }
  ]
}
```

3. Salve o arquivo. O card e o modal serão renderizados automaticamente, com contadores de filtro atualizados!

---

## 🌐 Publicação no GitHub Pages

O projeto está pronto para publicação:
- `index.html` na raiz do repositório garante funcionamento imediato.
- Caminhos relativos testados para compatibilidade total com repositórios GitHub Pages.
