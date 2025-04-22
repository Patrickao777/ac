
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
  const [savedToppings, setSavedToppings] = useState<CartItemToppings | null>(null);
  const [loading, setLoading] = useState(false);

  // Voltar para escolha de complementos caso precise
  const handleEdit = () => setSavedToppings(null);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-hidden flex flex-col">
        <h2 className="font-bold text-xl mb-2">Escolha os complementos</h2>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        <ScrollArea className="flex-grow overflow-auto pr-4">
          <div className="pb-4">
            {!savedToppings ? (
              <ToppingsSelector
                onSave={(toppings) => {
                  setLoading(true);
                  setSavedToppings(toppings);
                  onSave(toppings); // Só atualizar para fora, não fazer nada com carrinho.
                  setLoading(false);
                }}
              />
            ) : (
              <div className="flex flex-col items-center gap-4 py-12">
                <span className="text-lg text-green-700 font-semibold mb-2">Complementos salvos!</span>
                <Button variant="outline" onClick={handleEdit} className="w-full">
                  Editar complementos
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
        {/* Mostra botões só depois de salvar complementos */}
        {savedToppings && (
          <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row gap-2">
            {paymentLink && (
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
            )}
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
