import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { MyAccount } from "./components/MyAccount";
import { MyCart } from "./components/MyCart";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { ContactPage } from "./components/ContactPage";
import { ShoesCard } from "./components/ShoesCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shoes" element={<ShoesCard />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<MyCart />} />

        {/*  Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/myaccount" element={<MyAccount />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
