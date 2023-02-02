import { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const LoginPage = () => {
  const userCtx = useContext(UserContext);

  const { loginUser, authStatus, verifyingToken, formData, setFormData } =
    userCtx;

  const navigate = useNavigate();

  useEffect(() => {
    verifyingToken();

    if (authStatus) {
      navigate("/myaccount");
    }
  }, [authStatus]);

  if (authStatus) return null;

  const sendData = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <Container>
      <Card className='m-auto mt-5' style={{ width: "22rem" }}>
        <div className='m-auto mt-3'>
          <h2> Log In </h2>
        </div>

        <form className='ms-auto me-auto' onSubmit={(e) => sendData(e)}>
          <FormInput tipo='email' />
          <FormInput tipo='password' />
          <button type='submit' className='btn btn-primary mt-3 mb-4'>
            Log In
          </button>
        </form>
      </Card>
      <div className='text-center mt-3'>
        <h6>
          Don't have an account? <br /> Register Now!
        </h6>
        <Button className='mt-2 mb-3'>
          <Link className='link-button' to='/register'>
            Register
          </Link>
        </Button>
      </div>
    </Container>
  );
};
