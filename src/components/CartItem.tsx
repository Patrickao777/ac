
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { getImageUrl } from "@/data/products";
import { Trash2 } from "lucide-react";
import { ToppingsSelector } from "./ToppingsSelector";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateToppings } = useCart();
  const [showToppings, setShowToppings] = useState(false);
  
  const handleRemove = () => {
    removeItem(item.product.id);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="flex flex-col gap-4 p-4 border-b">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 w-24 h-24">
          <img
            src={getImageUrl(item.product.image)}
            alt={item.product.name}
            className="w-full h-full object-cover rounded"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="font-medium">{item.product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{item.product.description}</p>
          <div className="mt-2 font-semibold text-acai-700">
            {formatPrice(item.product.price)}
          </div>
          
          {item.toppings && (
            <div className="mt-2 text-sm text-gray-600">
              {item.toppings.coberturas.length > 0 && (
                <p>Coberturas: {item.toppings.coberturas.join(", ")}</p>
              )}
              {item.toppings.frutas.length > 0 && (
                <p>Frutas: {item.toppings.frutas.join(", ")}</p>
              )}
              {item.toppings.complementos.length > 0 && (
                <p>Complementos: {item.toppings.complementos.join(", ")}</p>
              )}
              {item.toppings.turbine.length > 0 && (
                <p>Turbine: {item.toppings.turbine.join(", ")}</p>
              )}
              {item.toppings.additionalDetails && (
                <p>Observações: {item.toppings.additionalDetails}</p>
              )}
            </div>
          )}
          
          <Button
            variant="link"
            className="mt-2 text-acai-600 hover:text-acai-700 p-0"
            onClick={() => setShowToppings(!showToppings)}
          >
            {item.toppings ? "Editar complementos" : "Adicionar complementos"}
          </Button>
        </div>
        
        <div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-red-500"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {showToppings && (
        <div className="mt-4 border rounded-lg p-4 bg-gray-50">
          <ToppingsSelector
            initialToppings={item.toppings}
            onSave={(newToppings) => {
              updateToppings(item.product.id, newToppings);
              setShowToppings(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

