
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Cliente Fiel",
    quote: "O melhor açaí que já provei! A cremosidade e o sabor são incomparáveis. Peço toda semana e nunca me decepciona.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Atleta",
    quote: "Como atleta, o açaí é parte fundamental da minha dieta. O da Açaí Nacional Brasil é puro, nutritivo e delicioso.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Nutricionista",
    quote: "Como profissional de nutrição, recomendo o açaí desta marca pela qualidade e pureza do produto. Meus clientes adoram!",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=150&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-acai-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossas ofertas de açaí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex-grow">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
