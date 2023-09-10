import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { ShoesPage } from "./components/ShoesPage";
import { MyAccount } from "./components/MyAccount";
import { MyCart } from "./components/MyCart";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { ContactPage } from "./components/ContactPage";
import { ShoesCard } from "./components/ShoesCard";
import { SportShoesCard } from "./components/SportShoesCard";
import { CasualShoesCard } from "./components/CasualShoesCard";
import { FashionShoesCard } from "./components/FashionShoesCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/allshoes" element={<ShoesCard />} />

        <Route path="/sportshoes" element={<SportShoesCard />} />
        <Route path="/casualshoes" element={<CasualShoesCard />} />
        <Route path="/fashionshoes" element={<FashionShoesCard />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mycart" element={<MyCart />} />

        {/*  Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/myaccount" element={<MyAccount />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
