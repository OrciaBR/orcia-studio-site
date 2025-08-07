import { Seo } from "@/components/Seo";
      <Seo
        title="Cuba Vitta | Orcia - Funcionalidade e Elegância Discreta"
        description="Cuba de embutir Vitta: design clean, funcional e minimalista. Durabilidade, fácil limpeza e integração à bancada. Veja fotos e especificações."
        image="/android-chrome-512x512.png"
        url="https://orcia.com.br/produtos/vitta"
      />
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Fotos- Vitta/Vitta1.png";
import img2 from "@/assets/Fotos- Vitta/Vitta2.png";
import img3 from "@/assets/Fotos- Vitta/Vitta3.png";
import img4 from "@/assets/Fotos- Vitta/Vitta4.png";
import img5 from "@/assets/Fotos- Vitta/Vitta5.png";

const vittaUrl = "https://www.mercadolivre.com.br/cuba-embutir-48cm-x-355cm-para-banheiro-lavabo-orcia-vitta/up/MLBU3292567143?pdp_filters=seller_id%3A2428547429";

const Vitta = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Cuba Vitta
              </h1>
              <h2 className="font-inter text-xl md:text-2xl text-gold font-medium mb-6">
                Design Funcional e Elegância Discreta para o seu Banheiro
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mb-8"></div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                A Cuba de Embutir Vitta da ORCIA é a solução perfeita para quem busca um design clean e funcional para o banheiro ou lavabo. Com sua instalação embutida, ela proporciona uma bancada livre e organizada, ideal para ambientes que valorizam a praticidade e a estética minimalista.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Seu formato retangular e acabamento suave se integram harmoniosamente a diversos estilos de decoração, desde os mais clássicos aos contemporâneos. Fabricada com materiais de alta qualidade, a Cuba Vitta garante durabilidade e resistência ao uso diário, mantendo seu brilho e funcionalidade por muito tempo. A instalação embutida é ideal para quem busca otimizar o espaço e criar uma superfície contínua e elegante.
              </p>
              <h2 className="font-playfair text-2xl font-medium text-gold mb-4">Especificações Técnicas</h2>
              <ul className="font-inter text-base text-muted-foreground mb-6 leading-relaxed list-disc list-inside">
                <li>Tipo de Cuba: De Embutir</li>
                <li>Material: Mármore Sintético</li>
                <li>Cor: Branca</li>
                <li>Dimensões: 48 cm (comprimento) x 35,5 cm (largura) x 14 cm (altura)</li>
                <li>Furo para Válvula: 1 1/4"</li>
                <li>Válvula: Não inclusa</li>
                <li>Peso Aproximado: 5,5 kg</li>
              </ul>
              <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 mb-4" asChild>
                <a href={vittaUrl} target="_blank" rel="noopener noreferrer">Compre no Mercado Livre</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:text-primary font-inter" onClick={() => navigate(-1)}>
                Voltar
              </Button>
              <div className="mt-4">
                <a href="/produtos" className="text-gold underline font-inter text-base hover:text-gold/80">
                  ← Voltar para a página de produtos
                </a>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img src={img1} alt="Cuba Vitta - Foto 1" className="rounded-lg shadow" loading="lazy" />
                <img src={img2} alt="Cuba Vitta - Foto 2" className="rounded-lg shadow" loading="lazy" />
                <img src={img3} alt="Cuba Vitta - Foto 3" className="rounded-lg shadow" loading="lazy" />
                <img src={img4} alt="Cuba Vitta - Foto 4" className="rounded-lg shadow" loading="lazy" />
                <img src={img5} alt="Cuba Vitta - Foto 5" className="rounded-lg shadow" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vitta;
