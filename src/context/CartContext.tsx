import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";
import { Product, CartItem, CartItemToppings } from "@/types";

type CartState = {
  items: CartItem[];
  total: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_TOPPINGS'; payload: { productId: string; toppings: CartItemToppings } }
  | { type: 'CLEAR_CART' };

type CartContextType = {
  items: CartItem[];
  total: number;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateToppings: (productId: string, toppings: CartItemToppings) => void;
  clearCart: () => void;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { product } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        return state; // Do not add duplicate items
      } else {
        return {
          ...state,
          items: [...state.items, { product, quantity: 1 }],
          total: state.total + product.price,
        };
      }

    case 'REMOVE_ITEM':
      const productIdToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.product.id === productIdToRemove);

      if (itemToRemove) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== productIdToRemove),
          total: state.total - itemToRemove.product.price,
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
  const totalItems = state.items.length;

  // Calculate totalPrice
  const totalPrice = state.total;

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: { product } });
    
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

  const updateToppings = (productId: string, toppings: CartItemToppings) => {
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
