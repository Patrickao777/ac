
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { getImageUrl } from "@/data/products";
import { ShoppingCart, Heart } from "lucide-react";
import { ToppingsModal } from "@/components/ToppingsModal";
import { CartItemToppings } from "@/types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem, updateToppings } = useCart();
  const [showToppings, setShowToppings] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <p className="mb-6">O produto que você está procurando não existe ou foi removido.</p>
            <Button asChild className="bg-acai-600 hover:bg-acai-700">
              <Link to="/produtos">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleComprarClick = () => {
    setShowToppings(true);
  };

  const handleSaveToppings = (toppings: CartItemToppings) => {
    addItem(product);
    updateToppings(product.id, toppings);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const paymentLink = `https://payment.example.com/product/${product.id}`;
  const scheduleLink = product.scheduleLink;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-acai-600">Início</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <Link to="/produtos" className="text-gray-500 hover:text-acai-600">Produtos</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center text-acai-600">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={getImageUrl(product.image)} 
              alt={product.name} 
              className="w-full h-full object-contain aspect-square"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'stroke-current fill-none'}`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-acai-700">
                {formatPrice(product.price)}
              </span>
              
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              
              {product.originalPrice && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <div>
              <h2 className="font-semibold mb-2">Descrição</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleComprarClick} 
                  className="bg-acai-600 hover:bg-acai-700 flex-1"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Comprar
                </Button>
                
                <Button variant="outline" className="sm:flex-none">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Categoria:</span>
                  <span className="text-gray-600">
                    {product.category === "tradicional" ? "Tradicional" :
                     product.category === "frutas" ? "Com Frutas" :
                     product.category === "premium" ? "Premium" :
                     product.category === "especiais" ? "Especiais" :
                     product.category}
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Disponibilidade:</span>
                  <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                    {product.inStock ? "Em estoque" : "Fora de estoque"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="descricao" className="mb-12">
          <TabsList className="border-b w-full justify-start rounded-none gap-4">
            <TabsTrigger value="descricao" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-acai-600 data-[state=active]:text-acai-700 data-[state=active]:shadow-none">
              Descrição
            </TabsTrigger>
            <TabsTrigger value="detalhes" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-acai-600 data-[state=active]:text-acai-700 data-[state=active]:shadow-none">
              Informações Nutricionais
            </TabsTrigger>
            <TabsTrigger value="avaliacoes" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-acai-600 data-[state=active]:text-acai-700 data-[state=active]:shadow-none">
              Avaliações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="descricao" className="pt-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Sobre o {product.name}</h3>
              <p>O açaí é uma fruta típica da região amazônica, conhecida por seu sabor único e por seus benefícios para a saúde. Rico em antioxidantes, fibras e ácidos graxos, o açaí é considerado um superalimento.</p>
              <p className="mt-4">Nossa polpa de açaí é extraída de frutos selecionados da região do Pará, garantindo qualidade e sabor superiores. Utilizamos um processo que preserva ao máximo os nutrientes e propriedades da fruta, resultando em um produto puro e saboroso.</p>
              <p className="mt-4">O {product.name} é perfeito para quem busca um alimento nutritivo, energético e refrescante, ideal para o consumo diário ou após atividades físicas.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="detalhes" className="pt-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Informações Nutricionais</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nutriente
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantidade por 100g
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Calorias</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">70 kcal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proteínas</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.3g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Carboidratos</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.2g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gorduras</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.5g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fibras</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.3g</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cálcio</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30mg</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ferro</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.7mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="avaliacoes" className="pt-6">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-acai-100 flex items-center justify-center">
                    <span className="font-semibold text-acai-700">MS</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Maria Silva</h4>
                    <span className="text-xs text-gray-500">10/04/2023</span>
                  </div>
                  <div className="flex text-yellow-400 my-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(5) ? 'fill-current' : 'stroke-current fill-none'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2">
                    Simplesmente o melhor açaí que já experimentei! A textura é perfeita, nem muito líquido nem muito consistente. O sabor é autêntico e a qualidade é notável. Peço regularmente e nunca me decepciona.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-acai-100 flex items-center justify-center">
                    <span className="font-semibold text-acai-700">JR</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">João Rodrigues</h4>
                    <span className="text-xs text-gray-500">22/03/2023</span>
                  </div>
                  <div className="flex text-yellow-400 my-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(4) ? 'fill-current' : 'stroke-current fill-none'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2">
                    Muito bom! O açaí tem um sabor intenso e natural. Poderia vir com um pouco mais de granola, mas no geral estou muito satisfeito com a compra.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">Deixe sua avaliação</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                      Avaliação
                    </label>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="text-yellow-400 p-1"
                        >
                          <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            ></path>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                      Comentário
                    </label>
                    <textarea
                      id="review"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-acai-500 focus:border-acai-500"
                      placeholder="Compartilhe sua opinião sobre este produto..."
                    ></textarea>
                  </div>
                  
                  <Button className="bg-acai-600 hover:bg-acai-700">
                    Enviar Avaliação
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      
      <ToppingsModal
        open={showToppings}
        onClose={() => setShowToppings(false)}
        onSave={handleSaveToppings}
        product={product}
        paymentLink={paymentLink}
        scheduleLink={scheduleLink}
      />
    </div>
  );
};

export default ProductDetail;
