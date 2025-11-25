import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Plano Favam Essencial',
    price: 'A partir de R$350 mil',
    features: [
      'Assessoria completa de compra de imóvel MCMV',
      'Pré-qualificação bancária com 87% de aprovação',
      'Atendimento via WhatsApp e tour guiado',
    ],
  },
  {
    id: 2,
    name: 'Plano Favam Premium',
    price: 'Faixa R$900 mil – R$1,8 milhão',
    features: [
      'Mediação especializada para imóveis de alto padrão',
      'Curadoria de investimento e análise de ROI',
      'Suporte multilocal (Mococa, Ribeirão Preto, Capitólio)',
      'Consultoria técnica e jurídico-financeira',
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Plano Favam Investidor',
    price: 'A partir de R$2,5 milhões',
    features: [
      'Prospecção e due diligence de propriedades rurais',
      'Análise de rentabilidade agro e legado patrimonial',
      'Suporte de equipe dedicada e relatórios financeiros personalizados',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Consegui financiar minha primeira casa em Mococa com total tranquilidade. O processo foi rápido e 100% transparente.',
    author: 'Mariana Lopes',
    role: 'Compradora MCMV, Mococa',
    avatarUrl: 'https://picsum.photos/id/1015/100/100',
  },
  {
    quote: 'A equipe da Favam entendeu exatamente o que eu procurava em Capitólio. Um refúgio perfeito com excelente valorização.',
    author: 'Eduardo Ferreira',
    role: 'Investidor, Capitólio',
    avatarUrl: 'https://picsum.photos/id/1016/100/100',
  },
  {
    quote: 'Vendemos nossa fazenda e reinvestimos com ROI muito superior ao esperado. Confiança total na metodologia 80/20.',
    author: 'José Almeida',
    role: 'Produtor rural, Caconde',
    avatarUrl: 'https://picsum.photos/id/1017/100/100',
  },
  {
    quote: 'Decidimos morar em Mococa e manter o trabalho em Ribeirão. Custo de vida caiu pela metade com ótima qualidade de vida.',
    author: 'Patrícia e Caio',
    role: 'Profissionais, Ribeirão Preto → Mococa',
    avatarUrl: 'https://picsum.photos/id/1018/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'Como funciona o processo de pré-qualificação bancária?',
    answer: 'Nossa equipe realiza uma análise inicial gratuita com base em seus dados financeiros e perfis de crédito, garantindo alta chance de aprovação — atualmente com taxa de 87%.',
  },
  {
    question: 'Posso comparar o custo de vida entre Ribeirão Preto e Mococa?',
    answer: 'Sim, temos uma ferramenta interativa que mostra quanto você economiza vivendo em Mococa mantendo sua renda atual de Ribeirão Preto.',
  },
  {
    question: 'A Favam atende todas as cidades?',
    answer: 'Atuamos de forma segmentada em 4 cidades: Mococa, Ribeirão Preto, Caconde e Capitólio, com consultores especializados em cada região.',
  },
  {
    question: 'Como agendo um tour guiado?',
    answer: 'Após o primeiro contato via WhatsApp, nosso consultor agenda o tour presencial ou virtual conforme sua disponibilidade.',
  },
  {
    question: 'A Favam cobra alguma taxa antecipada?',
    answer: 'Não. Nosso modelo é de sucesso — só recebemos comissão após a conclusão do negócio e assinatura do contrato.',
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'Favam Imóveis',
    description: 'Mediação imobiliária estratégica com foco nos 4% de clientes que geram 64% dos resultados.',
    cnpj: 'CNPJ: 45.987.123/0001-67',
    address: 'Matriz: Rua Barão do Rio Branco, 250 - Mococa/SP',
  },
  support: [
    { name: 'contato@favam.com.br', href: 'mailto:contato@favam.com.br' },
    { name: '(19) 3656-8899', href: 'tel:+551936568899' },
    { name: 'WhatsApp Comercial', href: 'https://wa.me/551936568899' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
  enterprise: [
    { name: 'Sobre a Favam', href: '/sobre' },
    { name: 'Imóveis por Cidade', href: '/cidades' },
    { name: 'Contato', href: '/contato' },
  ],
};
