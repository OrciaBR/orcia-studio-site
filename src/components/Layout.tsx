import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-medium text-foreground">orcia</span>
                <div className="w-12 h-0.5 bg-gold rounded-full -mt-1"></div>
              </div>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                  isActive('/') ? 'text-gold' : 'text-foreground'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/produtos" 
                className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                  isActive('/produtos') ? 'text-gold' : 'text-foreground'
                }`}
              >
                Produtos
              </Link>
              <Link 
                to="/sobre" 
                className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                  isActive('/sobre') ? 'text-gold' : 'text-foreground'
                }`}
              >
                Sobre
              </Link>
              <Link 
                to="/trabalhe-conosco" 
                className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                  isActive('/trabalhe-conosco') ? 'text-gold' : 'text-foreground'
                }`}
              >
                Trabalhe Conosco
              </Link>
              <Link 
                to="/contato" 
                className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                  isActive('/contato') ? 'text-gold' : 'text-foreground'
                }`}
              >
                Contato
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background font-inter">
                Catálogo
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="flex flex-col mb-4">
                <span className="font-playfair text-2xl font-medium text-gold">orcia</span>
                <div className="w-12 h-0.5 bg-gold rounded-full -mt-1"></div>
              </div>
              <p className="font-inter text-sm text-primary-foreground/80 mb-4 max-w-md">
                Beleza na forma. Cubas com design refinado, materiais nobres e acabamento impecável. 
                Inspirada no Vale d'Orcia, na Itália.
              </p>
              <p className="font-inter text-xs text-primary-foreground/60">
                Orcia - Elegância italiana em cada detalhe
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="font-inter text-sm font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/produtos" className="font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors">Produtos</Link></li>
                <li><Link to="/sobre" className="font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors">Sobre</Link></li>
                <li><Link to="/trabalhe-conosco" className="font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors">Trabalhe Conosco</Link></li>
                <li><Link to="/contato" className="font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors">Contato</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-inter text-sm font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="font-inter text-sm text-primary-foreground/80">contato@orcia.com.br</p>
                <p className="font-inter text-sm text-primary-foreground/80">(11) 9999-9999</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-inter text-xs text-primary-foreground/60">
                © 2024 Orcia. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="/privacidade" className="font-inter text-xs text-primary-foreground/60 hover:text-gold transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="font-inter text-xs text-primary-foreground/60 hover:text-gold transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;