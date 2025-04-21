
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = ["Todos", ...new Set(products.map(product => product.category))];
  
  const filteredProducts = activeCategory && activeCategory !== "Todos"
    ? products.filter(product => product.category === activeCategory)
    : products;

  // Get only the popular products for the initial display
  const popularProducts = products.filter(product => product.popular);
  const displayProducts = activeCategory ? filteredProducts : popularProducts;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Descubra o autêntico sabor do açaí com qualidade premium e preços acessíveis.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-6 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category || (!activeCategory && category === "Todos") ? "default" : "outline"}
                className={activeCategory === category || (!activeCategory && category === "Todos")  
                  ? "bg-acai-600 hover:bg-acai-700" 
                  : "hover:text-acai-600 hover:border-acai-600"
                }
                onClick={() => setActiveCategory(category === "Todos" ? null : category)}
              >
                {category === "tradicional" ? "Tradicional" : 
                 category === "frutas" ? "Com Frutas" : 
                 category === "premium" ? "Premium" : 
                 category === "especiais" ? "Especiais" : 
                 category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-acai-600 hover:bg-acai-700"
          >
            <a href="/produtos">Ver Todos os Produtos</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
