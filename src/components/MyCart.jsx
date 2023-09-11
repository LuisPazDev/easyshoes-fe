import { Container, Badge } from "react-bootstrap";

export const MyCart = () => {
  return (
    <Container fluid>
      <div className="text-center p-5">
        <h1>
          <Badge pill className="bg-danger">
            <strong>
              <i>Cart</i>
            </strong>
          </Badge>
        </h1>
        <h6 className="mt-3">
          <i>Check your cart</i>
        </h6>
      </div>
    </Container>
  );
};
