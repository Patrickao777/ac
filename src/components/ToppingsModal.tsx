
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ToppingsSelector } from "./ToppingsSelector";
import { CartItemToppings, Product } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Calendar } from "lucide-react";

interface ToppingsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (toppings: CartItemToppings) => void;
  product: Product;
  paymentLink?: string;
}

export function ToppingsModal({ open, onClose, onSave, product, paymentLink }: ToppingsModalProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-hidden flex flex-col">
        <h2 className="font-bold text-xl mb-2">Escolha os complementos</h2>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        
        <ScrollArea className="flex-grow overflow-auto pr-4">
          <div className="pb-4">
            <ToppingsSelector
              onSave={(toppings) => {
                setLoading(true);
                onSave(toppings);
                setLoading(false);
              }}
            />
          </div>
        </ScrollArea>
        
        {paymentLink && (
          <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row gap-2">
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 flex-1"
            >
              <a 
                href={paymentLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Ir para pagamento
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex-1"
            >
              <Calendar className="mr-2 h-4 w-4" /> Agendar entrega
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
