
import React from 'react';

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso — Favam Imóveis" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos de Uso</h2>
            <p>
                Bem-vindo(a) ao site <strong>favan3.valoresdigitais.com</strong>, plataforma digital estratégica da 
                <strong> Favam Imóveis</strong>. Ao acessar, navegar ou utilizar nossos serviços, 
                você concorda integralmente com os presentes Termos de Uso. 
                Caso não concorde com qualquer disposição, pedimos que interrompa o uso deste website imediatamente.
            </p>

            <h2>2. Objetivo da Plataforma</h2>
            <p>
                Este ambiente digital tem por objetivo apresentar imóveis, oportunidades de investimento e informações sobre 
                o processo de intermediação imobiliária realizado pela Favam Imóveis, incluindo recursos interativos como 
                calculadoras comparativas, formulários de contato e automações de qualificação de leads.
            </p>

            <h2>3. Uso Autorizado</h2>
            <p>
                O usuário compromete-se a utilizar o site de forma ética, responsável e em conformidade com 
                as leis aplicáveis. É expressamente vedado o uso do site para fins ilícitos, coleta de dados 
                não autorizada ou qualquer prática que possa comprometer a segurança da plataforma.
            </p>

            <h2>4. Responsabilidade sobre Informações</h2>
            <p>
                As informações sobre imóveis, valores e condições de negociação são atualizadas periodicamente, 
                podendo sofrer alterações sem aviso prévio. A Favam Imóveis não se responsabiliza por eventuais 
                divergências ou indisponibilidades temporárias de conteúdo.
            </p>

            <h2>5. Privacidade e Proteção de Dados</h2>
            <p>
                A Favam Imóveis adota práticas de segurança e privacidade alinhadas à LGPD (Lei nº 13.709/2018). 
                Ao fornecer seus dados, o usuário autoriza o contato via WhatsApp, e-mail ou outros meios 
                para fins de qualificação e atendimento imobiliário. Para mais detalhes, consulte nossa 
                <a href="/politica-de-privacidade" className="text-blue-600 dark:text-blue-400 underline ml-1">Política de Privacidade</a>.
            </p>

            <h2>6. Direitos de Propriedade Intelectual</h2>
            <p>
                Todo o conteúdo deste site — incluindo textos, gráficos, elementos audiovisuais, logotipos e layout — 
                é protegido por direitos autorais e de marca. É proibida a reprodução, distribuição ou modificação 
                sem autorização prévia por escrito da Favam Imóveis.
            </p>

            <h2>7. Limitação de Responsabilidade</h2>
            <p>
                A Favam Imóveis não será responsável por danos diretos ou indiretos decorrentes do uso ou 
                impossibilidade de uso do site, nem por decisões tomadas com base em informações aqui apresentadas.
            </p>

            <h2>8. Alterações dos Termos</h2>
            <p>
                A Favam Imóveis reserva-se o direito de atualizar estes Termos de Uso a qualquer momento, 
                sem aviso prévio. A versão em vigor estará sempre disponível nesta página, 
                com a data de atualização devidamente informada.
            </p>

            <h2>9. Contato</h2>
            <p>
                Em caso de dúvidas, sugestões ou solicitações referentes a estes Termos de Uso, 
                entre em contato com nossa equipe pelo e-mail 
                <a href="mailto:contato@favamimoveis.com.br" className="text-blue-600 dark:text-blue-400 underline ml-1">
                    contato@favamimoveis.com.br
                </a>.
            </p>

            <p className="mt-8 text-sm text-neutral-500">
                © {new Date().getFullYear()} Favam Imóveis — Todos os direitos reservados.
            </p>
        </LegalPageLayout>
    );
};

export default TermsPage;
