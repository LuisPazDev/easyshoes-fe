import { useState, useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await axios.get("https://easyshoes.onrender.com/shoes/get");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Axios</h1>
      {console.log("DATA", data)}
      {data === null ? (
        <h3> Loading</h3>
      ) : (
        data.data.map((shoes) => {
          return (
            <div key={shoes.id}>
              <h3>{shoes.brand}</h3>
              <h3>{shoes.model}</h3>
              <h3>{shoes.size}</h3>
              <h3>{shoes.price}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};
