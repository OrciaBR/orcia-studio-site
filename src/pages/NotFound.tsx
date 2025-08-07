import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Página não encontrada - Orcia Studio"
        description="Erro 404: Página não encontrada. Volte para a home da Orcia Studio."
        canonical="https://orcia.com.br/404"
      />
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Orcia Studio',
        url: 'https://orcia.com.br/',
        logo: 'https://orcia.com.br/assets/orcia-logo-white.svg',
        sameAs: [
          'https://www.instagram.com/orciastudio',
          'https://www.facebook.com/orciastudio'
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://orcia.com.br/' },
          { '@type': 'ListItem', position: 2, name: '404', item: 'https://orcia.com.br/404' }
        ]
      }) }} />
      <a href="#main-content" className="sr-only focus:not-sr-only bg-primary text-primary-foreground p-2 absolute z-50">Pular para o conteúdo principal</a>
      <main id="main-content" aria-label="Conteúdo principal">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
            <a href="/" className="text-blue-500 hover:text-blue-700 underline">
              Return to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
