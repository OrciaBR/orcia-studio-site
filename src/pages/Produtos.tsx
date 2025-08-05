import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
const Produtos = () => {
  const products = [{
    id: 1,
    name: "Cuba Classica",
    category: "Linha Premium",
    description: "Design atemporal com formas suaves e acabamento impecável",
    price: "A partir de R$ 890",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop"
  }, {
    id: 2,
    name: "Cuba Moderna",
    category: "Linha Premium",
    description: "Linhas contemporâneas que valorizam ambientes modernos",
    price: "A partir de R$ 1.200",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
  }, {
    id: 3,
    name: "Cuba Elegante",
    category: "Linha Premium",
    description: "Sofisticação italiana em cada detalhe e curva",
    price: "A partir de R$ 1.500",
    image: "https://images.unsplash.com/photo-1560472354-61fd55d2da86?w=400&h=300&fit=crop"
  }, {
    id: 4,
    name: "Cuba Minimalista",
    category: "Linha Premium",
    description: "Simplicidade refinada com máxima funcionalidade",
    price: "A partir de R$ 750",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6">
              Nossos Produtos
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada cuba Orcia é uma obra de arte funcional, projetada para elevar 
              ambientes através da perfeita combinação entre forma e função.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map(product => <Card key={product.id} className="border-0 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-lg font-semibold text-foreground">
                      {product.price}
                    </span>
                    <Button className="bg-gold text-background hover:bg-gold/90 font-inter">
                      Ver detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
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
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">Material Premium</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Material de alta qualidade com resistência superior
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
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
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-3">
                Acabamento Dourado
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Detalhes em dourado fosco para máxima elegância
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            Baixe nosso catálogo completo ou entre em contato para mais informações 
            sobre especificações técnicas e disponibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8">
              <a href="https://lista.mercadolivre.com.br/_CustId_2428547429" target="_blank" rel="noopener noreferrer">
                Ver no Mercado Livre
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-inter">
              <Link to="/contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Produtos;