
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ToppingsSelector } from "./ToppingsSelector";
import { CartItemToppings, Product } from "@/types";

interface ToppingsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (toppings: CartItemToppings) => void;
  product: Product;
}

export function ToppingsModal({ open, onClose, onSave, product }: ToppingsModalProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <h2 className="font-bold text-xl mb-2">Escolha os complementos</h2>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        <ToppingsSelector
          onSave={(toppings) => {
            setLoading(true);
            onSave(toppings);
            setLoading(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
