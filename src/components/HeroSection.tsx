
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Banner } from "@/types";
import { banners } from "@/data/products";
import { getImageUrl } from "@/data/products";
import { MapPin, Star, Clock, Truck } from "lucide-react";
import { LocationDialog } from "./LocationDialog";
import { StateSelectionDialog } from "./StateSelectionDialog";
import { getStateName } from "@/data/locations";

interface HeroSectionProps {
  featuredProductsRef: React.RefObject<HTMLDivElement>;
}

export function HeroSection({ featuredProductsRef }: HeroSectionProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [userState, setUserState] = useState<string>("RS");
  const [userCity, setUserCity] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const [showStateSelection, setShowStateSelection] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLocationSet = (location: { lat: number; lng: number; address: string; distance: string }) => {
    setUserLocation(location.address);
    setDistance(location.distance);
    setShowLocationDialog(false);
    setShowStateSelection(true);
  };

  const handleStateAndCitySelected = (location: { state: string; city: string }) => {
    setUserState(location.state);
    setUserCity(location.city);
    setUserLocation(location.city);
    setShowStateSelection(false);
  };

  const handlePromocaoClick = () => {
    featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const banner = banners[currentBanner];

  const handleLocationClick = () => {
    setShowStateSelection(true);
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] bg-acai-900/5 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${getImageUrl(banner.image)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-acai-900/80 to-acai-800/30"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div 
            className="flex items-center justify-center space-x-2 mb-2 text-white cursor-pointer"
            onClick={handleLocationClick}
          >
            <MapPin size={20} />
            <span>
              {userCity ? (
                <>
                  {userCity}, {getStateName(userState)}
                </>
              ) : (
                "Escolha sua localização"
              )}
              {distance && (
                <div className="text-sm text-white/80">
                  {distance} de você
                </div>
              )}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Açaí Premium
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
          
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
              <span className="text-white font-medium">ABERTO</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
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
              onClick={handlePromocaoClick}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              Promoções
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-white/70">
            Aproveite nossa promoção com preços irresistíveis 💜
          </div>
        </div>
      </div>
      
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
      {showStateSelection && <StateSelectionDialog initialState={userState} onLocationSet={handleStateAndCitySelected} />}
    </div>
  );
}
