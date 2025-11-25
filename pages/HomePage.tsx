import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons'; // Mantendo importações originais

// --- CONSTANTS & MOCKS ---

const TESTIMONIALS = [
    {
        quote: "Eu já tinha visitado mais de 30 imóveis em Ribeirão. A curadoria deles me apresentou apenas 3 em Mococa, e o segundo foi a escolha perfeita. Economia de tempo real.",
        author: "Dr. Ricardo Mendes",
        role: "Médico em Transição de Carreira",
        avatarUrl: "https://i.pravatar.cc/150?u=ricardo"
    },
    {
        quote: "A análise de ROI para o imóvel em Capitólio foi cirúrgica. Não comprei apenas uma casa de veraneio, fiz um investimento com yield projetado.",
        author: "Ana Paula Vieira",
        role: "Investidora Agro",
        avatarUrl: "https://i.pravatar.cc/150?u=ana"
    },
    {
        quote: "O processo de financiamento Minha Casa Minha Vida foi transparente. Eles cuidaram da burocracia bancária e eu só me preocupei com a mudança.",
        author: "Felipe e Jussara",
        role: "Primeira Moradia",
        avatarUrl: "https://i.pravatar.cc/150?u=casal"
    }
];

// --- SHARED COMPONENTS ---

// LeadCaptureForm (Refatorado de InlineCheckoutForm)
interface LeadCaptureFormProps {
    ctaLabel: string;
    placeholder: string;
    successMessage: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ ctaLabel, placeholder, successMessage }) => {
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulação de envio para CRM/WhatsApp API
        await new Promise(resolve => setTimeout(resolve, 1200));

        if (contact.length > 5) {
            setStatus('success');
            setMessage(successMessage);
            // Lógica futura: Redirecionar para WhatsApp ou Download PDF
        } else {
            setStatus('error');
            setMessage('Por favor, insira um contato válido (E-mail ou WhatsApp).');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="flex-grow px-5 py-4 rounded-lg bg-white border border-stone-300 text-stone-800 placeholder-stone-400 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all shadow-sm"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-serif font-medium py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-md disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Processando...' : ctaLabel}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm font-medium ${status === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
            <p className="mt-3 text-xs text-stone-500 flex items-center gap-1">
                <ShieldIcon className="w-3 h-3" /> Seus dados estão seguros. Sem spam.
            </p>
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="relative py-24 md:py-32 bg-stone-50 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-27bf909dde00?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-10 items-start max-w-4xl">
                <div className="space-y-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-wide uppercase">
                        Mediação Imobiliária Estratégica
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Menos dispersão. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                            Resultados de Alto Padrão.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-600 max-w-2xl font-light leading-relaxed">
                        Conectamos você aos <strong>4% dos imóveis</strong> que geram 64% da valorização e qualidade de vida. Uma curadoria exclusiva para Mococa, Ribeirão Preto e Região dos Lagos.
                    </p>
                </div>

                <div className="w-full">
                    <LeadCaptureForm 
                        ctaLabel="Ver Imóveis Selecionados" 
                        placeholder="Seu WhatsApp ou E-mail principal"
                        successMessage="Perfeito! Um de nossos consultores especialistas entrará em contato em breve."
                    />
                </div>

                <div className="flex gap-8 mt-4 text-sm font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-amber-600" />
                        <span>Financiamento Aprovado (87% taxa)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-amber-600" />
                        <span>Análise de ROI e Cost-of-living</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const MethodologySection: React.FC = () => {
    const metrics = [
        { label: 'Ticket Médio', value: '+96%', desc: 'Comparado à média local' },
        { label: 'Conversão', value: '1 a cada 3', desc: 'Visitas geram propostas' },
        { label: 'ROI/Hora', value: '+220%', desc: 'Eficiência para investidores' }
    ];

    return (
        <section className="py-20 bg-white border-y border-stone-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            A Regra 80/20 Aplicada ao <br/>Mercado Imobiliário
                        </h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            A maioria das imobiliárias foca em volume. Nós focamos em <strong>precisão</strong>. Identificamos os perfis e imóveis críticos — aqueles que realmente atendem suas expectativas de vida e retorno financeiro.
                        </p>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            Seja para morar ou investir, nossa consultoria elimina o "ruído" do mercado e entrega apenas as oportunidades validadas.
                        </p>
                        <div className="grid grid-cols-3 gap-6">
                            {metrics.map((m) => (
                                <div key={m.label} className="border-l-4 border-amber-500 pl-4">
                                    <p className="text-3xl font-bold text-slate-900">{m.value}</p>
                                    <p className="text-sm font-bold text-stone-500 uppercase mt-1">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <ZapIcon className="w-6 h-6 text-amber-600" />
                            O Funil de Alta Performance
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                                <p className="text-stone-600 text-sm"><strong>Curiosidade & Comparação:</strong> Use nossa calculadora de custo de vida (Ribeirão vs. Mococa).</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                                <p className="text-stone-600 text-sm"><strong>Qualificação via WhatsApp:</strong> Entendemos se você busca moradia, refúgio ou investimento.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                                <p className="text-stone-600 text-sm"><strong>Tour Guiado:</strong> Visita presencial apenas aos imóveis finalistas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CitySegmentationSection: React.FC = () => {
    const cities = [
        {
            title: 'Mococa',
            subtitle: 'Primeira Moradia & MCMV',
            desc: 'Saia do aluguel com parcelas menores que a locação. Assessoria completa no financiamento.',
            color: 'bg-blue-50 border-blue-100'
        },
        {
            title: 'Ribeirão Preto',
            subtitle: 'Profissionais & Upgrade',
            desc: 'Troque o custo alto da metrópole por qualidade de vida e imóveis de alto padrão no interior.',
            color: 'bg-amber-50 border-amber-100'
        },
        {
            title: 'Caconde & Capitólio',
            subtitle: 'Investidores & Lazer',
            desc: 'Propriedades em regiões turísticas e rurais. Foco em legado familiar e valorização constante.',
            color: 'bg-emerald-50 border-emerald-100'
        }
    ];

    return (
        <section id="cidades" className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Onde você quer construir sua história?</h2>
                    <p className="mt-4 text-lg text-stone-600">Soluções personalizadas para cada perfil de comprador e região.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {cities.map(city => (
                         <div key={city.title} className={`p-8 rounded-xl border ${city.color} transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group`}>
                             <div className="mb-4">
                                 <h3 className="text-2xl font-serif font-bold text-slate-900">{city.title}</h3>
                                 <p className="text-sm font-bold uppercase tracking-wider text-stone-500 mt-1">{city.subtitle}</p>
                             </div>
                             <p className="text-stone-700 mb-6 leading-relaxed min-h-[80px]">{city.desc}</p>
                             <span className="inline-flex items-center font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                                 Ver oportunidades <span className="ml-2">→</span>
                             </span>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

const CalculatorTeaser: React.FC = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
                <ZapIcon className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ribeirão Preto vs. Mococa</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                Quanto vale o seu dinheiro? Use nossa <strong>Calculadora Comparativa Interativa</strong> e descubra o ganho real em metros quadrados e custo de vida ao migrar.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg transition-transform transform hover:scale-105 shadow-lg text-lg">
                Simular Comparativo Agora
            </button>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="depoimentos" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Histórias Reais de Mudança de Vida</h2>
                        <p className="mt-4 text-lg text-stone-600">A confiança é nossa moeda mais valiosa.</p>
                    </div>
                    <div className="hidden md:block">
                         {/* Navigation arrows could go here */}
                    </div>
                </div>
                
                <div ref={scrollContainer} className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-[400px] bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div className="ml-4">
                                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                                    <p className="text-xs font-bold text-amber-600 uppercase">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-stone-600 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection: React.FC = () => (
    <section id="cta" className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Pronto para Encontrar seu Imóvel Ideal?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
                Não deixe sua busca se tornar um segundo emprego. Deixe a estratégia 80/20 trabalhar por você. Agende um tour guiado ou receba nosso guia exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="https://wa.me/seunumero" 
                    className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                    Falar no WhatsApp
                </a>
                <Link 
                    to="/imoveis" 
                    className="inline-flex justify-center items-center bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 font-bold py-4 px-8 rounded-lg transition-all"
                >
                    Ver Catálogo Online
                </Link>
            </div>
            <p className="mt-8 text-sm text-stone-500">
                Atendimento especializado para Mococa, Ribeirão Preto, Caconde e Capitólio.
            </p>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      <HeroSection />
      <MethodologySection />
      <CitySegmentationSection />
      <CalculatorTeaser />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
