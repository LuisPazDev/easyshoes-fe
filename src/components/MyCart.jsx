import { Link } from "react-router-dom";
import { Container, Badge, Row, Col, Button, Card } from "react-bootstrap";

export const MyCart = () => {
  // getting cart data from local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // removing item from cart
  const removeCartItem = (shoes) => {
    const newCart = cart.filter((item) => item._id !== shoes._id);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Calculating the total price of the cart items
  const subTotalPrice = cart
    .reduce((acc, curr) => acc + parseFloat(curr.price), 0)
    .toFixed(2);

  // calculating the tax of the cart items 4%
  const tax = (subTotalPrice * 0.04).toFixed(2);

  // calculating the total price of the cart items with tax
  const totalPrice = (parseFloat(subTotalPrice) + parseFloat(tax)).toFixed(2);

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
      </div>

      <Row>
        {cart.map((shoes) => (
          <Col
            xs={12}
            className="d-flex flex-row justify-content-center align-items-center mt-1 p-2"
          >
            <Card
              key={shoes._id}
              style={{ width: "20rem" }}
              className="bg-dark text-white"
            >
              <Row>
                <Col>
                  <Card.Img
                    style={{ maxHeight: "130px" }}
                    className="bg-black"
                    variant="top"
                    src={shoes.img}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <small>
                      <Card.Title>{shoes.brand}</Card.Title>
                      <Card.Text> $ {shoes.price}</Card.Text>
                      <Button
                        onClick={() => removeCartItem(shoes)}
                        size="sm"
                        variant="danger"
                      >
                        Remove{" "}
                      </Button>
                    </small>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
        {
          // if cart is not empty
          cart.length > 0 ? (
            <>
              <div className="text-center mt-3">
                <p>
                  <b className="text-danger">Sub-Total:</b>
                  <strong>
                    <i> $ {subTotalPrice}</i>
                  </strong>
                </p>
                <p>
                  <b className="text-danger">Tax </b>
                  (4%):
                  <strong>
                    <i> $ {tax} </i>
                  </strong>
                </p>
                <p>
                  <b className="text-danger">Total: </b>
                  <strong>
                    <i> $ {totalPrice}</i>
                  </strong>
                </p>
              </div>
              <div className="text-center mt-3 mb-3">
                <Button variant="outline-light">
                  <strong>
                    <i>Checkout</i>
                  </strong>
                </Button>
              </div>
            </>
          ) : (
            // if cart is empty
            <div className="text-center mt-4 mb-3">
              <h5>
                <i>Your cart is empty</i>
              </h5>
              <Link to="/shoes">
                <Button className="mt-4" variant="outline-light">
                  <strong>
                    <i>Start Shopping Here</i>
                  </strong>
                </Button>
              </Link>
            </div>
          )
        }
      </Row>
    </Container>
  );
};
