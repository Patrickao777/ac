
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product, CartItemToppings } from "../types";
import { toast } from "@/components/ui/use-toast";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateToppings: (productId: string, toppings: CartItemToppings) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  const addItem = (product: Product, quantity: number) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast({
          description: `${product.name} atualizado no carrinho`,
        });
        return updatedItems;
      } else {
        toast({
          description: `${product.name} adicionado ao carrinho`,
        });
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.product.id !== productId);
      toast({
        description: "Item removido do carrinho",
      });
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setItems(prevItems => {
      return prevItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const updateToppings = (productId: string, toppings: CartItemToppings) => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.product.id === productId ? { ...item, toppings } : item
      );
    });
    toast({
      description: "Complementos atualizados com sucesso",
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      description: "Carrinho esvaziado",
    });
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    updateToppings,
    clearCart,
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  
  return context;
};
