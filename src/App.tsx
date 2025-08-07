import Siena from "@/pages/Siena";
          <Route path="/produtos/siena" element={<Siena />} />
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
const Index = lazy(() => import("@/pages/Index"));
const Produtos = lazy(() => import("@/pages/Produtos"));
const Sobre = lazy(() => import("@/pages/Sobre"));
const TrabalheConosco = lazy(() => import("@/pages/TrabalheConosco"));
const Contato = lazy(() => import("@/pages/Contato"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Luce = lazy(() => import("@/pages/Luce"));
const Vitta = lazy(() => import("@/pages/Vitta"));
const FAQ = lazy(() => import("@/pages/FAQ"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen text-lg">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/produtos/luce" element={<Luce />} />
              <Route path="/produtos/vitta" element={<Vitta />} />
              <Route path="/produtos/siena" element={<Siena />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
