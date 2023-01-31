import { useState, createContext } from "react";
import axios from "axios";
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

  const onResetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const registerUser = async (dataForm) => {
    try {
      const res = await axios.post(
        "https://easyshoes.onrender.com/user/register",
        dataForm
      );
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }

    try {
      const res =
        token && (await axios.get("https://easyshoes.onrender.com/user/get"));
      setUser(res.data);
      setAuthStatus(true);
    } catch (error) {
      console.log("Error Verificando token", error);
    }
  };

  const loginUser = async (dataForm) => {
    console.log("1");
    try {
      console.log("2");
      const res = await axios.post(
        "https://easyshoes.onrender.com/login",
        dataForm
      );
      console.log("3");
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
      console.log("4");
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
    setFormData,
    onResetForm,
    user,
    authStatus,
  };
  console.log("userContext", data);
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
