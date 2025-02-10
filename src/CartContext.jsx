// Context to use the shoppingCartItems to different components
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState({});

  return (
    <CartContext.Provider value={{ shoppingCartItems, setShoppingCartItems }}>
      {children}
    </CartContext.Provider>
  );
};