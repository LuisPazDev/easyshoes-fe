import { useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Badge,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button,
  Card,
  Spinner,
  Col,
  Row,
} from "react-bootstrap";

import stars from "../assets/stars.png";

export const ShoesCard = () => {
  // get data from api using useFetch hook
  const { data, isLoading } = useFetch(
    `https://easyshoes.onrender.com/shoes/get`
  );

  // add to cart button function using cart from context
  const { addToCart } = useContext(CartContext);

  return (
    <Container fluid className="p-4">
      <div>
        <h1 className="text-center mt-4">
          <Badge pill bg="danger">
            <strong>
              <i>Shoes</i>
            </strong>
          </Badge>
        </h1>
      </div>
      <div className="text-center mt-3">
        <h6>
          <i>Find the perfect pair for you.</i>
        </h6>
      </div>

      <div>
        <h5 className="text-center mt-5">Filter by</h5>
      </div>

      {/*  filter buttons */}
      <Row
        xs={3}
        className="text-center mt-4 mb-4 ms-auto me-auto"
        style={{
          maxWidth: "300px",
        }}
      >
        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Brand"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item eventKey="2">Nike</Dropdown.Item>
            <Dropdown.Item eventKey="3">Adidas</Dropdown.Item>
            <Dropdown.Item eventKey="2">Timberland</Dropdown.Item>
            <Dropdown.Item eventKey="3">Levis</Dropdown.Item>
            <Dropdown.Item eventKey="3">Converse</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Model"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item eventKey="2">Casual</Dropdown.Item>
            <Dropdown.Item eventKey="3">Fashion</Dropdown.Item>
            <Dropdown.Item eventKey="4">Sport</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Size"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item eventKey="2">8</Dropdown.Item>
            <Dropdown.Item eventKey="3">9</Dropdown.Item>
            <Dropdown.Item eventKey="4">10</Dropdown.Item>
            <Dropdown.Item eventKey="3">11</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row>
        {isLoading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          Array.isArray(data) &&
          data.map((shoes) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex flex-row justify-content-center align-items-center mt-3 p-4"
            >
              <Card
                key={shoes._id}
                style={{ width: "16rem" }}
                className="border border-dark rounded animate__animated animate__backInLeft animate__delay-1s"
              >
                <Card.Img
                  variant="top"
                  src={shoes.img}
                  className="img-fluid"
                  style={{
                    height: "250px",
                    backgroundColor: "black",
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "#212529",
                  }}
                >
                  <div>
                    <img
                      style={{
                        width: "70px",
                      }}
                      src={stars}
                      alt="stars"
                    />
                  </div>

                  <Card.Title className="text-start">
                    <h4>
                      <strong>
                        <i>{shoes.brand}</i>
                      </strong>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    <h6>
                      <i>{shoes.model}</i>
                    </h6>
                  </Card.Text>
                  <Card.Text>
                    <h6>
                      <i>
                        <strong>Size : </strong>
                        {shoes.size}
                      </i>
                    </h6>
                  </Card.Text>
                  <Card.Text>
                    <h5 className="mt-4">
                      <strong>
                        <i className="text-danger">$ {shoes.price}</i>
                      </strong>
                    </h5>
                  </Card.Text>
                  <div className="text-center mt-4">
                    <Button
                      onClick={() => addToCart(shoes)}
                      variant="outline-light"
                    >
                      <strong>
                        <i>Add to cart</i>
                      </strong>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
