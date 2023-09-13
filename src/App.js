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
import { SportShoesPage } from "./components/SportShoesPage";
import { CasualShoesPage } from "./components/CasualShoesPage";
import { FashionShoesPage } from "./components/FashionShoesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/*  Shoes Pages */}
        <Route path="/shoes" element={<ShoesCard />} />
        <Route path="/sportshoes" element={<SportShoesPage />} />
        <Route path="/casualshoes" element={<CasualShoesPage />} />
        <Route path="/fashionshoes" element={<FashionShoesPage />} />

        {/*  Users Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/*  Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/myaccount" element={<MyAccount />} />
        </Route>

        {/*  Other Pages */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<MyCart />} />
      </Route>
    </Routes>
  );
}

export default App;
