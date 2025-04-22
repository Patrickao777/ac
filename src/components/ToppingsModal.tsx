
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ToppingsSelector } from "./ToppingsSelector";
import { CartItemToppings, Product } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ToppingsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (toppings: CartItemToppings) => void;
  product: Product;
  paymentLink?: string;
  scheduleLink?: string;
}

export function ToppingsModal({
  open,
  onClose,
  onSave,
  product,
  paymentLink,
  scheduleLink,
}: ToppingsModalProps) {
  const [savedToppings, setSavedToppings] = useState<CartItemToppings | null>(null);
  const [loading, setLoading] = useState(false);

  // Links editáveis para redirecionamento
  const defaultScheduleLink = "/agendar-entrega"; 
  const scheduleHref = scheduleLink || product.scheduleLink || defaultScheduleLink;
  const payNowLink = paymentLink || `https://payment.example.com/product/${product.id}`;

  // Reset state when modal is closed
  const handleCloseModal = () => {
    setSavedToppings(null);
    onClose();
  };

  const handleSaveToppings = (toppings: CartItemToppings) => {
    setLoading(true);
    setSavedToppings(toppings);
    setLoading(false);
  };

  const handlePaymentOption = () => {
    if (savedToppings) {
      onSave(savedToppings);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-hidden flex flex-col">
        <DialogTitle className="text-xl font-bold">Escolha os complementos</DialogTitle>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        <ScrollArea className="flex-grow overflow-auto pr-4">
          <div className="pb-4">
            {!savedToppings ? (
              <ToppingsSelector onSave={handleSaveToppings} />
            ) : (
              <div className="flex flex-col items-center gap-4 py-8">
                <span className="text-lg text-green-700 font-semibold mb-4">
                  Complementos salvos!
                </span>
                <span className="text-base font-medium text-gray-800 mb-2 text-center">
                  Deseja que entregamos agora?
                </span>
                <div className="w-full flex flex-col gap-2">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg"
                    onClick={handlePaymentOption}
                  >
                    <a
                      href={payNowLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Pagar agora"
                    >
                      Pagar agora
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
                    variant="outline"
                    onClick={handlePaymentOption}
                  >
                    <a
                      href={scheduleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Agendar entrega"
                    >
                      Não, quero agendar a entrega
                    </a>
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
