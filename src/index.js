import React from "react";
import ReactDOM from "react-dom/client";
import { ShoesProvider } from "./context/ShoesProvider";
import { CartProvider } from "./context/CartProvider";
import { UserProvider } from "./context/userContext";
import { HashRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import App from "./App";

import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ShoesProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </ShoesProvider>
    </HashRouter>
  </React.StrictMode>
);
