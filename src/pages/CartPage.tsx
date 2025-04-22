
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ShoppingCart, ArrowRight } from "lucide-react";

const CartPage = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [showDeliveryDialog, setShowDeliveryDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const formatPrice = (price: number | undefined) => {
    // Add safety check to ensure price is a number
    if (typeof price !== 'number') return 'R$ 0,00';
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleImmediateDelivery = () => {
    window.location.href = "https://checkout-immediate.example.com";
  };

  const handleScheduledDelivery = () => {
    if (selectedDate && selectedTime) {
      window.location.href = "https://checkout-scheduled.example.com";
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="bg-acai-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-10 w-10 text-acai-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-8">
              Parece que você ainda não adicionou nenhum produto ao carrinho.
            </p>
            <Button asChild className="bg-acai-600 hover:bg-acai-700">
              <Link to="/produtos">Continuar Comprando</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">
                    Itens do Carrinho ({totalItems})
                  </h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>

              <div>
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>

              <div className="p-4 border-t">
                <Button asChild variant="link" className="text-acai-600 hover:text-acai-700">
                  <Link to="/produtos">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Continuar Comprando
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="font-semibold text-lg mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-green-600 font-medium">GRÁTIS</span>
                </div>

                <div className="pt-3">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Código promocional"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">Aplicar</Button>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-xl text-acai-700">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-6 bg-acai-600 hover:bg-acai-700"
                onClick={() => setShowDeliveryDialog(true)}
              >
                Finalizar Compra
              </Button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Entrega segura com criptografia</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={showDeliveryDialog} onOpenChange={setShowDeliveryDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Deseja que entregamos agora?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={handleImmediateDelivery}
            >
              Sim, por favor!
            </Button>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => {
                setShowDeliveryDialog(false);
                setShowScheduleDialog(true);
              }}
            >
              Não, quero agendar a entrega!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Selecione o dia e a hora, por gentileza!</DialogTitle>
            <DialogDescription>
              Deixe seu pedido agendado e receba na hora combinada.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border w-full pointer-events-auto"
            />
            <Input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full"
            />
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={handleScheduledDelivery}
              disabled={!selectedDate || !selectedTime}
            >
              Agendar Pedido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartPage;
