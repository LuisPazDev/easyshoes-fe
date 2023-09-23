import { useEffect, useState } from "react";
import { ShoesContext } from "./ShoesContext";
import { useFetch } from "../hooks/useFetch";

export const ShoesProvider = ({ children }) => {
  // get data from api using useFetch hook
  const { data, isLoading } = useFetch(
    `https://easyshoes.onrender.com/shoes/get`
  );

  const [shoes, setShoes] = useState([]);
  // original shoes data to be used for filtering shoes by brand, model or size
  const [originalShoes, setOriginalShoes] = useState([]);

  useEffect(() => {
    setShoes(data);
    setOriginalShoes(data);
  }, [data]);

  // filtering shoes by brand, model or size
  const filterBySelection = (brand, model, size) => {
    // if brand, model and size are not selected, set shoes to original shoes data
    if (!brand && !model && !size) {
      setShoes(originalShoes);
    } else {
      // if brand, model and size are selected, filter shoes by brand, model and size
      const filteredShoes = originalShoes.filter(
        (item) =>
          item.brand === brand || item.model === model || item.size === size
      );
      setShoes(filteredShoes);
    }
  };

  return (
    <ShoesContext.Provider
      value={{
        shoes,
        setShoes,
        isLoading,
        filterBySelection,
      }}
    >
      {children}
    </ShoesContext.Provider>
  );
};
