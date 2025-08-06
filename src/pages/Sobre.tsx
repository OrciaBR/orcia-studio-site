import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import orciaLogo from "@/assets/orcia-logo.svg";

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6">
              Nossa História
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Inspirada na beleza atemporal do Vale d'Orcia, na Toscana, nossa marca 
              nasceu da paixão pelo design italiano e pela busca da perfeição em cada detalhe.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-8">
                A origem do nome Orcia
              </h2>
              <div className="space-y-6">
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  O Vale d'Orcia é uma região da Toscana, na Itália, reconhecida pela 
                  UNESCO como Patrimônio Mundial da Humanidade. Conhecido por suas 
                  paisagens deslumbrantes, arquitetura renascentista e tradição artística, 
                  o vale representa tudo aquilo que nossa marca busca transmitir.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Assim como as colinas suaves e harmoniosas do Vale d'Orcia, nossas 
                  cubas são projetadas com curvas elegantes que fluem naturalmente, 
                  criando uma conexão visual e emocional com a beleza italiana.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop" 
                alt="Vale d'Orcia, Toscana" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
              Nossos Valores
            </h2>
            <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada decisão que tomamos é guiada por princípios que refletem 
              nossa paixão pela excelência e pelo design atemporal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Paixão pelo Design
                </h3>
                <p className="font-inter text-muted-foreground">
                  Cada produto é criado com amor e dedicação, 
                  buscando a perfeita harmonia entre forma e função.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Qualidade Superior
                </h3>
                <p className="font-inter text-muted-foreground">
                  Utilizamos apenas materiais premium e processos 
                  rigorosos para garantir durabilidade e beleza duradoura.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                  Inovação Constante
                </h3>
                <p className="font-inter text-muted-foreground">
                  Sempre em busca de novas tecnologias e técnicas 
                  que possam elevar ainda mais nossos produtos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-primary-foreground mb-8">
                Identidade Visual
              </h2>
              <div className="space-y-6">
                <p className="font-inter text-lg text-primary-foreground/90 leading-relaxed">
                  Nossa identidade visual reflete a sofisticação e elegância que 
                  caracterizam a marca Orcia. O traço ondulado sob nosso nome simboliza 
                  a fluidez da água - elemento central de nossos produtos.
                </p>
                <p className="font-inter text-lg text-primary-foreground/90 leading-relaxed">
                  As cores escolhidas - preto, dourado fosco, off-white e cinza fendi - 
                  transmitem luxo, minimalismo e cuidado com os detalhes, 
                  posicionando nossa marca no segmento premium.
                </p>
                <div className="pt-4">
                  <h3 className="font-playfair text-xl font-medium text-gold mb-3">
                    Nosso Slogan
                  </h3>
                  <p className="font-playfair text-2xl font-light text-primary-foreground">
                    "Beleza na forma."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-background p-12 rounded-lg shadow-2xl text-center">
                <div>
                  <img src={orciaLogo} alt="Orcia Logo" className="mx-auto" style={{ width: 220, height: "auto" }} />
                </div>
                <p className="font-playfair text-lg text-muted-foreground">
                  Beleza na forma.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
            Nossa Missão
          </h2>
          <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Elevar ambientes através da forma. Entregar cubas com design refinado, 
            materiais nobres e acabamento impecável, inspirando estilo de vida através 
            do design inteligente, elegância cotidiana e minimalismo com significado.
          </p>
          
          <div className="bg-muted/20 p-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-medium text-foreground mb-6">
              Visão da Marca
            </h3>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Orcia é mais do que uma marca de cubas - é a expressão de beleza funcional, 
              design italiano e sofisticação atemporal. Traduzimos em nossas formas a 
              leveza da água, a elegância da cerâmica e o requinte do design europeu.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;