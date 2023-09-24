import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

import { Container, Button, Badge, Card } from "react-bootstrap";

export const MyAccount = () => {
  const { logout, user } = useContext(UserContext);

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="text-center p-5">
        <h1>
          <Badge pill className="bg-danger">
            <strong>
              <i> My Account </i>
            </strong>
          </Badge>
        </h1>
        <h6 className="mt-3">
          <i>
            <strong> Welcome to your account </strong>
          </i>
        </h6>
      </div>

      <h4>
        Welcome
        <br />
        <br />
        <strong>Name:</strong> {user.name}
        <strong>Username:</strong> {user.username}
      </h4>

      <Button
        className="mt-5"
        variant="danger"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </Container>
  );
};
