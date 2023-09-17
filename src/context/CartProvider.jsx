import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

import cartimg from "../assets/cart.svg";

export const CartProvider = ({ children }) => {
  // get data from local storage and show it in cart
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  // set data to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // show button if cart is not empty
  const [showButton, setShowButton] = useState(false);

  // adding item to cart
  const addToCart = (shoes) => {
    const newCart = [...cart, shoes];

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);

    Swal.fire({
      width: 300,
      color: "#fff",
      background: "#1f1f1f",
      title: shoes.brand,
      text: "Added to cart!",
      imageUrl: shoes.img,
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Custom image",
    });
  };

  // removing item from cart
  const removeCartItem = (shoes) => {
    const newCart = cart.filter((item) => item._id !== shoes._id);

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeCartItem, addToCart }}>
      <>
        {children}
        {cart.length > 0 && (
          <Link to="/cart">
            <Button
              size="sm"
              variant="outline-danger"
              className="position-fixed bottom-0 end-0 m-3"
              style={{ zIndex: 5 }}
            >
              <strong>
                <i className="bi bi-cart3">
                  Go Cart{"   "}
                  <span className="badge bg-black">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={cartimg}
                      alt="cart.svg"
                    />
                    {cart.length}
                  </span>
                </i>
              </strong>
            </Button>
          </Link>
        )}
      </>
    </CartContext.Provider>
  );
};
