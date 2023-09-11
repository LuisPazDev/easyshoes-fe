import React from "react";
import ReactDOM from "react-dom/client";
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
    <UserProvider>
      <HashRouter>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZiM3yYB-op1nFunNquSqM1RV7HQ_5V8aX883r3yFOj0sCELY3ZY9VNiXMwX6IXF7KRA08Kx9nE-ML6m ",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </HashRouter>
    </UserProvider>
  </React.StrictMode>
);
