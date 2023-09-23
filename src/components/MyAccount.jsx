import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { Container, Button, Badge, Card } from "react-bootstrap";

export const MyAccount = () => {
  const { logout, user } = useContext(UserContext);

  console.log(user);

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
      <Card
        style={{
          backgroundColor: "#212529",
          maxWidth: "500px",
        }}
        className="mt-3 border border-dark rounded p-4"
      >
        <Card.Body>
          <Card.Title className="mb-4">
            <h6>
              <strong>
                <i>
                  <u>Account Details</u>
                </i>
              </strong>
            </h6>
          </Card.Title>
          <Card.Text>
            <strong>
              <i className="text-danger ">Username:</i>
            </strong>{" "}
            <br />
            <i>
              {" "}
              <i>{user && user[0].username}</i>
            </i>
          </Card.Text>
          <Card.Text>
            <strong>
              <i className="text-danger">Email:</i>
            </strong>{" "}
            <br />
            <i>{user && user[0].email}</i>
          </Card.Text>
          <Button onClick={logout} variant="danger" className="mt-4">
            <strong>
              <i>Logout</i>
            </strong>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
