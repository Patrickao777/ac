
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { brazilianStates, getBrazilianCitiesByState } from "@/data/locations";

interface StateSelectionDialogProps {
  initialState?: string;
  onLocationSet: (location: { state: string; city: string }) => void;
}

export function StateSelectionDialog({ initialState, onLocationSet }: StateSelectionDialogProps) {
  const [step, setStep] = useState<"state" | "city">("state");
  const [selectedState, setSelectedState] = useState<string>(initialState || "RS");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  
  useEffect(() => {
    // When state changes, load cities for that state
    if (selectedState) {
      const stateCities = getBrazilianCitiesByState(selectedState);
      setCities(stateCities);
      // Reset selected city when state changes
      setSelectedCity("");
    }
  }, [selectedState]);

  const handleStateSelect = (value: string) => {
    setSelectedState(value);
  };

  const handleCitySelect = (value: string) => {
    setSelectedCity(value);
  };

  const handleNext = () => {
    if (step === "state") {
      setStep("city");
    } else if (step === "city" && selectedCity) {
      onLocationSet({ state: selectedState, city: selectedCity });
    }
  };

  const handleBack = () => {
    if (step === "city") {
      setStep("state");
    }
  };

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Procure a loja mais próxima de você</DialogTitle>
          <DialogDescription className="text-center">
            {step === "state" ? "Escolha seu estado" : "Escolha sua cidade"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4 py-4">
          <MapPin className="h-12 w-12 text-acai-600" />
          
          {step === "state" ? (
            <div className="w-full">
              <Select value={selectedState} onValueChange={handleStateSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  {brazilianStates.map((state) => (
                    <SelectItem key={state.uf} value={state.uf}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="w-full">
              <Select value={selectedCity} onValueChange={handleCitySelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="flex w-full justify-between mt-4">
            {step === "city" && (
              <Button 
                variant="outline"
                onClick={handleBack}
              >
                Voltar
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              className={`bg-acai-600 hover:bg-acai-700 ${step === "state" ? "w-full" : "ml-auto"}`}
              disabled={step === "city" && !selectedCity}
            >
              Próximo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
