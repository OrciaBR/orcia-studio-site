import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import productBasin from "@/assets/product-basin.jpg";
import orciaLogo from "@/assets/orcia-logo-white.svg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroBathroom})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <div className="mb-8 flex flex-col items-center">
            <img src={orciaLogo} alt="orcia" className="mx-auto drop-shadow-lg" style={{ width: 240, height: "auto" }} />
            
            <p className="font-playfair text-2xl md:text-3xl font-light mb-4">
            Beleza na forma.
          </p>
          
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Cubas com design refinado, materiais nobres e acabamento impecável. 
            Inspirada no Vale d'Orcia, na Itália.
          </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8">
              <Link to="/produtos">Conheça nossos produtos</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:text-primary font-inter">
              <Link to="/sobre">Nossa história</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Marca */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
                Inspirada na elegância italiana
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mb-8"></div>
              
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Orcia nasce da inspiração no Vale d'Orcia, região da Toscana conhecida pela 
                beleza e requinte. Cada cuba é projetada com atenção aos detalhes, 
                traduzindo em suas formas a leveza da água e a elegância da cerâmica.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                O traço ondulado em nossa marca simboliza a fluidez da água - elemento 
                central do nosso produto, representando leveza, movimento e continuidade.
              </p>
              
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter">
                <Link to="/sobre">Conheça nossa história completa</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img src={productBasin} alt="Cuba Orcia" className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
              Por que escolher Orcia?
            </h2>
            <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada detalhe pensado para elevar ambientes através da forma e funcionalidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Design Refinado
                </h3>
                <p className="font-inter text-muted-foreground">
                  Formas elegantes inspiradas no design italiano, 
                  com linhas que traduzem sofisticação e minimalismo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Materiais Nobres
                </h3>
                <p className="font-inter text-muted-foreground">
                  Cerâmica de alta qualidade com acabamentos premium 
                  que garantem durabilidade e beleza atemporal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Acabamento Impecável
                </h3>
                <p className="font-inter text-muted-foreground">
                  Cada peça é finalizada com cuidado artesanal, 
                  garantindo perfeição em cada detalhe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
            Pronto para transformar seu ambiente?
          </h2>
          <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
          <p className="font-inter text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Descubra nossa linha completa de cubas e encontre a peça perfeita para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8">
              <Link to="/produtos">Ver produtos</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-inter">
              <Link to="/contato">Fale conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;