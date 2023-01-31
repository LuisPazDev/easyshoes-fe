import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const FormInput = ({ tipo }) => {
  const userCtx = useContext(UserContext);

  const { handleChange } = userCtx;

  const options = {
    username: { title: "Username", type: "text" },
    email: { title: "Email", type: "email" },
    password: { title: "Password", type: "password" },
  };

  return (
    <>
      <label htmlFor={tipo}>{options[tipo].title}</label>
      <div>
        <input
          id={tipo}
          name={tipo}
          type={options[tipo].type}
          className='form-control mt-2 mb-2'
          required
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
    </>
  );
};
