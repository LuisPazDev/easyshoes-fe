import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
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
      await axios.post(
        "https://easyshoes.onrender.com/user/register",
        dataForm
      );
      onResetForm();
      // Navigate to login page
      navigate("/login");
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
      setUsers(res.data.data);
      setAuthStatus(true);
    } catch (error) {
      console.log("token error", error);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await axios.post(
        "https://easyshoes.onrender.com/login",
        dataForm
      );
      localStorage.setItem("token", res.data.token);
      verifyingToken();
      onResetForm();
    } catch (error) {
      alert("Incorrect email or password!! Please try again or register");
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUsers(null);
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
    users,
    authStatus,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
