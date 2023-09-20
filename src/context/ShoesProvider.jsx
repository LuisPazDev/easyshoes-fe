import { useEffect, useState } from "react";
import { ShoesContext } from "./ShoesContext";
import { useFetch } from "../hooks/useFetch";

export const ShoesProvider = ({ children }) => {
  // get data from api using useFetch hook
  const { data, isLoading } = useFetch(
    `https://easyshoes.onrender.com/shoes/get`
  );

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(data);
  }, [data]);

  return (
    <ShoesContext.Provider value={{ shoes, isLoading }}>
      {children}
    </ShoesContext.Provider>
  );
};
