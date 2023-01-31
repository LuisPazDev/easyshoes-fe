import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const MyAccount = () => {
  const userCtx = useContext(UserContext);

  const { logout } = userCtx;

  return (
    <Card className='ms-auto me-auto mt-5' style={{ width: "24rem" }}>
      <Card.Body>
        <Card.Title> My Account </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={logout} variant='primary'>
          Log Out
        </Button>
      </Card.Body>
    </Card>
  );
};
