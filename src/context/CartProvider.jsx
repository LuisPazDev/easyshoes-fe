import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link, useLocation } from "react-router-dom";

export const CartProvider = ({ children }) => {
  // get data from local storage and show it in cart
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  // set data to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);
  }, [cart]);

  // removing item from cart
  const removeCartItem = (shoes) => {
    const newCart = cart.filter((item) => item._id !== shoes._id);

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeCartItem }}>
      <>{children}</>
    </CartContext.Provider>
  );
};
