import { Link } from "react-router-dom";
import { Container, Badge, Row, Col, Button, Card } from "react-bootstrap";

export const MyCart = () => {
  // getting cart data from local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log("my cart", cart);

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

      <Row>
        {cart.map((item) => (
          <Col xs={12} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="bg-dark text-white">
              <Row>
                <Col>
                  <Card.Img
                    style={{ height: "170px" }}
                    className="bg-black"
                    variant="top"
                    src={item.img}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <small>
                      <Card.Title>{item.brand}</Card.Title>
                      <Card.Text>{item.model}</Card.Text>
                      <Card.Text>{item.price}</Card.Text>
                      <Button size="sm" variant="danger">
                        Remove{" "}
                      </Button>
                    </small>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
