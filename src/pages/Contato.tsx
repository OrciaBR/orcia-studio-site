import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";

const Contato = () => {
  return (
    <>
      <Seo
        title="Contato - Orcia Studio"
        description="Fale com a equipe Orcia Studio. Tire dúvidas, solicite orçamento ou envie sua mensagem."
        canonical="https://orcia.com.br/contato"
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
          { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://orcia.com.br/contato' }
        ]
      }) }} />
      <a href="#main-content" className="sr-only focus:not-sr-only bg-primary text-primary-foreground p-2 absolute z-50">Pular para o conteúdo principal</a>
      <Layout>
        <main id="main-content" aria-label="Conteúdo principal">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6">
              Entre em Contato
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudá-lo a encontrar a cuba perfeita para seu projeto. 
              Entre em contato conosco para mais informações.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1  gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-medium text-foreground mb-6">
                    Envie sua mensagem
                  </h2>
                  <div className="w-12 h-0.5 bg-gold rounded-full mb-8"></div>
                  
                  <form name="Contato" method="POST" action="/pages/success" data-netlify="true" className="space-y-6">
                    <input type="hidden" name="form-name" value="Contato" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nome" className="font-inter text-sm font-medium text-foreground">
                          Nome *
                        </Label>
                        <Input 
                          id="nome" 
                          name="nome"
                          type="text"
                          placeholder="Seu nome"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-inter text-sm font-medium text-foreground">
                          E-mail *
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="seu@email.com"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="telefone" className="font-inter text-sm font-medium text-foreground">
                          Telefone
                        </Label>
                        <Input 
                          id="telefone" 
                          name="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="empresa" className="font-inter text-sm font-medium text-foreground">
                          Empresa
                        </Label>
                        <Input 
                          id="empresa" 
                          name="empresa"
                          type="text"
                          placeholder="Nome da empresa"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="assunto" className="font-inter text-sm font-medium text-foreground">
                        Assunto *
                      </Label>
                      <Input 
                        id="assunto" 
                        name="assunto"
                        type="text"
                        placeholder="Como podemos ajudar?"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem" className="font-inter text-sm font-medium text-foreground">
                        Mensagem *
                      </Label>
                      <Textarea 
                        id="mensagem"
                        name="mensagem"
                        placeholder="Descreva seu projeto ou necessidade..."
                        className="mt-2 min-h-[150px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gold text-background hover:bg-gold/90 font-inter font-medium"
                    >
                      Enviar mensagem
                    </Button>

                    <p className="font-inter text-xs text-muted-foreground text-center">
                      * Campos obrigatórios. Responderemos em até 24 horas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div hidden className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-medium text-foreground mb-6">
                  Informações de contato
                </h2>
                <div className="w-12 h-0.5 bg-gold rounded-full mb-8"></div>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Nossa equipe está pronta para atendê-lo e esclarecer suas dúvidas 
                  sobre nossos produtos e serviços.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-inter text-lg font-medium text-foreground mb-2">
                          Endereço
                        </h3>
                        <p className="font-inter text-muted-foreground">
                          Rua da Elegância, 123<br />
                          Vila Italiana - São Paulo, SP<br />
                          CEP: 01234-567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-inter text-lg font-medium text-foreground mb-2">
                          Telefone
                        </h3>
                        <p className="font-inter text-muted-foreground">
                          (11) 3456-7890<br />
                          (11) 99999-9999 (WhatsApp)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-inter text-lg font-medium text-foreground mb-2">
                          E-mail
                        </h3>
                        <p className="font-inter text-muted-foreground">
                          contato@orcia.com.br<br />
                          vendas@orcia.com.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-inter text-lg font-medium text-foreground mb-2">
                          Horário de atendimento
                        </h3>
                        <p className="font-inter text-muted-foreground">
                          Segunda a sexta: 8h às 18h<br />
                          Sábado: 8h às 14h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
              Nossa localização
            </h2>
            <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-lg text-muted-foreground">
              Visite nosso showroom e conheça pessoalmente nossa linha de produtos.
            </p>
          </div>
          
          <div className="bg-muted/30 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-inter text-muted-foreground">
                Mapa interativo em breve
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

export default Contato;