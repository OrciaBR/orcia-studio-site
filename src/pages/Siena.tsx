import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Fotos - Siena/oval 1.png";
import img1Webp from "@/assets/Fotos - Siena/oval 1.webp";
import img2 from "@/assets/Fotos - Siena/oval 2.png";
import img2Webp from "@/assets/Fotos - Siena/oval 2.webp";
import img3 from "@/assets/Fotos - Siena/oval 3.png";
import img3Webp from "@/assets/Fotos - Siena/oval 3.webp";
import img4 from "@/assets/Fotos - Siena/oval 4.png";
import img4Webp from "@/assets/Fotos - Siena/oval 4.webp";
import img5 from "@/assets/Fotos - Siena/oval 5.png";
import img5Webp from "@/assets/Fotos - Siena/oval 5.webp";
import img6 from "@/assets/Fotos - Siena/oval 6.png";
import img6Webp from "@/assets/Fotos - Siena/oval 6.webp";

const sienaUrl = "https://www.mercadolivre.com.br/cuba-branca-banheiro-lavabo-pia-sobrepor-oval-siena-orcia/up/MLBU3334656818?pdp_filters=seller_id%3A2428547429";

const Siena = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Cuba Siena
              </h1>
              <h2 className="font-inter text-xl md:text-2xl text-gold font-medium mb-6">
                Charme e Elegância Clássica para o seu Banheiro
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full mb-8"></div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                A Cuba de Sobrepor Oval Siena da ORCIA é a escolha perfeita para quem deseja adicionar um toque de charme e elegância clássica ao banheiro ou lavabo. Com seu formato oval e instalação de sobrepor, ela se destaca na bancada, criando um ponto focal sofisticado e convidativo.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Seu design atemporal e acabamento impecável complementam uma variedade de estilos decorativos, do rústico ao moderno, adicionando uma sensação de requinte ao ambiente. Produzida com materiais de alta qualidade, a Cuba Siena oferece durabilidade e resistência, garantindo que sua beleza e funcionalidade perdurem por muitos anos. A instalação de sobrepor é simples e prática, permitindo uma renovação rápida e com grande impacto visual.
              </p>
              <h2 className="font-playfair text-2xl font-medium text-gold mb-4">Especificações Técnicas</h2>
              <ul className="font-inter text-base text-muted-foreground mb-6 leading-relaxed list-disc list-inside">
                <li>Tipo de Cuba: De Apoio / Sobrepor</li>
                <li>Material: Mármore Sintético</li>
                <li>Cor: Branca</li>
                <li>Dimensões: 40 cm (comprimento) x 33 cm (largura) x 13 cm (altura)</li>
                <li>Furo para Válvula: 1 1/4"</li>
                <li>Válvula: Não inclusa</li>
                <li>Peso Aproximado: 4,5 kg</li>
              </ul>
              <Button size="lg" className="bg-gold text-background hover:bg-gold/90 font-inter font-medium px-8 mb-4" asChild>
                <a href={sienaUrl} target="_blank" rel="noopener noreferrer">Compre no Mercado Livre</a>
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
                <picture>
                  <source srcSet={img1Webp} type="image/webp" />
                  <img src={img1} alt="Cuba Siena - Foto 1" className="rounded-lg shadow" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet={img2Webp} type="image/webp" />
                  <img src={img2} alt="Cuba Siena - Foto 2" className="rounded-lg shadow" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet={img3Webp} type="image/webp" />
                  <img src={img3} alt="Cuba Siena - Foto 3" className="rounded-lg shadow" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet={img4Webp} type="image/webp" />
                  <img src={img4} alt="Cuba Siena - Foto 4" className="rounded-lg shadow" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet={img5Webp} type="image/webp" />
                  <img src={img5} alt="Cuba Siena - Foto 5" className="rounded-lg shadow" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet={img6Webp} type="image/webp" />
                  <img src={img6} alt="Cuba Siena - Foto 6" className="rounded-lg shadow" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Siena;
