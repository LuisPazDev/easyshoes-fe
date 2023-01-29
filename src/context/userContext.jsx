import { useState, createContext } from "react";
import clientAxios from "../config/axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null, email: null });
  const [authStatus, setAuthStatus] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (dataForm) => {
    try {
      const res = await clientAxios.post("/usuario/crear", dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      clientAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete clientAxios.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = token && (await clientAxios.get("/usuario/verificar"));
      setUser(res.data);
      setAuthStatus(true);
    } catch (error) {
      console.log("Error Verificando token", error);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await clientAxios.post("/usuario/login", dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthStatus(false);
  };

  const data = {
    registerUser,
    loginUser,
    handleChange,
    verifyingToken,
    logout,
    formData,
    user,
    authStatus,
  };
  console.log("CONTEXTO USUARIO", data);
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
