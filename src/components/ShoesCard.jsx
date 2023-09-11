import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import stars from "../assets/stars.png";

export const ShoesCard = () => {
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

  console.log("shoesData", shoesData);

  return (
    <Container fluid className="p-4">
      <div>
        <h1 className="text-center mt-4">
          <Badge pill bg="danger">
            <strong>
              <i>Shoes Stock</i>
            </strong>
          </Badge>
        </h1>
      </div>
      <div className="text-center mt-3">
        <h6>
          <i>Check out our latest shoes and find the perfect pair for you.</i>
        </h6>
      </div>

      <Row>
        {isLoading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          shoesData.map((shoes) => (
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
      </Row>
    </Container>
  );
};
