import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FormInput } from "./FormInput";

export const RegisterPage = () => {
  const userCtx = useContext(UserContext);

  const { registerUser, formData, onResetForm } = userCtx;

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    onResetForm();

    console.log("Register Form", formData);
  };

  return (
    <Container>
      <Card className='m-auto mt-5 ms-auto me-auto' style={{ width: "22rem" }}>
        <div className='m-auto mt-3'>
          <h2> Create Account </h2>
        </div>
        <form className='ms-3 me-3 mt-3'>
          <FormInput tipo='username' />

          <FormInput tipo='email' />

          <FormInput tipo='password' />

          <button
            onClick={(e) => handleSubmit(e)}
            className='btn btn-primary mt-4 mb-3'
          >
            Register
          </button>
        </form>
      </Card>
    </Container>
  );
};
