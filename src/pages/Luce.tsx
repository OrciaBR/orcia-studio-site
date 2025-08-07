import { Seo } from "@/components/Seo";
      <Seo
        title="Cuba Luce | Orcia - Design e Elegância para seu Banheiro"
        description="Cuba de apoio sobrepor Luce: design elegante, compacto e sofisticado. Durabilidade, fácil instalação e acabamento impecável. Veja fotos e detalhes."
        image="/android-chrome-512x512.png"
        url="https://orcia.com.br/produtos/luce"
      />
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Fotos - Luce/imagem 1.png";
import img2 from "@/assets/Fotos - Luce/imagem 2.png";
import img3 from "@/assets/Fotos - Luce/imagem 3.png";
import img4 from "@/assets/Fotos - Luce/imagem 4.png";
import img5 from "@/assets/Fotos - Luce/imagem 5.png";
import img6 from "@/assets/Fotos - Luce/imagem 6.png";

const luceUrl = "https://www.mercadolivre.com.br/cuba-pia-de-apoio-sobrepor-37x27cm-branca-para-banheiro-lavabo-luce-orcia/p/MLB51901843?pdp_filters=seller_id%3A2428547429";

const Luce = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Cuba Luce
              </h1>
              <h2 className="font-inter text-xl md:text-2xl text-gold font-medium mb-6">
                Design e Elegância para o seu Banheiro
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mb-8"></div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Design e Elegância para o seu Banheiro<br />
                A Cuba de Apoio Sobrepor Luce da ORCIA é a escolha ideal para quem busca modernidade e funcionalidade para o banheiro ou lavabo. Com um design elegante e compacto, ela se adapta a diferentes estilos de decoração e otimiza o espaço, garantindo um toque de sofisticação ao ambiente.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Seu formato e acabamento impecáveis elevam a estética, transformando seu banheiro em um espaço mais convidativo e contemporâneo. Produzida com materiais de alta qualidade, a Cuba Luce oferece durabilidade e resistência, mantendo sua beleza por muito mais tempo. A instalação de apoio/sobrepor é prática e descomplicada, facilitando a renovação do seu ambiente.
              </p>
              <h2 className="font-playfair text-2xl font-medium text-gold mb-4">Especificações Técnicas</h2>
              <ul className="font-inter text-base text-muted-foreground mb-6 leading-relaxed list-disc list-inside">
                <li>Tipo de Cuba: De apoio / Sobrepor</li>
                <li>Material: Mármore Sintético</li>
                <li>Cor: Branca</li>
                <li>Dimensões: 37 cm (comprimento) x 27 cm (largura) x 11,5 cm (altura)</li>
                <li>Furo para Válvula: 1 1/4"</li>
                <li>Válvula: Não inclusa</li>
                <li>Peso Aproximado: 3,5 kg</li>
              </ul>
              <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 mb-4" asChild>
                <a href={luceUrl} target="_blank" rel="noopener noreferrer">Compre no Mercado Livre</a>
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
                <img src={img1} alt="Cuba Luce - Foto 1" className="rounded-lg shadow" loading="lazy" />
                <img src={img2} alt="Cuba Luce - Foto 2" className="rounded-lg shadow" loading="lazy" />
                <img src={img3} alt="Cuba Luce - Foto 3" className="rounded-lg shadow" loading="lazy" />
                <img src={img4} alt="Cuba Luce - Foto 4" className="rounded-lg shadow" loading="lazy" />
                <img src={img5} alt="Cuba Luce - Foto 5" className="rounded-lg shadow" loading="lazy" />
                <img src={img6} alt="Cuba Luce - Foto 6" className="rounded-lg shadow" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Luce;
