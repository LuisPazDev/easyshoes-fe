import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
      setUser(res.data.data);
      setAuthStatus(true);
    } catch (error) {
      console.log("token error", error);
    }
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
      setUser(res.data.data.user);
      setAuthStatus(true);
      onResetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await axios.post(
        "https://easyshoes.onrender.com/login",
        dataForm
      );
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
      setUser(res.data.data.user);
      onResetForm();
    } catch (error) {
      alert("Incorrect email or password!! Please try again or register");
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
    user,
    authStatus,
  };

  useEffect(() => {
    console.log(data.user);
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
