
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Banner } from "@/types";
import { banners } from "@/data/products";
import { getImageUrl } from "@/data/products";

export function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {banner.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            {banner.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-acai-600 hover:bg-acai-700 text-white font-semibold"
            >
              <Link to={banner.buttonLink}>{banner.buttonText}</Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              <Link to="/categorias">Explorar Categorias</Link>
            </Button>
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
    </div>
  );
}
