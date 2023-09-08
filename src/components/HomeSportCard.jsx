import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  Badge,
  Container,
  Col,
  Row,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";

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
    <Container
      fluid
      style={{
        backgroundImage: `url(${bgsportcard})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <div className="text-start">
            <h3>
              <Badge pill bg="danger">
                <strong>
                  <i>Be Sport</i>
                </strong>
              </Badge>
            </h3>

            <h1 className="mt-3 mb-4">
              <strong>
                <i>Sport Shoes</i>
              </strong>
            </h1>

            <p style={{ lineHeight: "1.6em" }}>
              <i>
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit.
              </i>
            </p>

            <div className="mt-5 text-center">
              <Button variant="outline-light" size="lg">
                <Link className="text-light" to="/menu">
                  <strong>
                    <i>Shop Now</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={12} lg={6} className="mt-4 mb-4 p-4">
          <Carousel>
            {shoesData.map((pairShoes) => {
              return (
                <Carousel.Item key={pairShoes.id}>
                  <Image
                    className="d-block w-100"
                    style={{
                      objectFit: "cover",
                      maxHeight: "350px",
                    }}
                    src={pairShoes.img}
                    alt={pairShoes.model}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
