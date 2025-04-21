
import { CategoryCard } from "./CategoryCard";
import { categories } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Nossas Categorias</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore nossa variedade de açaís para todos os gostos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
