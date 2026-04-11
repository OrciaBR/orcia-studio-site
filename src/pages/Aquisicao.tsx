import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sosLogo from "@/assets/sos-acabamentos-logo.png";

const Aquisicao = () => {
  return (
    <>
      <Seo
        title="SOS Acabamentos by Orcia - Comunicado Oficial"
        description="A Orcia anuncia a aquisição da marca SOS Acabamentos. Conheça a nova união que leva design e qualidade para um novo nível."
        canonical="https://orcia.com.br/sos-acabamentos"
      />
      <a href="#main-content" className="sr-only focus:not-sr-only bg-primary text-primary-foreground p-2 absolute z-50">
        Pular para o conteúdo principal
      </a>
      <Layout>
        <main id="main-content" aria-label="Conteúdo principal">
          {/* Hero Section com logo SOS */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center mb-10">
                <img
                  src={sosLogo}
                  alt="SOS Acabamentos"
                  className="h-24 md:h-32 w-auto"
                />
              </div>
              <p className="font-inter text-lg text-gold font-medium mb-6">
                by Orcia
              </p>
              <h1 className="font-playfair text-4xl md:text-6xl font-medium text-foreground mb-6 leading-tight">
                SOS Acabamentos agora faz parte
                <br />
                da família <span className="text-gold">Orcia</span>
              </h1>
              <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
              <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma união que fortalece nossa missão de oferecer o melhor em
                acabamentos para banheiros e lavabos de todo o Brasil.
              </p>
            </div>
          </section>

          {/* Comunicado */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-playfair text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
                  O Comunicado
                </h2>
                <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-12"></div>
                <div className="font-inter text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    É com grande entusiasmo que anunciamos a aquisição da marca{" "}
                    <strong className="text-foreground">SOS Acabamentos</strong>{" "}
                    pela <strong className="text-foreground">Orcia</strong>. Essa
                    união marca um novo capítulo na nossa trajetória de entrega de
                    produtos com design, qualidade e elegância.
                  </p>
                  <p>
                    A partir de agora, nossos produtos passarão a ser comercializados
                    sob a marca <strong className="text-gold">SOS Acabamentos by Orcia</strong>,
                    combinando a confiança e o reconhecimento da Orcia com a força e
                    a presença da marca SOS Acabamentos no mercado.
                  </p>
                  <p>
                    Essa mudança é temporária e estratégica, e visa ampliar nosso
                    alcance e fortalecer nossa presença no segmento de acabamentos
                    para construção civil. Todos os produtos mantêm o mesmo padrão
                    de qualidade, materiais nobres e acabamento impecável que você
                    já conhece.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefícios da União */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">
                O que essa união significa para você
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-16"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                    Mesma Qualidade
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Todos os produtos mantêm o mesmo padrão de qualidade, materiais
                    e acabamento impecável de sempre.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                    Maior Alcance
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    A união das marcas nos permite chegar a mais clientes e
                    expandir nossa presença no mercado.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                    Novo, Mas Familiar
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    A marca SOS Acabamentos by Orcia une o melhor das duas marcas
                    em um só produto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Produtos CTA */}
          <section className="py-20 bg-primary">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-playfair text-3xl md:text-5xl font-medium text-primary-foreground mb-6">
                Conheça nossos produtos
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
              <p className="font-inter text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Nossas cubas agora são apresentadas sob a marca{" "}
                <strong className="text-gold">SOS Acabamentos by Orcia</strong>.
                O mesmo design, a mesma qualidade — com uma nova identidade.
              </p>
              <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8" asChild>
                <Link to="/produtos">Ver produtos</Link>
              </Button>
            </div>
          </section>

          {/* FAQ Rápido */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">
                Perguntas Frequentes
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-12"></div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-2">
                    Os produtos mudaram?
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Não. Apenas a marca foi atualizada para SOS Acabamentos by Orcia.
                    Os produtos, materiais, qualidade e especificações técnicas
                    permanecem exatamente os mesmos.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-2">
                    Essa mudança é permanente?
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Esta é uma mudança temporária e estratégica. No futuro,
                    poderemos revisar a nomenclatura conforme nossos planos de
                    marca.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-medium text-foreground mb-2">
                    Onde encontrar os produtos?
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Nossos produtos continuam disponíveis no Mercado Livre e nos
                    mesmos canais de venda. Basta buscar por SOS Acabamentos by Orcia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Aquisicao;
