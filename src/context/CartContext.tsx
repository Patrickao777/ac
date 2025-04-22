
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";
import { Product } from "@/types";

type CartItem = {
  product: Product;
  quantity: number;
  toppings?: {
    coberturas: string[];
    frutas: string[];
    complementos: string[];
    turbine: string[];
    additionalDetails?: string;
  };
};

type CartState = {
  items: CartItem[];
  total: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'UPDATE_TOPPINGS'; payload: { productId: string; toppings: CartItem['toppings'] } }
  | { type: 'CLEAR_CART' };

type CartContextType = {
  items: CartItem[];
  total: number;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateToppings: (productId: string, toppings: CartItem['toppings']) => void;
  clearCart: () => void;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
        return {
          ...state,
          items: newItems,
          total: state.total + (product.price * quantity),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { product, quantity }],
          total: state.total + (product.price * quantity),
        };
      }

    case 'REMOVE_ITEM':
      const productIdToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.product.id === productIdToRemove);

      if (itemToRemove) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== productIdToRemove),
          total: state.total - (itemToRemove.product.price * itemToRemove.quantity),
        };
      }
      return state;

    case 'UPDATE_QUANTITY':
      const { productId, quantity: newQuantity } = action.payload;
      const itemToUpdateIndex = state.items.findIndex((item) => item.product.id === productId);

      if (itemToUpdateIndex !== -1) {
        const newItems = [...state.items];
        const itemToUpdate = newItems[itemToUpdateIndex];
        const quantityDifference = newQuantity - itemToUpdate.quantity;
        newItems[itemToUpdateIndex].quantity = newQuantity;

        return {
          ...state,
          items: newItems,
          total: state.total + (itemToUpdate.product.price * quantityDifference),
        };
      }
      return state;

    case 'UPDATE_TOPPINGS':
      const { productId: idToUpdate, toppings } = action.payload;
      const toppingItemIndex = state.items.findIndex((item) => item.product.id === idToUpdate);
      
      if (toppingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[toppingItemIndex] = {
          ...updatedItems[toppingItemIndex],
          toppings
        };
        
        return {
          ...state,
          items: updatedItems,
        };
      }
      return state;

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calculate totalItems
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate totalPrice (same as total)
  const totalPrice = state.total;

  const addItem = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    
    // Add a toast notification when item is added
    toast({
      title: "Carrinho Atualizado",
      description: `${product.name} adicionado ao carrinho`,
      variant: "default"
    });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const updateToppings = (productId: string, toppings: CartItem['toppings']) => {
    dispatch({ type: 'UPDATE_TOPPINGS', payload: { productId, toppings } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider 
      value={{ 
        items: state.items, 
        total: state.total,
        totalItems,
        totalPrice,
        addItem, 
        removeItem, 
        updateQuantity,
        updateToppings, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
