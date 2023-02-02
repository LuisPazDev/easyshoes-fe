import { useState, useEffect } from "react";
import { PaypalModal } from "./PaypalModal";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

const amount = 10;

export const MyCart = () => {
  const [cart, setCart] = useState(null);

  const getCartData = () => {
    const cartData = JSON.parse(localStorage.getItem("shoes"));
    if (cartData === []) {
      setCart([]);
    } else {
      setCart(cartData);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const removeItem = () => {
    localStorage.removeItem("shoes");
    setCart(null);
  };

  console.log(cart);

  return (
    <Container>
      <Card
        border='light'
        className='ms-auto me-auto text-center'
        style={{ width: "22rem" }}
      >
        {cart === null ? (
          <Card.Body>
            <Card.Title>
              <h4> Your cart is empty</h4>
            </Card.Title>
          </Card.Body>
        ) : (
          cart.map((item) => (
            <Card.Body key={item.id}>
              <Card.Img variant='top' src={item.img} />
              <Card.Title>
                <h4>{item.brand}</h4>
              </Card.Title>
              <Card.Text>
                <h5>{item.model}</h5>
              </Card.Text>
              <Card.Text>
                <h5>{item.size}</h5>
              </Card.Text>
              <Card.Text>
                <h5>{item.price}</h5>
              </Card.Text>
              <Button variant='danger' onClick={removeItem}>
                Remove
              </Button>
            </Card.Body>
          ))
        )}
        <PaypalModal amount={amount} />
      </Card>
    </Container>
  );
};
