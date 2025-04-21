
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-acai-600 font-bold text-8xl mb-6">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-acai-600 hover:bg-acai-700"
          >
            <Link to="/">Voltar para a Página Inicial</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
