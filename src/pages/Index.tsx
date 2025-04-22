
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CallToAction } from "@/components/CallToAction";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRef } from "react";

const Index = () => {
  const featuredProductsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <div ref={featuredProductsRef}>
          <FeaturedProducts />
        </div>
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
