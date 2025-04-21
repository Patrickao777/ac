
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CartItemToppings } from "@/types";
import { toast } from "@/components/ui/use-toast";

const TOPPINGS = {
  coberturas: [
    "Cobertura Amora", "Cobertura Caramelo", "Cobertura Chocolate",
    "Cobertura Leite condensado", "Cobertura Maracujá", "Cobertura Mel",
    "Cobertura Menta", "Cobertura Morango"
  ],
  frutas: [
    "Abacaxi", "Banana", "Kiwi", "Manga", "Morango", "Uva"
  ],
  complementos: [
    "Amendoin", "Aveia", "Castanha de caju", "Chocoball", "Confete",
    "Creme de banana", "Creme de mousse de maracujá", "Creme de morango",
    "Farinha de cereais", "Gotas de chocolate", "Granola", "Leite em pó",
    "Ovomaltine", "Paçoca", "Sucrilhos"
  ],
  turbine: [
    "Bis (3 un)", "Chantilly", "Nutella", "01 bola de sorvete de creme",
    "Creme de Ninho", "Creme de Oreo", "KitKat"
  ]
};

const LIMITS = {
  coberturas: 2,
  frutas: 2,
  complementos: 4,
  turbine: 1
};

interface ToppingsSelectorProps {
  onSave: (toppings: CartItemToppings) => void;
  initialToppings?: CartItemToppings;
}

export function ToppingsSelector({ onSave, initialToppings }: ToppingsSelectorProps) {
  const [toppings, setToppings] = useState<CartItemToppings>(initialToppings || {
    coberturas: [],
    frutas: [],
    complementos: [],
    turbine: [],
    additionalDetails: ""
  });

  const handleToppingToggle = (category: keyof CartItemToppings, item: string) => {
    if (category === 'additionalDetails') return;

    setToppings(prev => {
      const currentItems = prev[category] as string[];
      const isSelected = currentItems.includes(item);

      if (isSelected) {
        return {
          ...prev,
          [category]: currentItems.filter(i => i !== item)
        };
      }

      if (currentItems.length >= LIMITS[category]) {
        toast({
          description: `Você pode selecionar apenas ${LIMITS[category]} ${category === 'turbine' ? 'opção' : 'opções'} de ${category}`
        });
        return prev;
      }

      return {
        ...prev,
        [category]: [...currentItems, item]
      };
    });
  };

  const handleSave = () => {
    onSave(toppings);
  };

  return (
    <div className="space-y-6">
      {/* Coberturas */}
      <div>
        <h3 className="font-semibold mb-2">
          Coberturas ({toppings.coberturas.length}/{LIMITS.coberturas})
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {TOPPINGS.coberturas.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`cobertura-${item}`}
                checked={toppings.coberturas.includes(item)}
                onCheckedChange={() => handleToppingToggle('coberturas', item)}
              />
              <Label htmlFor={`cobertura-${item}`}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Frutas */}
      <div>
        <h3 className="font-semibold mb-2">
          Frutas ({toppings.frutas.length}/{LIMITS.frutas})
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {TOPPINGS.frutas.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`fruta-${item}`}
                checked={toppings.frutas.includes(item)}
                onCheckedChange={() => handleToppingToggle('frutas', item)}
              />
              <Label htmlFor={`fruta-${item}`}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Complementos */}
      <div>
        <h3 className="font-semibold mb-2">
          Complementos ({toppings.complementos.length}/{LIMITS.complementos})
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {TOPPINGS.complementos.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`complemento-${item}`}
                checked={toppings.complementos.includes(item)}
                onCheckedChange={() => handleToppingToggle('complementos', item)}
              />
              <Label htmlFor={`complemento-${item}`}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Turbine */}
      <div>
        <h3 className="font-semibold mb-2">
          Turbine seu açaí ({toppings.turbine.length}/{LIMITS.turbine})
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {TOPPINGS.turbine.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`turbine-${item}`}
                checked={toppings.turbine.includes(item)}
                onCheckedChange={() => handleToppingToggle('turbine', item)}
              />
              <Label htmlFor={`turbine-${item}`}>
                {item}
                <span className="text-sm text-green-600 block">Grátis no 1º pedido</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Additional Details */}
      <div>
        <h3 className="font-semibold mb-2">Adicionar algum detalhe?</h3>
        <Input
          value={toppings.additionalDetails}
          onChange={(e) => setToppings(prev => ({ ...prev, additionalDetails: e.target.value }))}
          maxLength={140}
          placeholder="Escreva o detalhe aqui..."
        />
        <p className="text-sm text-gray-500 mt-1">
          {(toppings.additionalDetails?.length || 0)}/140 caracteres
        </p>
      </div>

      <Button onClick={handleSave} className="w-full bg-acai-600 hover:bg-acai-700">
        Salvar complementos
      </Button>
    </div>
  );
}
