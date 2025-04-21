
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Banner } from "@/types";
import { banners } from "@/data/products";
import { getImageUrl } from "@/data/products";
import { MapPin, Star, Clock, Truck } from "lucide-react";
import { LocationDialog } from "./LocationDialog";

export function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [showLocationDialog, setShowLocationDialog] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLocationSet = (location: { lat: number; lng: number; address: string }) => {
    setUserLocation(location.address);
    setShowLocationDialog(false);
  };

  const banner = banners[currentBanner];

  return (
    <div className="relative h-[60vh] md:h-[70vh] bg-acai-900/5 overflow-hidden">
      {/* Background Image with Purple Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${getImageUrl(banner.image)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-acai-900/80 to-acai-800/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="flex items-center justify-center space-x-2 mb-2 text-white">
            <MapPin size={20} />
            <span>{userLocation || "Escolha sua localização"}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Açaí Delivery
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-white/90 mb-4">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>5-15 min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck size={16} />
              <span>Pedido Mínimo R$ 10,00</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4 text-white/90">
            <Star size={20} fill="currentColor" className="text-yellow-400" />
            <span>4,9 (2116 avaliações)</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-acai-600 hover:bg-acai-700 text-white font-semibold"
            >
              <Link to="/produtos">Fazer Pedido</Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              <Link to="/promocoes">Promoções</Link>
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-white/70">
            Entrega Grátis para {userLocation || "sua região"}! 
            Aproveite nossa promoção com preços irresistíveis 💜
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentBanner === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>

      {showLocationDialog && <LocationDialog onLocationSet={handleLocationSet} />}
    </div>
  );
}
