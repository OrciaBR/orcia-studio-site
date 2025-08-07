import { Seo } from "@/components/Seo";
      <Seo
        title="FAQ Orcia - Perguntas Frequentes sobre Cubas de Banheiro"
        description="Tire suas dúvidas sobre cubas de apoio, embutir, sobrepor, instalação, manutenção, garantia e mais."
        image="/android-chrome-512x512.png"
        url="https://orcia.com.br/faq"
      />
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <h2 className="font-inter text-xl md:text-2xl text-gold font-medium mb-6">
              Tudo o que você precisa saber sobre nossas cubas
            </h2>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Como escolher a cuba ideal para meu banheiro?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para escolher a cuba ideal, considere:<br />
                  • O espaço disponível na bancada<br />
                  • O estilo de decoração do ambiente<br />
                  • O tipo de instalação desejada (sobrepor ou embutir)<br />
                  • A frequência de uso do banheiro<br />
                  • O orçamento disponível<br /><br />
                  Recomendamos medir o espaço com precisão e considerar o fluxo de pessoas que utilizarão o banheiro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Qual a diferença entre cuba de sobrepor e de embutir?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  • Cuba de Sobrepor: É instalada sobre a bancada, criando um visual mais destacado e moderno. Ideal para quem busca um elemento decorativo marcante.<br /><br />
                  • Cuba de Embutir: É instalada por baixo ou nivelada com a bancada, proporcionando uma superfície mais limpa e fácil de limpar. Perfeita para quem prefere um visual mais minimalista.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Como fazer a manutenção e limpeza das cubas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para manter sua cuba em perfeito estado:<br />
                  • Use produtos de limpeza suaves e não abrasivos<br />
                  • Limpe regularmente com pano macio ou esponja<br />
                  • Evite produtos à base de cloro ou ácidos fortes<br />
                  • Seque após o uso para evitar manchas de água<br />
                  • Em caso de manchas persistentes, use bicarbonato de sódio com água
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Qual a durabilidade das cubas ORCIA?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  As cubas ORCIA são produzidas com materiais de alta qualidade, como mármore sintético e cerâmica, garantindo excepcional durabilidade. Com os cuidados adequados, podem durar muitos anos mantendo sua beleza e funcionalidade. Os materiais são resistentes a manchas, riscos e impactos do uso diário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  A instalação é complexa? Preciso de um profissional?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Recomendamos a instalação por um profissional qualificado para garantir:<br />
                  • Vedação adequada<br />
                  • Alinhamento correto<br />
                  • Conexões hidráulicas seguras<br />
                  • Preservação da garantia<br /><br />
                  Embora algumas pessoas com experiência possam fazer a instalação, um profissional garantirá o melhor resultado e durabilidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Quais os benefícios do mármore sintético e da cerâmica?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Mármore Sintético:<br />
                  • Alta resistência a impactos<br />
                  • Facilidade de limpeza<br />
                  • Não mancha facilmente<br />
                  • Acabamento uniforme<br /><br />
                  Cerâmica:<br />
                  • Durabilidade excepcional<br />
                  • Resistência a produtos químicos<br />
                  • Superfície não porosa<br />
                  • Facilidade de manutenção
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  As cubas acompanham válvula e sifão?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não, nossas cubas não acompanham válvula ou sifão. Isso permite que você escolha os acessórios que melhor se adequam ao seu projeto e estilo. Todas as nossas cubas são compatíveis com válvulas padrão de 1 1/4", facilmente encontradas no mercado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Como faço para comprar uma cuba ORCIA?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Você pode adquirir nossas cubas de várias formas:<br />
                  • Diretamente pela nossa loja no Mercado Livre<br />
                  • Entrando em contato através da página de contato<br />
                  • Solicitando um orçamento personalizado<br /><br />
                  Oferecemos garantia de fábrica e suporte pós-venda para todas as nossas cubas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Qual o prazo de garantia das cubas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oferecemos garantia contra defeitos de fabricação, desde que seguidas as orientações de instalação e manutenção. Para acionar a garantia ou esclarecer dúvidas específicas, entre em contato com nossa equipe de suporte através da página de contato.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left font-playfair text-lg">
                  Posso personalizar o tamanho ou cor da cuba?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No momento, trabalhamos com medidas e cores padronizadas para garantir a qualidade e o melhor custo-benefício. Nossa linha atual oferece opções que atendem à maioria dos projetos. Para necessidades específicas, recomendamos entrar em contato para verificarmos a possibilidade de atendimento especial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
