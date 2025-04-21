import { Product, Category, Banner } from "../types";

export const products: Product[] = [
  {
    id: "combo-1",
    name: "Combo 2 Açaís 300ml",
    price: 19.90,
    originalPrice: 39.80,
    description: "2 Copos Açaí 300ml com 9 Complementos Grátis",
    image: "/acai-tradicional.jpg",
    category: "combos",
    popular: true,
    inStock: true,
    isPromo: true,
    rating: 4.9,
    reviews: 156,
    details: "Pague 1, Leve 2 (Apenas Retirada)"
  },
  {
    id: "combo-2",
    name: "Combo 2 Açaís 500ml",
    price: 22.90,
    originalPrice: 43.80,
    description: "2 Copos Açaí 500ml com 9 Complementos Grátis",
    image: "/acai-500ml.jpg",
    category: "combos",
    popular: true,
    inStock: true,
    isPromo: true,
    rating: 4.8,
    reviews: 142,
    details: "Apenas Retirada"
  },
  {
    id: "combo-3",
    name: "Combo 2 Açaís 700ml",
    price: 26.90,
    originalPrice: 53.80,
    description: "2 Copos Açaí 700ml com 9 Complementos Grátis. Mais que o dobro do Combo 1 por apenas R$7 a mais!",
    image: "/acai-700ml.jpg",
    category: "combos",
    popular: true,
    inStock: true,
    isPromo: true,
    isMostSold: true,
    rating: 5.0,
    reviews: 289,
    details: "A maioria dos clientes escolhe esse porque é o melhor custo-benefício!"
  },
  {
    id: "combo-4",
    name: "Combo 2 Açaís 1L",
    price: 37.90,
    originalPrice: 75.80,
    description: "2 Copos Açaí 1L com 9 Complementos Grátis",
    image: "/acai-1l.jpg",
    category: "combos",
    popular: true,
    inStock: true,
    isPromo: true,
    rating: 4.9,
    reviews: 178,
    details: "Apenas Retirada"
  },
  {
    id: "combo-zero-1",
    name: "Combo 2 Açaís Zero 300ml",
    price: 22.90,
    originalPrice: 45.80,
    description: "2 Copos Açaí 300ml ZERO com 9 Complementos Grátis",
    image: "/acai-zero-300ml.jpg",
    category: "combos-zero",
    popular: true,
    inStock: true,
    isPromo: true,
    rating: 4.7,
    reviews: 98,
    details: "Pague 1, Leve 2 - Zero Açúcar (Apenas Retirada)"
  },
  {
    id: "combo-zero-2",
    name: "Combo 2 Açaís Zero 500ml",
    price: 25.90,
    originalPrice: 49.80,
    description: "2 Copos Açaí 500ml ZERO com 9 Complementos Grátis",
    image: "/acai-zero-500ml.jpg",
    category: "combos-zero",
    inStock: true,
    isPromo: true,
    rating: 4.8,
    reviews: 87,
    details: "Apenas Retirada"
  },
  {
    id: "combo-zero-3",
    name: "Combo 2 Açaís Zero 700ml",
    price: 29.90,
    originalPrice: 59.80,
    description: "2 Copos Açaí 700ml ZERO com 9 Complementos Grátis. Mais que o dobro do Combo 1 por apenas R$7 a mais!",
    image: "/acai-zero-700ml.jpg",
    category: "combos-zero",
    popular: true,
    inStock: true,
    isPromo: true,
    isMostSold: true,
    rating: 4.9,
    reviews: 156,
    details: "A maioria dos clientes escolhe esse porque é o melhor custo-benefício!"
  },
  {
    id: "combo-zero-4",
    name: "Combo 2 Açaís Zero 1L",
    price: 40.90,
    originalPrice: 81.80,
    description: "2 Copos Açaí 1L ZERO com 9 Complementos Grátis",
    image: "/acai-zero-1l.jpg",
    category: "combos-zero",
    inStock: true,
    isPromo: true,
    rating: 4.7,
    reviews: 76,
    details: "Apenas Retirada"
  },
  {
    id: "acai-1",
    name: "Açaí 300ml",
    price: 19.90,
    description: "1 Copo Açaí 300ml com 9 Complementos Grátis",
    image: "/acai-300ml.jpg",
    category: "individual",
    inStock: true,
    rating: 4.8,
    reviews: 123,
    details: "Apenas Retirada"
  },
  {
    id: "acai-2",
    name: "Açaí 500ml",
    price: 22.90,
    description: "1 Copo Açaí 500ml com 9 Complementos Grátis",
    image: "/acai-500ml.jpg",
    category: "individual",
    inStock: true,
    rating: 4.9,
    reviews: 145,
    details: "Apenas Retirada"
  },
  {
    id: "acai-3",
    name: "Açaí 700ml",
    price: 26.90,
    description: "1 Copo Açaí 700ml com 9 Complementos Grátis",
    image: "/acai-700ml.jpg",
    category: "individual",
    inStock: true,
    rating: 4.9,
    reviews: 167,
    details: "Apenas Retirada"
  },
  {
    id: "acai-4",
    name: "Açaí 1L",
    price: 37.90,
    description: "1 Copo Açaí 1L com 9 Complementos Grátis",
    image: "/acai-1l.jpg",
    category: "individual",
    inStock: true,
    rating: 4.8,
    reviews: 134,
    details: "Apenas Retirada"
  },
  {
    id: "acai-zero-1",
    name: "Açaí Zero 300ml",
    price: 22.90,
    description: "1 Copo Açaí 300ml ZERO com 9 Complementos Grátis",
    image: "/acai-zero-300ml.jpg",
    category: "individual-zero",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    details: "Apenas Retirada"
  },
  {
    id: "acai-zero-2",
    name: "Açaí Zero 500ml",
    price: 25.90,
    description: "1 Copo Açaí 500ml ZERO com 9 Complementos Grátis",
    image: "/acai-zero-500ml.jpg",
    category: "individual-zero",
    inStock: true,
    rating: 4.8,
    reviews: 92,
    details: "Apenas Retirada"
  },
  {
    id: "acai-zero-3",
    name: "Açaí Zero 700ml",
    price: 29.90,
    description: "1 Copo Açaí 700ml ZERO com 9 Complementos Grátis",
    image: "/acai-zero-700ml.jpg",
    category: "individual-zero",
    inStock: true,
    rating: 4.8,
    reviews: 103,
    details: "Apenas Retirada"
  },
  {
    id: "acai-zero-4",
    name: "Açaí Zero 1L",
    price: 40.90,
    description: "1 Copo Açaí 1L ZERO com 9 Complementos Grátis",
    image: "/acai-zero-1l.jpg",
    category: "individual-zero",
    inStock: true,
    rating: 4.7,
    reviews: 78,
    details: "Apenas Retirada"
  }
];

