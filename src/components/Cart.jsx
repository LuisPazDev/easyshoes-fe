import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  return (
    <Container>
      <Card className='m-auto mt-5' border='dark' style={{ width: "20rem" }}>
        <div className='m-auto mt-3'>
          <h2> My cart </h2>
        </div>

        <Button variant='primary' type='submit'>
          Log In
        </Button>
      </Card>
    </Container>
  );
};
