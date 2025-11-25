import React, { useState, useRef } from 'react';
import type { Product, Testimonial } from '../types';
import { PRODUCTS, TESTIMONIALS, FAQ_DATA } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon, ChevronDownIcon, UsersIcon, TargetIcon, HeartIcon } from '../components/icons';
import { 
  TrendingUpIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  BriefcaseIcon, 
  SunIcon, 
  MapPinIcon, 
  MessageCircleIcon,
  CalculatorIcon
} from 'lucide-react'; // Assumindo lucide-react ou compatível, adaptado do código original

// --- TYPES & CONSTANTS ---

type MarketSegment = {
  id: string;
  city: string;
  persona: string;
  focus: string;
  icon: React.ReactNode;
  cta: string;
  funnelType: 'whatsapp' | 'calculator' | 'form';
};

const MARKETS: MarketSegment[] = [
  {
    id: 'mococa',
    city: 'Mococa',
    persona: 'Primeira Moradia & Famílias',
    focus: 'Minha Casa Minha Vida (Faixa 2-3), Segurança e Aprovação Bancária.',
    icon: <HomeIcon className="h-8 w-8 text-amber-500" />,
    cta: 'Simular Financiamento',
    funnelType: 'form'
  },
  {
    id: 'ribeirao',
    city: 'Ribeirão Preto',
    persona: 'Profissionais em Busca de Custo-Benefício',
    focus: 'Morar em Mococa com padrão elevado gastando menos.',
    icon: <BriefcaseIcon className="h-8 w-8 text-amber-500" />,
    cta: 'Comparar Custo de Vida',
    funnelType: 'calculator'
  },
  {
    id: 'caconde',
    city: 'Caconde',
    persona: 'Investidores Agro & Aposentadoria Premium',
    focus: 'Propriedades rurais de alto retorno e refúgios de legado.',
    icon: <TrendingUpIcon className="h-8 w-8 text-amber-500" />,
    cta: 'Receber Portfólio Rural',
    funnelType: 'whatsapp'
  },
  {
    id: 'capitolio',
    city: 'Capitólio',
    persona: 'Investidores de Lazer & Alto Padrão',
    focus: 'Rentabilidade via locação de temporada e lifestyle náutico.',
    icon: <SunIcon className="h-8 w-8 text-amber-500" />,
    cta: 'Ver Curadoria Exclusiva',
    funnelType: 'whatsapp'
  }
];

const METRICS = [
  { value: '87%', label: 'Taxa de Aprovação Bancária' },
  { value: '96%', label: 'Aumento no Ticket Médio' },
  { value: '2.5x', label: 'Mais Leads Qualificados' },
  { value: 'ROI', label: 'Foco em Rentabilidade Real' },
];

const FAQ_DATA = [
  {
    question: "Como funciona a metodologia 80/20 na escolha do imóvel?",
    answer: "Nós filtramos 100% do mercado, mas apresentamos apenas os 4% dos imóveis (o Princípio de Pareto aplicado) que realmente oferecem potencial de valorização, liquidez ou qualidade de vida superior. Você não perde tempo visitando imóveis que não fazem sentido."
  },
  {
    question: "Vale a pena morar em Mococa e trabalhar em Ribeirão Preto?",
    answer: "Financeiramente, sim. Nossa calculadora exclusiva demonstra que o custo de moradia em Mococa permite viver em um imóvel de padrão muito superior pelo mesmo valor de um aluguel em bairros médios de Ribeirão, com qualidade de vida de interior."
  },
  {
    question: "Vocês trabalham com Minha Casa Minha Vida?",
    answer: "Sim, com foco total em aprovação. Temos uma taxa de 87% de sucesso em financiamentos, cuidando de toda a burocracia para que famílias jovens (Faixa 2 e 3) conquistem o primeiro imóvel com segurança."
  },
  {
    question: "Como é o processo para investidores em Capitólio e Caconde?",
    answer: "Para estes perfis, atuamos com consultoria 'Due Diligence'. Analisamos não apenas o imóvel, mas o potencial de retorno (ROI), documentação rural e viabilidade de locação por temporada antes de qualquer visita."
  }
];

// --- SHARED COMPONENTS ---

