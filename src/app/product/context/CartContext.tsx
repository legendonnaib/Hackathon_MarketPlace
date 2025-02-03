"use client"; // Ensure this is a client-side component
import React, { createContext, useContext, useState } from 'react';
import { Product } from "../../../../types/product";


interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item._id === product._id);
      if (existingProduct) {
        
        return prevCart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product._id === productId) {
          if (product.quantity > 1) {
            
            return { ...product, quantity: product.quantity - 1 };
          } else {
             
            return null;  
          }
        }
        return product;
      });

  
      return updatedCart.filter((product): product is Product => product !== null);
    });
  };


  const increaseQuantity = (productId: string) => {
    setCart((prevCart) => prevCart.map((product) =>
      product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  
  const decreaseQuantity = (productId: string) => {
    setCart((prevCart) => prevCart.map((product) =>
      product._id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

 
  const clearCart = () => {
    setCart([]);
  };

 
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalPrice }}>
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
