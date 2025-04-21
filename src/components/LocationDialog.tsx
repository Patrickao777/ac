
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useState } from "react";

interface LocationDialogProps {
  onLocationSet: (location: { lat: number; lng: number; address: string; distance: string }) => void;
}

export function LocationDialog({ onLocationSet }: LocationDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetLocation = () => {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            // Extract city and state
            const city = data.address.city || 
                         data.address.town || 
                         data.address.village || 
                         data.address.hamlet ||
                         "Localidade próxima";
            const state = data.address.state || "RS";
            
            // Create a fixed distance for nearby store
            const distance = "1,6km";
            
            onLocationSet({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              address: city,
              distance: distance
            });
          } catch (error) {
            console.error("Error getting location:", error);
            // Fallback to default location
            onLocationSet({
              lat: 0,
              lng: 0,
              address: "Tramandaí",
              distance: "1,6km"
            });
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.error("Location access denied", error);
          setIsLoading(false);
          // Fallback to default location if access is denied
          onLocationSet({
            lat: 0,
            lng: 0,
            address: "Tramandaí",
            distance: "1,6km"
          });
        }
      );
    } else {
      // Fallback for browsers without geolocation
      setIsLoading(false);
      onLocationSet({
        lat: 0,
        lng: 0,
        address: "Tramandaí",
        distance: "1,6km"
      });
    }
  };

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Localização</DialogTitle>
          <DialogDescription className="text-center">
            Para encontrar a loja mais próxima
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <MapPin className="h-12 w-12 text-acai-600" />
          <p className="text-center text-muted-foreground">
            Para uma melhor experiência, permita o acesso à sua localização
          </p>
          <Button
            onClick={handleGetLocation}
            className="w-full bg-acai-600 hover:bg-acai-700"
            disabled={isLoading}
          >
            {isLoading ? "Obtendo localização..." : "Permitir acesso"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
