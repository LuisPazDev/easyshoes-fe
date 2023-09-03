import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  Badge,
  Container,
  Col,
  Row,
  Button,
  Carousel,
  Card,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import secondslide from "../assets/secondslide.png";
import bgsportcard from "../assets/bgsportcard.png";

export const HomeSportCard = () => {
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
    console.log(shoesData);
  }, [data]);

  return (
    <Container fluid>
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <div className="text-start">
            <h2 className="mb-3">
              <Badge bg="danger">
                <strong>
                  <i>
                    <b>Sport Shoes</b>
                  </i>
                </strong>
              </Badge>
            </h2>

            <h4 style={{ lineHeight: "1.6em" }}>
              <strong>
                <i>
                  We are Online men <b className="text-danger">Shoes Store</b>
                  <br />
                  Where you can find the best{" "}
                  <b className="text-danger"> brands </b>
                  <br />
                  <b className="text-danger"> prices</b> with the best Service
                  and <br />
                  <b className="text-danger">the Fastst Delivery </b>
                  on the <b className="text-danger">market</b>
                </i>
              </strong>
            </h4>

            <Button className="mt-5" variant="outline-light" size="lg">
              <Link className="text-light" to="/menu">
                <strong>
                  <i>Shop Now</i>
                </strong>
              </Link>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={12} lg={6} className="mt-4 mb-4">
          <Carousel>
            {shoesData.map((pairShoes) => {
              return (
                <Carousel.Item key={pairShoes.id}>
                  <Card
                    className="mb-4 ms-auto me-auto text-center bg-transparent"
                    style={{ width: "15rem" }}
                  >
                    <Card.Img variant="top" src={pairShoes.img} />
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
