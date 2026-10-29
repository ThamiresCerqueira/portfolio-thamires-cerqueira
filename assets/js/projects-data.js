/**
 * CATÁLOGO DE PROJETOS - THAMIRES CERQUEIRA
 * ==============================================================================
 * Para adicionar um novo projeto ao portfólio, basta duplicar um dos blocos
 * abaixo e preencher com as informações do novo trabalho.
 * 
 * CAMPOS DISPONÍVEIS:
 * - id: Identificador único em minúsculas e sem espaços (ex: 'meu-projeto')
 * - title: Nome do projeto exibido nos títulos
 * - client: Nome do cliente ou marca
 * - category: 'estrategia' | 'campanhas' | 'social' | 'artigos'
 * - categoryLabel: Rótulo legível da categoria (ex: 'Estratégia & SEO')
 * - badge: Etiqueta em destaque no card (ex: 'Case Completo', 'Destaque', 'Artigo')
 * - coverImage: Caminho da imagem principal para o card
 * - summary: Resumo de 1 ou 2 frases exibido na listagem
 * - challenge: Descrição do desafio do projeto
 * - strategy: Estratégia desenvolvida e passos executados
 * - deliverables: Lista de entregáveis / frentes de atuação (array de strings)
 * - results: Resultados alcançados ou impacto gerado
 * - tags: Lista de tags/habilidades envolvidas (array de strings)
 * - link: (Opcional) Link externo para o site, app ou publicação
 * - linkText: (Opcional) Texto do botão de link externo
 * - gallery: Lista de imagens com legendas para o modal
 * ==============================================================================
 */

