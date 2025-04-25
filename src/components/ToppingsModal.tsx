import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ToppingsSelector } from "./ToppingsSelector";
import { CartItemToppings, Product } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

// Default payment links if product-specific links are not provided
const DEFAULT_PAYMENT_LINKS = {
  immediate: "https://payment.example.com/immediate",
  scheduled: "https://payment.example.com/scheduled"
};

interface ToppingsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (toppings: CartItemToppings) => void;
  product: Product;
  paymentLink?: string;
}

export function ToppingsModal({
  open,
  onClose,
  onSave,
  product,
  paymentLink,
}: ToppingsModalProps) {
  const [savedToppings, setSavedToppings] = useState<CartItemToppings | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const { addItem } = useCart();

  // Get product-specific payment links or use defaults
  const productPaymentLinks = product.paymentLinks || DEFAULT_PAYMENT_LINKS;
  const immediatePaymentLink = paymentLink || productPaymentLinks.immediate;
  const scheduledPaymentLink = product.paymentLinks?.scheduled || DEFAULT_PAYMENT_LINKS.scheduled;

  // Reset state when modal is closed
  const handleCloseModal = () => {
    setSavedToppings(null);
    setShowSchedule(false);
    setSelectedDate(undefined);
    setSelectedTime("");
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
      addItem(product);
      // Redirect to product-specific immediate payment link
      window.location.href = immediatePaymentLink;
    }
  };

  const handleScheduleDelivery = () => {
    setShowSchedule(true);
  };

  const handleConfirmSchedule = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione uma data e horário para a entrega",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = format(selectedDate, "dd/MM/yyyy");
    if (savedToppings) {
      onSave(savedToppings);
      addItem(product);
      
      toast({
        title: "Agendamento confirmado!",
        description: `Entrega agendada para ${formattedDate} às ${selectedTime}`,
        variant: "default",
      });

      // Redirect to product-specific scheduled payment link
      window.location.href = scheduledPaymentLink;
      handleCloseModal();
    }
  };

  // Desabilita datas anteriores ao dia atual
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-hidden flex flex-col">
        <DialogTitle className="text-xl font-bold">
          {showSchedule ? "Escolha a data e hora" : "Escolha os complementos"}
        </DialogTitle>
        <p className="text-muted-foreground mb-4">{product.name}</p>
        <ScrollArea className="flex-grow overflow-auto pr-4">
          <div className="pb-4">
            {!savedToppings && !showSchedule && (
              <ToppingsSelector onSave={handleSaveToppings} />
            )}
            
            {savedToppings && !showSchedule && (
              <div className="flex flex-col items-center gap-4 py-8">
                <span className="text-lg text-green-700 font-semibold mb-4">
                  Complementos salvos!
                </span>
                <span className="text-base font-medium text-gray-800 mb-2 text-center">
                  Deseja que entregamos agora?
                </span>
                <div className="w-full flex flex-col gap-2">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg"
                    onClick={handlePaymentOption}
                  >
                    Sim, entregar agora
                  </Button>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
                    variant="outline"
                    onClick={handleScheduleDelivery}
                  >
                    Não, quero agendar a entrega
                  </Button>
                </div>
              </div>
            )}
            
            {showSchedule && (
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Selecione a data</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isPastDate}
                    className="rounded-md border w-full pointer-events-auto"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Selecione o horário</label>
                  <Input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleConfirmSchedule}
                  disabled={!selectedDate || !selectedTime}
                >
                  Confirmar agendamento
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
