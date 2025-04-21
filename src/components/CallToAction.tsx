
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-16 bg-acai-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-acai-600 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-acai-800 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experimente o Verdadeiro Sabor do Açaí
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Junte-se a milhares de clientes satisfeitos e desfrute do melhor açaí do Brasil com entrega rápida e qualidade garantida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-acai-700 hover:bg-acai-50 font-semibold"
            >
              Peça Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
