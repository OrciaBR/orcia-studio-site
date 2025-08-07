import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Mensagem enviada com sucesso - Orcia Studio"
        description="Recebemos sua mensagem! Em breve entraremos em contato. Obrigado por falar com a Orcia Studio."
        canonical="https://orcia.com.br/success"
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
          { '@type': 'ListItem', position: 2, name: 'Sucesso', item: 'https://orcia.com.br/success' }
        ]
      }) }} />
      <a href="#main-content" className="sr-only focus:not-sr-only bg-primary text-primary-foreground p-2 absolute z-50">Pular para o conteúdo principal</a>
      <Layout>
        <main id="main-content" aria-label="Conteúdo principal">
      <section className="py-32 bg-background text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-medium text-gold mb-6">
            Obrigado pelo envio!
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Recebemos sua mensagem e entraremos em contato em breve.<br />
            Caso queira retornar, clique no botão abaixo.
          </p>
          <button
            className="bg-gold text-background font-inter font-medium px-8 py-3 rounded-lg shadow hover:bg-gold/90 transition"
            onClick={() => navigate(-1)}
          >
            Voltar para página anterior
          </button>
        </div>
      </section>
        </main>
      </Layout>
    </>
  );
};

export default Success;
