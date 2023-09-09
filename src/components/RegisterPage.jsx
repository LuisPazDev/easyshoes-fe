import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { Container, Form, Button, Row, Col, Badge } from "react-bootstrap";

export const RegisterPage = () => {
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
    <Container
      fluid
      style={{
        backgroundColor: "#F5F5F5",
        height: "100vh",
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <h1>
          <Badge pill className="bg-dark">
            <strong>
              <i>Register</i>
            </strong>
          </Badge>
        </h1>
      </div>

      <Form
        style={{
          backgroundColor: "white",
          maxWidth: "500px",
        }}
        className="mt-3 border border-dark rounded p-4 text-black"
        id="form"
      >
        <Row>
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h6>
                  <strong>
                    <i>Email</i>
                  </strong>
                </h6>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formBasicLastPassword">
              <Form.Label>
                <h6>
                  <strong>
                    <i>Password</i>
                  </strong>
                </h6>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button size="lg" className="mt-4 mb-3" variant="dark" type="submit">
            <strong>
              <i>Register</i>
            </strong>
          </Button>
        </div>
      </Form>

      <div className="text-center text-black mt-4">
        <h6>
          Already have an account?
          <br />
          <br />
          <Button variant="outline-dark text-dark">
            <Link className="text-black" to="/login">
              <strong>
                <i>Login Here</i>
              </strong>
            </Link>
          </Button>
        </h6>
      </div>
    </Container>
  );
};
