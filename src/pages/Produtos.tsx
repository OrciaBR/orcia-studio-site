import { Seo } from "@/components/Seo";
      <Seo
        title="Produtos Orcia - Cubas de Banheiro"
        description="Conheça nossa linha de cubas de apoio, embutir e sobrepor. Design italiano, materiais nobres e acabamento impecável."
        image="/android-chrome-512x512.png"
        url="https://orcia.com.br/produtos"
      />
import luceImg from "@/assets/luce.png";
import sienaImg from "@/assets/siena.png";
import vittaImg from "@/assets/vitta.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
const Produtos = () => {
  const products = [
    {
      id: 1,
      name: "Cuba Luce",
      category: "Linha Sobrepor",
      description: "Design atemporal com formas suaves e acabamento impecável",
      image: luceImg,
      url: "https://www.mercadolivre.com.br/cuba-pia-de-apoio-sobrepor-37x27cm-branca-para-banheiro-lavabo-luce-orcia/p/MLB51901843?pdp_filters=seller_id%3A2428547429",
    },
    {
      id: 2,
      name: "Cuba Siena",
      category: "Linha Sobrepor",
      description: "Linhas contemporâneas que valorizam ambientes modernos",
      image: sienaImg,
      url: "https://www.mercadolivre.com.br/cuba-branca-banheiro-lavabo-pia-sobrepor-oval-siena-orcia/up/MLBU3334656818?pdp_filters=seller_id%3A2428547429",
    },
    {
      id: 3,
      name: "Cuba Vitta",
      category: "Linha Embutir",
      description: "Sofisticação italiana em cada detalhe e curva",
      image: vittaImg,
      url: "https://www.mercadolivre.com.br/cuba-embutir-48cm-x-355cm-para-banheiro-lavabo-orcia-vitta/up/MLBU3292567143?pdp_filters=seller_id%3A2428547429",
    },
  ];
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6">
              Nossos Produtos
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada cuba Orcia é uma obra de arte funcional, projetada para
              elevar ambientes através da perfeita combinação entre forma e
              função.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Foto da ${product.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="font-inter text-sm text-gold font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-medium text-foreground mb-4">
                    {product.name}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  {product.name === "Cuba Luce" ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <Button
                        size="lg"
                        className="bg-primary text-background hover:bg-primary/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <Link to="/produtos/luce">Ver produto</Link>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <a href={product.url} target="_blank" rel="noopener noreferrer">Comprar agora</a>
                      </Button>
                    </div>
                  ) : product.name === "Cuba Vitta" ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <Button
                        size="lg"
                        className="bg-primary text-background hover:bg-primary/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <Link to="/produtos/vitta">Ver produto</Link>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <a href={product.url} target="_blank" rel="noopener noreferrer">Comprar agora</a>
                      </Button>
                    </div>
                  ) : product.name === "Cuba Siena" ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <Button
                        size="lg"
                        className="bg-primary text-background hover:bg-primary/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <Link to="/produtos/siena">Ver produto</Link>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 w-full"
                        asChild
                      >
                        <a href={product.url} target="_blank" rel="noopener noreferrer">Comprar agora</a>
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 mt-2 w-full"
                      asChild
                    >
                      <a href={product.url} target="_blank" rel="noopener noreferrer">Comprar agora</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
              Características exclusivas
            </h2>
            <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                Material Premium
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Material de alta qualidade com resistência superior
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                Design Italiano
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Inspirado na elegância do Vale d'Orcia
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                Fácil Limpeza
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Superfície lisa que facilita a higienização diária
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                Instalação Fácil
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Sistema otimizado para instalação profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
            Interessado em nossos produtos?
          </h2>
          <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
          <p className="font-inter text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Baixe nosso catálogo completo ou entre em contato para mais
            informações sobre especificações técnicas e disponibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8"
            >
              <a
                href="https://lista.mercadolivre.com.br/_CustId_2428547429"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no Mercado Livre
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-inter"
            >
              <Link to="/contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Produtos;
