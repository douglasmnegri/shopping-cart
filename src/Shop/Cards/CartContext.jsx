import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState({});

  const addToCart = (id, price) => {
    setShoppingCartItems((prevItems) => ({
      ...prevItems,
      [id]: { price },
    }));
    console.log(setShoppingCartItems);
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartItems, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
