
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  popular?: boolean;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  isPromo?: boolean;
  isMostSold?: boolean;
  details?: string;
  scheduleLink?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface Topping {
  id: string;
  name: string;
  category: 'coberturas' | 'frutas' | 'complementos' | 'turbine';
  isFirstOrderFree?: boolean;
}

export interface CartItemToppings {
  coberturas: string[];
  frutas: string[];
  complementos: string[];
  turbine: string[];
  additionalDetails?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  toppings?: CartItemToppings;
}
