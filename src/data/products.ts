
import { Product, Category, Banner } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Açaí Tradicional 500ml",
    price: 19.9,
    description: "Açaí tradicional puro em tigela de 500ml, feito com a polpa original do Pará.",
    image: "/acai-tradicional.jpg",
    category: "tradicional",
    popular: true,
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "2",
    name: "Açaí com Banana 500ml",
    price: 22.9,
    description: "Açaí tradicional com banana fatiada em tigela de 500ml.",
    image: "/acai-banana.jpg",
    category: "frutas",
    popular: true,
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: "3",
    name: "Açaí com Morango 500ml",
    price: 24.9,
    description: "Açaí tradicional com morangos frescos em tigela de 500ml.",
    image: "/acai-morango.jpg",
    category: "frutas",
    popular: true,
    inStock: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: "4",
    name: "Açaí Premium 1L",
    price: 34.9,
    originalPrice: 39.9,
    description: "Açaí premium em tigela de 1L, com granola, banana e mel.",
    image: "/acai-premium.jpg",
    category: "premium",
    inStock: true,
    rating: 5.0,
    reviews: 98
  },
  {
    id: "5",
    name: "Açaí Whey Protein 500ml",
    price: 29.9,
    description: "Açaí com whey protein para atletas e praticantes de atividades físicas.",
    image: "/acai-whey.jpg",
    category: "especiais",
    inStock: true,
    rating: 4.7,
    reviews: 76
  },
  {
    id: "6",
    name: "Açaí com Nutella 500ml",
    price: 27.9,
    description: "Açaí tradicional com generosa camada de Nutella.",
    image: "/acai-nutella.jpg",
    category: "especiais",
    popular: true,
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: "7",
    name: "Açaí Zero Açúcar 500ml",
    price: 23.9,
    description: "Açaí sem adição de açúcar, ideal para dietas e diabéticos.",
    image: "/acai-zero.jpg",
    category: "especiais",
    inStock: true,
    rating: 4.6,
    reviews: 58
  },
  {
    id: "8",
    name: "Açaí Energético 500ml",
    price: 26.9,
    description: "Açaí com guaraná em pó e ginseng para mais energia no dia a dia.",
    image: "/acai-energetico.jpg",
    category: "especiais",
    inStock: true,
    rating: 4.7,
    reviews: 82
  }
];

export const categories: Category[] = [
  {
    id: "tradicional",
    name: "Tradicional",
    image: "/categoria-tradicional.jpg"
  },
  {
    id: "frutas",
    name: "Com Frutas",
    image: "/categoria-frutas.jpg"
  },
  {
    id: "premium",
    name: "Premium",
    image: "/categoria-premium.jpg"
  },
  {
    id: "especiais",
    name: "Especiais",
    image: "/categoria-especiais.jpg"
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

// Placeholder image URLs - to be replaced with actual uploaded images
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
};

// Function to get image placeholder
export const getImageUrl = (path: string) => {
  return placeholders[path] || path;
};
