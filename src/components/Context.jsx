import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.length;

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };


  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.nama !== itemName)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