const PORTFOLIO_PROJECTS = [
  {
    id: 'bancou',
    title: 'Bancou — Plataforma Gamificada de Concursos',
    client: 'Bancou',
    category: 'estrategia',
    categoryLabel: 'Estratégia & SEO',
    badge: 'Case Completo do Zero',
    accentColor: '#7c3aed',
    coverImage: 'assets/imagens/bancou-case.png',
    summary: 'Construção completa da estratégia de marketing, aquisição orgânica de concurseiros e arquitetura de SEO desenvolvida do absoluto zero.',
    challenge: 'Lançar uma nova plataforma gamificada em um mercado altamente concorrido por players consolidados, com a missão de atrair concurseiros de todo o Brasil sem depender de orçamentos massivos de tráfego pago, gerando tração e retenção orgânica.',
    strategy: 'Mapeamento profundo do perfil de estudo dos concurseiros (ansiedade, busca por constância e sensação de progresso). Desenvolvemos a persona da marca e o mascote "Kou" como elemento humanizador e lúdico. Estruturamos a estratégia de SEO técnico e de conteúdo com mais de centenas de clusters de palavras-chave focadas em bancas examinadoras (FGV, Cebraspe, FCC), disciplinas e questões comentadas. Aliamos isso ao inbound marketing conectado aos recursos de gamificação (streaks, desafios diários e XP).',
    deliverables: [
      'Planejamento de Marketing Estratégico do Zero',
      'Arquitetura de SEO e Mapeamento de Palavras-Chave de Alta Intenção',
      'Branding Verbal e Tom de Voz Humanizado com o Mascote Kou',
      'Estratégia de Inbound Content e Gamificação de Retenção',
      'Alinhamento de Conteúdo e UX com a Experiência do App'
    ],
    results: 'Posicionamento rápido nas buscas orgânicas de questões de concursos, atração sustentável de novos concurseiros e alta retenção com mecânicas diárias de estudo sem custo de aquisição pago.',
    tags: ['Estratégia do Zero', 'SEO & Tráfego Orgânico', 'Inbound Marketing', 'Gamificação', 'Branding & Personas'],
    link: 'https://bancou.app.br/',
    linkText: 'Conhecer o Bancou ao Vivo',
    gallery: [
      {
        src: 'assets/imagens/bancou-case.png',
        title: 'Bancou — Identidade, App e Visão Estratégica',
        caption: 'Posicionamento do Bancou unindo gamificação com metodologia ágil de estudos para concursos.'
      }
    ]
  },
  {
    id: 'jeep',
    title: 'Títulos Criativos — Jeep Renegade',
    client: 'Jeep',
    category: 'campanhas',
    categoryLabel: 'Campanhas & Copy',
    badge: 'Campanha Publicitária',
    accentColor: '#0ea5e9',
    coverImage: 'assets/imagens/jeep.png',
    summary: 'Campanha de títulos publicitários de alto impacto para anúncios de revista e mídia impressa/digital do Jeep Renegade.',
    challenge: 'Traduzir a robustez, o espírito off-road e o conceito de liberdade característicos da marca Jeep em títulos curtos, memoráveis e persuasivos, conectando a rotina da cidade à aventura.',
    strategy: 'Exploração de jogos de palavras inteligentes e quebras de expectativa. O contraste entre o asfalto monótono do dia a dia e o convite à descoberta de novos caminhos dá o tom da comunicação.',
    deliverables: [
      'Concepção de Conceito Criativo',
      'Redação Publicitária de Títulos para Mídia Impressa e Digital',
      'Alinhamento com Brand Guidelines da Jeep',
      'Direção Criativa e Tom de Voz Aventureiro'
    ],
    results: 'Peças publicitárias de forte memorabilidade e apelo visual que reforçam o posicionamento icônico de que "Jeep só existe um".',
    tags: ['Copywriting', 'Redação Publicitária', 'Campanha', 'Branding Automotivo'],
    gallery: [
      {
        src: 'assets/imagens/jeep.png',
        title: 'Anúncio 1 — O asfalto é só o começo',
        caption: 'Título focado na transição da rotina urbana para o universo off-road.'
      },
      {
        src: 'assets/imagens/TítuloJeep2.png',
        title: 'Anúncio 2 — Liberdade sem limites',
        caption: 'Enfatiza a versatilidade e a tração do Jeep Renegade em qualquer terreno.'
      },
      {
        src: 'assets/imagens/TítuloJeep3.png',
        title: 'Anúncio 3 — Conexão com o inesperado',
        caption: 'Reforça a identidade de marca e o convite à fuga da monotonia.'
      }
    ]
  },
  {
    id: 'mcdonalds',
    title: 'Méqui Caminhada — Ideia de Ativação',
    client: "McDonald's",
    category: 'campanhas',
    categoryLabel: 'Campanhas & Copy',
    badge: 'Ativação Criativa',
    accentColor: '#10b981',
    coverImage: 'assets/imagens/mequicaminhada.png',
    summary: 'Ideia desformatada e conceitual de ativação urbana unindo os momentos de caminhada ao prazer do Méqui.',
    challenge: 'Propor um formato disruptivo e não convencional de comunicação para aproximar a marca do cotidiano em movimento dos clientes nas capitais brasileiras.',
    strategy: 'Criação do conceito "Méqui Caminhada": conectar o hábito saudável e corriqueiro de caminhar pela cidade com uma parada saborosa e recompensadora no McDonald’s, transformando o trajeto a pé em uma experiência sensorial e de socialização.',
    deliverables: [
      'Ideação e Conceito de Live Marketing / Ativação Urbana',
      'Board de Apresentação de Campanha',
      'Copywriting e Roteirização de Peça Conceitual',
      'Storytelling de Experiência de Consumo'
    ],
    results: 'Conceito amplamente elogiado pela originalidade em reimaginar o fluxo de transeuntes urbanos como ponto de contato afetivo com a marca.',
    tags: ['Ativação de Marca', 'Criatividade Não-Convencional', 'Live Marketing', 'Storytelling'],
    gallery: [
      {
        src: 'assets/imagens/mequicaminhada.png',
        title: 'Board Conceitual — Méqui Caminhada',
        caption: 'Visão completa da dinâmica de ativação e narrativa urbana desenvolvida para o McDonald’s.'
      }
    ]
  },
  {
    id: 'nike',
    title: 'Texto Publicitário — Nike Terceira Idade',
    client: 'Nike',
    category: 'campanhas',
    categoryLabel: 'Campanhas & Copy',
    badge: 'Long Copy Emocional',
    accentColor: '#f97316',
    coverImage: 'assets/imagens/Nike-longcopy.png',
    summary: 'Peça de long copy inspiradora para tênis de corrida voltada à celebração da vitalidade na terceira idade.',
    challenge: 'Desenvolver um texto publicitário extenso e comovente que celebre o movimento na terceira idade, fugindo completamente de estereótipos paternalistas ou limitadores.',
    strategy: 'Construção de uma narrativa cadenciada no ritmo de passos de corrida. O texto conecta respiração, experiência de vida e o manifesto visceral da Nike, mostrando que o tempo não diminui a vontade de correr, apenas amadurece cada passo.',
    deliverables: [
      'Redação de Long Copy Publicitário',
      'Storytelling Emocional com Tom Provocador e Humano',
      'Alinhamento com o Tom Heroico e Empoderador da Nike'
    ],
    results: 'Texto aclamado por emocionar o leitor do início ao fim e provocar reflexão real sobre longevidade, esporte e determinação.',
    tags: ['Long Copy', 'Redação Emocional', 'Storytelling', 'Posicionamento Esportivo'],
    gallery: [
      {
        src: 'assets/imagens/Nike-longcopy.png',
        title: 'Anúncio Impresso — Nike Long Copy',
        caption: 'Composição visual e tipográfica valorizando a profundidade da redação.'
      }
    ]
  },
  {
    id: 'oakley',
    title: 'Campanha de Posicionamento — Oakley',
    client: 'Oakley',
    category: 'campanhas',
    categoryLabel: 'Campanhas & Copy',
    badge: 'Manifesto & Atitude',
    accentColor: '#10b981',
    coverImage: 'assets/imagens/oakley-copy-thamirescerqueira.png',
    summary: 'Texto publicitário com tom arrojado e rebelde para fortalecer o posicionamento autêntico e de alta performance da Oakley.',
    challenge: 'Criar uma copy com atitude visceral e sem filtros, capaz de se destacar na mente do consumidor exigente que busca proteção, tecnologia e atitude estética.',
    strategy: 'Exploração de um tom de voz direto e provocador. A copy traduz a alma desafiadora da Oakley, que nasceu para quem não aceita limites impostos e busca excelência sem concessões.',
    deliverables: [
      'Manifesto de Marca e Copy Publicitária',
      'Estruturação de Anúncios Impressos e Peças Digitais',
      'Tom de Voz de Alta Performance e Cultura Urbana'
    ],
    results: 'Fortalecimento da conexão com praticantes de esportes radicais e admiradores do design icônico da marca.',
    tags: ['Manifesto de Marca', 'Copywriting de Impacto', 'Branding & Voz', 'Esporte & Estilo'],
    gallery: [
      {
        src: 'assets/imagens/oakley-copy-thamirescerqueira.png',
        title: 'Anúncio Oakley — Versão Principal',
        caption: 'Copywriting e direção de arte celebrando a força visual e inovação dos produtos Oakley.'
      },
      {
        src: 'assets/imagens/oakley-copy-thamirescerqueira1.png',
        title: 'Anúncio Oakley — Variação de Formato',
        caption: 'Desdobramento do manifesto para diferentes formatos de mídia.'
      }
    ]
  },
  {
    id: 'spotify',
    title: 'Trilha Sonora da Vida — Spotify',
    client: 'Spotify',
    category: 'campanhas',
    categoryLabel: 'Campanhas & Copy',
    badge: 'Redação Criativa',
    accentColor: '#0ea5e9',
    coverImage: 'assets/imagens/spotify.png',
    summary: 'Texto publicitário que traduz o poder da música e dos podcasts em transformar humores e momentos rotineiros.',
    challenge: 'Criar uma peça publicitária com o tom leve, contemporâneo e hiperconectado do Spotify, conversando com o comportamento do ouvinte moderno.',
    strategy: 'Identificação de micro-momentos do dia a dia (o metrô lotado, a caminhada noturna, a pausa no trabalho) e demonstração de como uma playlist transforma o sentimento de cada situação com precisão cirúrgica.',
    deliverables: [
      'Redação Publicitária de Alta Identificação',
      'Conexão com Hábitos de Consumo de Streaming de Áudio',
      'Linguagem Descontraída e Culturalmente Atualizada'
    ],
    results: 'Peça com alto potencial de identificação e engajamento, refletindo com perfeição a essência da experiência do Spotify.',
    tags: ['Copywriting', 'Cultura Pop & Música', 'Streaming', 'Engajamento'],
    gallery: [
      {
        src: 'assets/imagens/spotify.png',
        title: 'Anúncio Spotify — Trilha Sonora do Cotidiano',
        caption: 'Copy focada na personalização de experiências que só o Spotify proporciona.'
      }
    ]
  },
  {
    id: 'codigo-comunicacao',
    title: 'Código da Comunicação — Newsletter & Ensaios',
    client: 'Projeto Autoral',
    category: 'artigos',
    categoryLabel: 'Artigos & Publicações',
    badge: 'Substack & Thought Leadership',
    accentColor: '#ff007f',
    coverImage: 'assets/imagens/codigo-comunicacao.png',
    summary: 'Publicação autoral de ensaios e análises aprofundadas sobre comunicação estratégica, comportamento humano e bastidores do marketing.',
    challenge: 'Compartilhar visão crítica e construir liderança de pensamento no mercado, indo além dos conselhos superficiais de redes sociais para dissecar a real psicologia por trás de marcas bem-sucedidas.',
    strategy: 'Produção contínua de ensaios originais que combinam repertório cultural, estudos de caso reais e análise de campanhas históricas e contemporâneas. Uma newsletter feita para quem pensa criticamente sobre persuasão e cultura.',
    deliverables: [
      'Artigos e Ensaios Autorais Periódicos',
      'Desconstrução de Campanhas Publicitárias e Estratégias de Marca',
      'Comunidade de Leitores no Substack',
      'Conteúdo Educacional para Profissionais de Conteúdo e Marketing'
    ],
    results: 'Crescimento de audiência orgânica de profissionais do mercado criativo e consolidação de autoridade em comunicação estratégica.',
    tags: ['Artigos & Ensaios', 'Thought Leadership', 'Comunicação Estratégica', 'Substack', 'Cultura de Marca'],
    link: 'https://codigodacomunicacao.substack.com',
    linkText: 'Ler Artigos no Substack',
    gallery: [
      {
        src: 'assets/imagens/codigo-comunicacao.png',
        title: 'Código da Comunicação — Capa e Coleção de Ensaios',
        caption: 'Ensaios sobre retenção, escrita persuasiva e comportamento do consumidor.'
      }
    ]
  }
];

// Torna disponível globalmente para o script principal em navegadores e módulos
if (typeof window !== 'undefined') {
  window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_PROJECTS;
}
