import { Product, Category, Banner } from "../types";

export const products: Product[] = [
  {
    id: "acai-ovo",
    name: "Açaí Ovo 450g",
    price: 24.99,
    originalPrice: 44.99,
    description: "Delicioso açaí 450g servido em ovo de chocolate com frutas frescas e complementos à sua escolha. Edição limitada!",
    image: "/lovable-uploads/2751c739-3d1a-4ddc-9c5c-3d3176b8c731.png",
    category: "especiais",
    popular: true,
    inStock: true,
    isPromo: true,
    rating: 5.0,
    reviews: 42,
    details: "Apenas 40 combos disponíveis! Não perca essa oportunidade!",
    scheduleLink: "/agendar-entrega/acai-ovo",
    paymentLinks: {
      immediate: "https://payment.example.com/acai-ovo/immediate",
      scheduled: "https://payment.example.com/acai-ovo/scheduled"
    }
  },
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
    details: "Pague 1, Leve 2 (Apenas Retirada)",
    scheduleLink: "/agendar-entrega/combo-1",
    paymentLinks: {
      immediate: "https://payment.example.com/combo-1/immediate",
      scheduled: "https://payment.example.com/combo-1/scheduled"
    }
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/combo-2"
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
    details: "A maioria dos clientes escolhe esse porque é o melhor custo-benefício!",
    scheduleLink: "/agendar-entrega/combo-3"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/combo-4"
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
    details: "Pague 1, Leve 2 - Zero Açúcar (Apenas Retirada)",
    scheduleLink: "/agendar-entrega/combo-zero-1"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/combo-zero-2"
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
    details: "A maioria dos clientes escolhe esse porque é o melhor custo-benefício!",
    scheduleLink: "/agendar-entrega/combo-zero-3"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/combo-zero-4"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-1"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-2"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-3"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-4"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-zero-1"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-zero-2"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-zero-3"
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
    details: "Apenas Retirada",
    scheduleLink: "/agendar-entrega/acai-zero-4"
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
  "/acai-tradicional.jpg": "/lovable-uploads/c32fdd74-8acf-471e-af15-f151ca8db813.png",
  "/acai-300ml.jpg": "/lovable-uploads/04f8d728-6e3b-4308-bbfa-9bc136fe20dc.png",
  "/acai-500ml.jpg": "/lovable-uploads/d66e305f-10df-4f6e-9b39-f071f65e058a.png",
  "/acai-700ml.jpg": "/lovable-uploads/f9fd4997-885a-4624-acec-a81d0ef53088.png",
  "/acai-1l.jpg": "/lovable-uploads/d66e305f-10df-4f6e-9b39-f071f65e058a.png",
  "/acai-zero-300ml.jpg": "/lovable-uploads/04f8d728-6e3b-4308-bbfa-9bc136fe20dc.png",
  "/acai-zero-500ml.jpg": "/lovable-uploads/c32fdd74-8acf-471e-af15-f151ca8db813.png",
  "/acai-zero-700ml.jpg": "/lovable-uploads/f9fd4997-885a-4624-acec-a81d0ef53088.png",
  "/acai-zero-1l.jpg": "/lovable-uploads/d66e305f-10df-4f6e-9b39-f071f65e058a.png",
  "/categoria-combos.jpg": "/lovable-uploads/f9fd4997-885a-4624-acec-a81d0ef53088.png",
  "/categoria-zero.jpg": "/lovable-uploads/04f8d728-6e3b-4308-bbfa-9bc136fe20dc.png",
  "/categoria-individual.jpg": "/lovable-uploads/d66e305f-10df-4f6e-9b39-f071f65e058a.png",
  "/categoria-zero-individual.jpg": "/lovable-uploads/c32fdd74-8acf-471e-af15-f151ca8db813.png",
  "/banner-principal.jpg": "/lovable-uploads/f9fd4997-885a-4624-acec-a81d0ef53088.png",
  "/banner-secundario.jpg": "/lovable-uploads/d66e305f-10df-4f6e-9b39-f071f65e058a.png",
};

export const getImageUrl = (path: string) => {
  return placeholders[path] || path;
};
