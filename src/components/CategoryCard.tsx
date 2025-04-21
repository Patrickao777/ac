
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";
import { getImageUrl } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/produtos/${category.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={getImageUrl(category.image)}
            alt={category.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <CardContent className="p-4 text-white">
              <h3 className="font-semibold text-xl">{category.name}</h3>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
}
