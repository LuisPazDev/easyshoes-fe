import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

export const CasualShoesPage = () => {
  const { data, isLoading } = useFetch(
    `https://easyshoes.onrender.com/shoes/get`
  );

  const [shoesData, setShoesData] = useState([]);

  const getShoesData = async () => {
    const res = await data;

    setShoesData(res.data);
  };

  useEffect(() => {
    getShoesData();
  }, [data]);

  const filteredShoesData = shoesData.filter(
    (shoes) => shoes.model === "Casual"
  );

  return (
    <Container fluid className="p-4">
      <div>
        <h1 className="text-center mt-4">
          <Badge pill bg="danger">
            <strong>
              <i>Casual Shoes</i>
            </strong>
          </Badge>
        </h1>
      </div>
      <div className="text-center mt-3">
        <h6>
          <i>Check out our latest shoes and find the perfect pair for you.</i>
        </h6>
      </div>

      <div className="text-center mt-5">
        <h5>
          Filter by
          <ButtonGroup className="ms-3">
            <DropdownButton
              as={ButtonGroup}
              variant="outline-danger"
              title="Model"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="2">
                <Link className="text-black" to="/sportshoes">
                  <h6>
                    <strong>
                      <i>Sport</i>
                    </strong>
                  </h6>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                <Link className="text-black" to="/fashionshoes">
                  <h6>
                    <strong>
                      <i>Fashion</i>
                    </strong>
                  </h6>
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </h5>
      </div>

      <Row>
        {isLoading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          filteredShoesData.map((shoes) => (
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
                        <i>{shoes.price}</i>
                      </strong>
                    </h5>
                  </Card.Text>
                  <div className="text-center mt-4">
                    <Button variant="outline-light">
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
        <div className={isLoading ? "d-none" : "text-center"}>
          <Button variant="outline-light" className="mt-5 mb-4" size="lg">
            <Link to="/shoes">
              <h6>
                <strong>
                  <i>See All Models</i>
                </strong>
              </h6>
            </Link>
          </Button>
        </div>
      </Row>
    </Container>
  );
};
