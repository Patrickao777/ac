
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { getImageUrl } from "@/data/products";

interface ProductCardProps {
  product: Product;
  buyLink?: string;
}

export function ProductCard({ product, buyLink }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/produto/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          {product.isMostSold && (
            <Badge className="absolute top-2 right-2 bg-purple-500">
              MAIS VENDIDO 💜
            </Badge>
          )}
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div>
          <Link to={`/produto/${product.id}`} className="hover:underline">
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
          </Link>
          
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          
          {product.details && (
            <p className="text-sm text-purple-600 mb-2">
              {product.details}
            </p>
          )}
          
          <div className="flex items-baseline gap-2 mb-2">
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-lg font-semibold text-acai-700">
              {formatPrice(product.price)}
            </span>
          </div>
          
          {product.rating && (
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'stroke-current fill-none'}`}
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
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {buyLink ? (
          <Button
            asChild
            variant="default"
            className="w-full bg-acai-600 hover:bg-acai-700"
          >
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full text-center"
            >
              Comprar
            </a>
          </Button>
        ) : (
          <Button 
            onClick={handleAddToCart}
            variant="default"
            className="w-full bg-acai-600 hover:bg-acai-700"
          >
            Comprar
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
