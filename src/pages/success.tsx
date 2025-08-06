import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const Success = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="py-32 bg-background text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-medium text-gold mb-6">
            Obrigado pelo envio!
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Recebemos sua mensagem e entraremos em contato em breve.<br />
            Caso queira retornar, clique no botão abaixo.
          </p>
          <button
            className="bg-gold text-background font-inter font-medium px-8 py-3 rounded-lg shadow hover:bg-gold/90 transition"
            onClick={() => navigate(-1)}
          >
            Voltar para página anterior
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