const WhatsAppButton: React.FC<{ text?: string; variant?: 'primary' | 'outline' }> = ({ text = "Falar com Consultor", variant = 'primary' }) => (
  <button 
    onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold transition-all transform hover:scale-105 shadow-lg ${
      variant === 'primary' 
        ? 'bg-green-600 hover:bg-green-700 text-white' 
        : 'border-2 border-green-600 text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/30'
    }`}
  >
    <MessageCircleIcon className="h-5 w-5" />
    {text}
  </button>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} max-w-4xl mx-auto`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    )}
    <div className={`mt-6 h-1 w-24 bg-amber-500 rounded ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- BLOCK 1: ATENÇÃO (Hero & Proposta de Valor) ---

const HeroSection: React.FC = () => (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold tracking-wide mb-6 border border-amber-500/30">
                        METODOLOGIA 80/20 IMOBILIÁRIA
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Imóveis certos para os <span className="text-amber-500">4% de clientes</span> que geram resultado real.
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-lg leading-relaxed">
                        Pare de visitar imóveis que não servem. Utilizamos inteligência de dados para conectar você às oportunidades de maior rentabilidade e adequação em <strong>Mococa, Ribeirão Preto, Caconde e Capitólio</strong>.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <WhatsAppButton text="Iniciar Consultoria Inteligente" />
                        <button className="px-6 py-3 rounded-md font-bold border border-slate-600 text-slate-200 hover:bg-slate-800 transition-colors">
                            Conhecer as Regiões
                        </button>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs">User</div>
                            ))}
                        </div>
                        <p>+200 famílias e investidores atendidos este ano.</p>
                    </div>
                </div>
                
                {/* Visual Hero Element - Dashboard/Property Concept */}
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Imóvel de Alto Padrão" 
                        className="rounded-xl w-full object-cover h-[400px] opacity-80"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                        <div className="flex justify-between items-center text-white">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-amber-400">Oportunidade 80/20</p>
                                <p className="font-bold text-lg">Fazenda Histórica / Caconde</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-300">Potencial de ROI</p>
                                <p className="font-bold text-green-400">+22% a.a.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 2: INTERESSE (Calculadora & Problematização) ---

const ProblemAndCalculatorSection: React.FC = () => {
    const [salary, setSalary] = useState(5000);
    const [savings, setSavings] = useState(0);

    // Lógica simplificada apenas para demonstração visual (Placeholder)
    const calculateSavings = (val: number) => {
        setSalary(val);
        setSavings(Math.round(val * 0.35)); // Assumindo 35% de economia média
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Texto Estratégico */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            A Ilusão da "Grande Cidade" vs. <br/>
                            <span className="text-teal-700 dark:text-teal-400">Inteligência Patrimonial</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                            <p>
                                Muitos profissionais pagam aluguéis inflacionados em Ribeirão Preto, ignorando que a apenas alguns quilômetros, em <strong>Mococa</strong>, o mesmo investimento compra qualidade de vida superior e patrimônio real.
                            </p>
                            <p>
                                Na <strong>[PRODUTO_NOME]</strong>, usamos dados para provar que a localização estratégica é o segredo para desbloquear capital.
                            </p>
                            <ul className="space-y-3 mt-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircleIcon className="text-green-500 h-6 w-6" />
                                    <span>Menor custo por m² com acabamento superior.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircleIcon className="text-green-500 h-6 w-6" />
                                    <span>Segurança para família e trânsito zero.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircleIcon className="text-green-500 h-6 w-6" />
                                    <span>Aprovação bancária facilitada em faixas MCMV.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Componente Interativo: Calculadora (Visual) */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CalculatorIcon className="text-amber-500 h-8 w-8" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Simulador: Ribeirão vs. Mococa</h3>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Seu custo mensal atual (Aluguel + Condomínio)
                                </label>
                                <input 
                                    type="range" 
                                    min="1500" 
                                    max="10000" 
                                    step="500"
                                    value={salary}
                                    onChange={(e) => calculateSavings(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <div className="text-right font-bold text-slate-900 dark:text-white mt-1">
                                    R$ {salary.toLocaleString('pt-BR')}
                                </div>
                            </div>

                            <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-100 dark:border-teal-800">
                                <p className="text-sm text-teal-800 dark:text-teal-200 mb-1">Economia anual estimada vivendo em Mococa:</p>
                                <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                                    R$ {(savings * 12).toLocaleString('pt-BR')}
                                </p>
                                <p className="text-xs text-teal-600 dark:text-teal-400 mt-2">
                                    *Baseado em comparativo médio de poder de compra.
                                </p>
                            </div>

                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-all shadow-md">
                                Quero Receber o Estudo Completo
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- BLOCK 3: DESEJO (Segmentação e Metodologia) ---

const SegmentsSection: React.FC = () => (
    <section id="segments" className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
                title="Atuação Especializada em 4 Mercados" 
                subtitle="Não somos generalistas. Somos especialistas nos 4 perfis que movem a economia regional."
            />
            
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {MARKETS.map((market) => (
                    <div key={market.id} className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300">
                        <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-full w-max shadow-sm group-hover:scale-110 transition-transform">
                            {market.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{market.city}</h3>
                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4 uppercase tracking-wider">{market.persona}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                            {market.focus}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                            <button className="w-full flex items-center justify-between text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                {market.cta}
                                <span className="text-xl">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- BLOCK 4: PROVA SOCIAL & DADOS (Desire/Trust) ---

const StatsSection: React.FC = () => (
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {METRICS.map((stat, idx) => (
                    <div key={idx} className="p-6 border border-teal-700/50 bg-teal-800/20 backdrop-blur-sm rounded-lg">
                        <p className="text-4xl lg:text-5xl font-extrabold text-amber-400 mb-2">{stat.value}</p>
                        <p className="text-teal-100 font-medium text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                            alt="Investidor Agro" 
                            className="w-24 h-24 rounded-full border-4 border-amber-500 object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-xl md:text-2xl italic font-light text-slate-200">
                            "A equipe entendeu exatamente minha necessidade de diversificação em Caconde. Não perdi tempo vendo terras improdutivas. A Due Diligence foi impecável e o retorno já supera 20% ao ano."
                        </p>
                        <div className="mt-4">
                            <p className="font-bold text-white">Roberto Mendes</p>
                            <p className="text-amber-400 text-sm">Investidor Agro & Empresário</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 5: AÇÃO (Funis & Processo) ---

const ProcessSection: React.FC = () => (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
                title="Como Funciona Nossa Consultoria" 
                subtitle="Do primeiro contato à entrega das chaves, um processo desenhado para eficiência." 
            />

            <div className="relative mt-16">
                {/* Linha conectora (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    {[
                        { step: '01', title: 'Diagnóstico', desc: 'Entendemos seu perfil financeiro e objetivo (Moradia ou Investimento).' },
                        { step: '02', title: 'Filtro 80/20', desc: 'Selecionamos apenas os imóveis com liquidez e documentação 100% OK.' },
                        { step: '03', title: 'Visita/Tour', desc: 'Agendamento otimizado ou Tour Virtual para clientes de outras cidades.' },
                        { step: '04', title: 'Fechamento', desc: 'Assessoria jurídica e bancária completa até a assinatura.' }
                    ].map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-b-4 border-amber-500 text-center">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ring-4 ring-white dark:ring-slate-800">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <WhatsAppButton text="Agendar Diagnóstico Gratuito" />
                <p className="mt-4 text-sm text-slate-500">Resposta média em menos de 15 minutos.</p>
            </div>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <SectionHeading title="Perguntas Frequentes" align="center" />
                
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                <span className="font-semibold text-slate-800 dark:text-slate-200">{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-amber-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-950 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-5 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- BLOCK 6: FECHAMENTO & GARANTIA (Action) ---

const GuaranteeSection: React.FC = () => (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-teal-700 dark:text-teal-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Compromisso de Transparência Total</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Diferente do mercado tradicional, abrimos os números reais de valorização e custos ocultos antes de você assinar qualquer papel. Se o imóvel não passar no nosso critério de "Due Diligence", nós nem o apresentamos.
            </p>
        </div>
    </section>
);

const FooterCTA: React.FC = () => (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pronto para encontrar seu imóvel ideal?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Não deixe para depois. O mercado imobiliário é dinâmico e as melhores oportunidades (os 4%) saem rápido.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <WhatsAppButton text="Falar com Consultor Agora" />
                <button className="px-8 py-3 rounded-md font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-lg">
                    Ver Imóveis Disponíveis
                </button>
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-slate-950 text-slate-500 py-12 text-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-white text-lg font-bold mb-4">[PRODUTO_NOME]</h3>
                <p className="max-w-xs">Mediação imobiliária estratégica focada em conectar compradores e investidores ideais com imóveis de maior rentabilidade.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Mercados</h4>
                <ul className="space-y-2">
                    <li>Mococa (MCMV)</li>
                    <li>Ribeirão Preto (Investimento)</li>
                    <li>Caconde (Rural)</li>
                    <li>Capitólio (Lazer)</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Contato</h4>
                <ul className="space-y-2">
                    <li>contato@imobiliaria8020.com.br</li>
                    <li>(19) 99999-9999</li>
                    <li>Mococa, SP</li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto px-4 border-t border-slate-800 pt-8 text-center">
            <p>© {new Date().getFullYear()} [PRODUTO_NOME]. Todos os direitos reservados. CRECI 00000-J</p>
        </div>
    </footer>
);

// --- FINAL PAGE COMPONENT ---

const RealEstateLandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* 1. Atenção: Hero e Headline Principal */}
      <HeroSection />

      {/* 2. Interesse: Problematização e Calculadora Comparativa */}
      <ProblemAndCalculatorSection />

      {/* 3. Desejo: Segmentação de Mercado e Prova Social */}
      <SegmentsSection />
      <StatsSection />

      {/* 4. Ação: Processo (Funil) e CTAs */}
      <ProcessSection />
      <FAQSection />
      
      {/* Fechamento */}
      <GuaranteeSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default RealEstateLandingPage;
