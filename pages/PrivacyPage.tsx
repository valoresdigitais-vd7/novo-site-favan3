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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade – Favam Imóveis" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Introdução</h2>
            <p>
                A Favam Imóveis, acessível através de favan3.valoresdigitais.com, valoriza a privacidade e segurança
                das informações de seus usuários e clientes. Este documento descreve como coletamos, utilizamos,
                armazenamos e protegemos seus dados conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/18 – LGPD).
            </p>

            <h2>2. Coleta de Dados Pessoais</h2>
            <p>
                Coletamos informações pessoais e de navegação para viabilizar nossos serviços, melhorar a experiência do
                usuário, personalizar conteúdos e otimizar campanhas de marketing.  
                Dados coletados incluem, mas não se limitam a:
            </p>
            <ul>
                <li>Nome, telefone, e-mail e cidade de interesse;</li>
                <li>Dados de navegação (IP, cookies, páginas acessadas, tempo de visita);</li>
                <li>Informações fornecidas em formulários de contato e simulações.</li>
            </ul>

            <h2>3. Finalidade do Tratamento dos Dados</h2>
            <p>
                As informações coletadas são utilizadas para:
            </p>
            <ul>
                <li>Atendimento personalizado via WhatsApp e e-mail;</li>
                <li>Envio de conteúdos relevantes, como guias e materiais educativos;</li>
                <li>Geração de propostas personalizadas e comparativos de imóveis;</li>
                <li>Gestão de campanhas de marketing e análise de performance (ex.: GTM e ferramentas analíticas);</li>
                <li>Cumprimento de obrigações legais e contratuais.</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
                Seus dados podem ser compartilhados com parceiros estratégicos, corretores credenciados e plataformas
                de automação de marketing, exclusivamente para os fins descritos nesta política.  
                Nenhum dado é vendido ou cedido a terceiros sem consentimento.
            </p>

            <h2>5. Cookies e Tecnologias de Rastreamento</h2>
            <p>
                Utilizamos cookies e ferramentas de rastreamento para melhorar a navegação e personalizar sua experiência.
                Você pode ajustar as preferências de cookies em seu navegador a qualquer momento.
            </p>

            <h2>6. Armazenamento e Segurança</h2>
            <p>
                Adotamos medidas técnicas e administrativas adequadas para proteger as informações coletadas
                contra acessos não autorizados, perda, alteração ou destruição.  
                Os dados são armazenados em servidores seguros e criptografados.
            </p>

            <h2>7. Seus Direitos</h2>
            <p>
                Conforme a LGPD, você tem o direito de:
            </p>
            <ul>
                <li>Acessar os dados mantidos sobre você;</li>
                <li>Solicitar correção ou exclusão de informações;</li>
                <li>Revogar o consentimento para uso de dados;</li>
                <li>Solicitar portabilidade e esclarecimentos adicionais.</li>
            </ul>
            <p>
                Para exercer seus direitos, entre em contato pelo e-mail: <strong>privacidade@favamimoveis.com.br</strong>.
            </p>

            <h2>8. Retenção de Dados</h2>
            <p>
                Mantemos suas informações pelo período necessário para cumprimento das finalidades descritas ou conforme
                exigido por lei. Após esse prazo, os dados são anonimizados ou excluídos de forma segura.
            </p>

            <h2>9. Atualizações desta Política</h2>
            <p>
                Esta política poderá ser atualizada periodicamente para refletir mudanças legais ou operacionais.
                Recomendamos a revisão deste documento periodicamente.
            </p>

            <h2>10. Contato</h2>
            <p>
                Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais,
                entre em contato conosco:
            </p>
            <ul>
                <li><strong>Favam Imóveis</strong></li>
                <li>E-mail: privacidade@favamimoveis.com.br</li>
                <li>WhatsApp: (xx) xxxxx-xxxx</li>
                <li>Endereço comercial: Rua Exemplo, 123 – Mococa/SP – Brasil</li>
            </ul>

            <p>
                Ao usar nosso site e serviços, você declara ciência e concordância com os termos desta Política de Privacidade.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
