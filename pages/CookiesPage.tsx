import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

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

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são Cookies?</h2>
                <p>Cookies são pequenos arquivos de texto enviados por sites que você visita e armazenados em seu navegador. Eles tornam sua experiência online mais eficiente e personalizada, lembrando suas preferências e interações anteriores.</p>

                <h2>2. Como Utilizamos os Cookies</h2>
                <p>Na <strong>Favam Imóveis</strong>, utilizamos cookies para garantir o funcionamento adequado do site, entender o comportamento do usuário e melhorar constantemente nossos serviços digitais. Também usamos cookies para personalizar conteúdo e oferecer comunicações e anúncios mais relevantes.</p>

                <h2>3. Tipos de Cookies Utilizados</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Garantem o funcionamento básico do site e permitem a navegação entre páginas e acesso a áreas seguras.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes usam nosso site, como páginas mais acessadas e mensagens de erro. Esses dados são analisados de forma agregada e anônima.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem lembrar preferências e personalizar a experiência do usuário (como idioma ou cidade escolhida).</li>
                    <li><strong>Cookies de Marketing:</strong> Utilizados para exibir anúncios relevantes e medir a eficácia das campanhas digitais com base no perfil de navegação do usuário.</li>
                </ul>

                <h2>4. Consentimento e Gerenciamento de Cookies</h2>
                <p>Ao acessar o site <strong>favan3.valoresdigitais.com</strong>, você será informado sobre o uso de cookies e poderá optar por aceitá-los ou ajustar suas preferências. Caso queira alterar suas escolhas posteriormente, basta limpar os cookies em seu navegador ou acessar as configurações para editar suas permissões.</p>

                <h2>5. Cookies de Terceiros</h2>
                <p>Podemos utilizar cookies de terceiros (como Google Analytics, Meta Pixel e ferramentas de automação de marketing) para compreender métricas de desempenho e impacto de campanhas. Esses serviços possuem políticas próprias de privacidade e cookies.</p>

                <h2>6. Período de Armazenamento</h2>
                <p>Os cookies podem ser armazenados por períodos variados, dependendo de sua finalidade. Alguns expiram assim que você fecha o navegador (cookies de sessão) e outros permanecem por mais tempo (cookies persistentes), até que sejam automaticamente excluídos ou manualmente removidos.</p>

                <h2>7. Proteção de Dados e Privacidade</h2>
                <p>Os cookies não armazenam informações pessoais sensíveis como nome, CPF ou dados bancários. Todas as coletas respeitam a LGPD (Lei Geral de Proteção de Dados) e são utilizadas apenas para finalidades legítimas descritas nesta política.</p>

                <h2>8. Alterações nesta Política</h2>
                <p>A <strong>Favam Imóveis</strong> reserva-se o direito de atualizar esta Política de Cookies periodicamente, refletindo melhorias, novas tecnologias ou exigências legais. A data da última atualização será sempre exibida no topo da página.</p>

                <h2>9. Contato</h2>
                <p>Se você tiver dúvidas sobre esta Política de Cookies, entre em contato conosco pelo e-mail <a href="mailto:contato@favamimoveis.com.br">contato@favamimoveis.com.br</a>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
