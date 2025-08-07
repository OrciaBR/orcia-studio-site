import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
const Vagas = [
  {
    title: "Auxiliar de Produção",
    location: "Presencial • Pedreira/SP",
    level: "A/B/C",
    description: "Contribuir para a produção das cubas entregando valor para o cliente.",
    requirements: [
      "Disponibilidade para início imediato",
      "Vontade de fazer a diferença",
      "Não precisa de experiência"
    ]
  }
];
const TrabalheConosco = () => {
  return (
    <>
      <Seo
        title="Trabalhe Conosco - Orcia Studio"
        description="Faça parte da equipe Orcia Studio. Veja vagas abertas e envie seu currículo para trabalhar conosco."
        canonical="https://orcia.com.br/trabalheconosco"
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
          { '@type': 'ListItem', position: 2, name: 'Trabalhe Conosco', item: 'https://orcia.com.br/trabalheconosco' }
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
            Trabalhe Conosco
          </h1>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Faça parte da equipe Orcia e ajude-nos a criar produtos que elevam
            ambientes através da perfeita combinação entre design e funcionalidade.
          </p>
        </div>
      </div>
    </section>

    {/* Why Work With Us */}
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
            Por que trabalhar na Orcia?
          </h2>
          <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                Crescimento Profissional
              </h3>
              <p className="font-inter text-muted-foreground">
                Ambiente que valoriza o desenvolvimento contínuo e
                oferece oportunidades de crescimento na carreira.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-4">
                Equipe Colaborativa
              </h3>
              <p className="font-inter text-muted-foreground">
                Trabalhe com profissionais talentosos em um
                ambiente de respeito mútuo e colaboração.
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
                Produtos de Qualidade
              </h3>
              <p className="font-inter text-muted-foreground">
                Orgulhe-se de trabalhar com produtos que fazem
                a diferença na vida das pessoas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
        Vagas Abertas
          </h2>
          <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Vagas.map((vaga, idx) => (
        <Card key={idx} className="border border-border/50 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-playfair text-xl text-foreground">{vaga.title}</CardTitle>
            <p className="font-inter text-sm text-gold">{vaga.location}</p>
          </div>
          <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-inter">{vaga.level}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-muted-foreground mb-4">{vaga.description}</p>
            <ul className="font-inter text-sm text-muted-foreground space-y-1 mb-4">
          {vaga.requirements.map((req, i) => (
            <li key={i}>• {req}</li>
          ))}
            </ul>
          </CardContent>
        </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-6">
              Candidate-se
            </h2>
            <div className="w-16 h-0.5 bg-gold rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-lg text-muted-foreground">
              Interessado em fazer parte da nossa equipe? Preencha o formulário abaixo.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form name="TrabalheConosco" method="POST" action="/pages/success" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="TrabalheConosco" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nome" className="font-inter text-sm font-medium text-foreground">
                      Nome completo *
                    </Label>
                    <Input id="nome" name="nome" type="text" placeholder="Seu nome completo" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-inter text-sm font-medium text-foreground">
                      E-mail *
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="seu@email.com" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefone" className="font-inter text-sm font-medium text-foreground">
                      Telefone *
                    </Label>
                    <Input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-9999" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="vaga" className="font-inter text-sm font-medium text-foreground">
                      Vaga de interesse *
                    </Label>
                    <Select name="vaga">
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione uma vaga" />
                      </SelectTrigger>
                      <SelectContent>
                        {Vagas.map((vaga, idx) => (
                          <SelectItem key={idx} value={vaga.title}>{vaga.title}</SelectItem>
                        ))}
                        <SelectItem value="outro">Candidatura espontânea</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experiencia" className="font-inter text-sm font-medium text-foreground">
                    Experiência profissional *
                  </Label>
                  <Textarea id="experiencia" name="experiencia" placeholder="Conte-nos sobre sua experiência profissional relevante..." className="mt-2 min-h-[120px]" />
                </div>

                <div>
                  <Label htmlFor="motivacao" className="font-inter text-sm font-medium text-foreground">
                    Por que quer trabalhar na Orcia?
                  </Label>
                  <Textarea id="motivacao" name="motivacao" placeholder="Compartilhe sua motivação para fazer parte da equipe Orcia..." className="mt-2 min-h-[100px]" />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-gold text-background hover:bg-gold/90 font-inter font-medium">
                    Enviar candidatura
                  </Button>
                </div>

                <p className="font-inter text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Seus dados serão tratados com confidencialidade
                  conforme nossa política de privacidade.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
        </main>
      </Layout>
    </>
  );
};
export default TrabalheConosco;