export const categories: Category[] = [
  {
    id: "combos",
    name: "Combos Promocionais",
    image: "/categoria-combos.jpg"
  },
  {
    id: "combos-zero",
    name: "Combos Zero Açúcar",
    image: "/categoria-zero.jpg"
  },
  {
    id: "individual",
    name: "Açaí Individual",
    image: "/categoria-individual.jpg"
  },
  {
    id: "individual-zero",
    name: "Açaí Zero Individual",
    image: "/categoria-zero-individual.jpg"
  }
];

export const banners: Banner[] = [
  {
    id: "1",
    image: "/banner-principal.jpg",
    title: "O Melhor Açaí do Brasil",
    subtitle: "Feito com a autêntica polpa de açaí do Pará",
    buttonText: "Peça Agora",
    buttonLink: "/produtos"
  },
  {
    id: "2",
    image: "/banner-secundario.jpg",
    title: "Açaí Premium",
    subtitle: "Experimente nossa linha premium com ingredientes selecionados",
    buttonText: "Conheça",
    buttonLink: "/produtos/premium"
  }
];

const placeholders = {
  "/acai-tradicional.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/acai-banana.jpg": "https://images.unsplash.com/photo-1611079829668-5b221fc41338?q=80&w=1000&auto=format&fit=crop",
  "/acai-morango.jpg": "https://images.unsplash.com/photo-1579705379003-8e3682e4a8ac?q=80&w=1000&auto=format&fit=crop",
  "/acai-premium.jpg": "https://images.unsplash.com/photo-1490323948693-c7ffed3f7e01?q=80&w=1000&auto=format&fit=crop",
  "/acai-whey.jpg": "https://images.unsplash.com/photo-1568625365631-98e50853b268?q=80&w=1000&auto=format&fit=crop",
  "/acai-nutella.jpg": "https://images.unsplash.com/photo-1579705379003-8e3682e4a8ac?q=80&w=1000&auto=format&fit=crop",
  "/acai-zero.jpg": "https://images.unsplash.com/photo-1546039907-2d9e1bf2eeb9?q=80&w=1000&auto=format&fit=crop",
  "/acai-energetico.jpg": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1000&auto=format&fit=crop",
  "/categoria-tradicional.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/categoria-frutas.jpg": "https://images.unsplash.com/photo-1611079829668-5b221fc41338?q=80&w=1000&auto=format&fit=crop",
  "/categoria-premium.jpg": "https://images.unsplash.com/photo-1490323948693-c7ffed3f7e01?q=80&w=1000&auto=format&fit=crop",
  "/categoria-especiais.jpg": "https://images.unsplash.com/photo-1568625365631-98e50853b268?q=80&w=1000&auto=format&fit=crop",
  "/banner-principal.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/banner-secundario.jpg": "https://images.unsplash.com/photo-1490323948693-c7ffed3f7e01?q=80&w=1000&auto=format&fit=crop",
  "/categoria-combos.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/categoria-zero.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/categoria-individual.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
  "/categoria-zero-individual.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop",
};

export const getImageUrl = (path: string) => {
  return placeholders[path] || path;
};
