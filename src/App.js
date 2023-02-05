import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { Menu } from "./components/Menu";
import { MyAccount } from "./components/MyAccount";
import { MyCart } from "./components/MyCart";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { Axios } from "./components/Axios";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route element={<PrivateRoute />}>
          <Route path='/myaccount' element={<MyAccount />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/mycart' element={<MyCart />} />
        <Route path='/axios' element={<Axios />} />
      </Route>
    </Routes>
  );
}

export default App;
