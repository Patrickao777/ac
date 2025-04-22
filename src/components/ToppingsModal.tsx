
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
  const [savedToppings, setSavedToppings] = useState<CartItemToppings | null>(null);
  const [loading, setLoading] = useState(false);

  // Reset state when modal is closed
  const handleCloseModal = () => {
    setSavedToppings(null);
    onClose();
  };

  const handleSaveToppings = (toppings: CartItemToppings) => {
    setLoading(true);
    setSavedToppings(toppings);
    onSave(toppings); // Notifica o parent mas mantém modal aberto
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-hidden flex flex-col">
        <DialogTitle className="text-xl font-bold">Escolha os complementos</DialogTitle>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        <ScrollArea className="flex-grow overflow-auto pr-4">
          <div className="pb-4">
            {!savedToppings ? (
              <ToppingsSelector
                onSave={handleSaveToppings}
              />
            ) : (
              <div className="flex flex-col items-center gap-4 py-8">
                <span className="text-lg text-green-700 font-semibold mb-2">Complementos salvos!</span>
                {/* Pergunta após salvar complementos */}
                <span className="text-base font-medium text-gray-800 mb-4 text-center">
                  Deseja que entregamos agora?
                </span>
                <div className="w-full flex flex-col sm:flex-row gap-2">
                  {paymentLink && (
                    <Button
                      asChild
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold"
                    >
                      <a
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pagar agora"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Sim, por favor!
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-red-600 text-red-700 hover:bg-red-50 font-semibold"
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Não, quero agendar a entrega!
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
