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
          className="d-flex flex-column justify-content-center align-items-center mt-5 mb-2 p-5"
        >
          <div className="text-start">
            <h2>
              <Badge pill bg="danger">
                <strong>
                  <i>Our Shoes</i>
                </strong>
              </Badge>
            </h2>

            <h1 className="mt-4 mb-4">
              <strong>
                <i>We Have the Best </i>
              </strong>
            </h1>

            <h6 style={{ lineHeight: "1.5em" }}>
              <i>
                Check out our amaizing range of shoes
                <br />
                we have it all, casual, sport fashion,
                <br />
                Easy<b className="text-danger">Shoes </b>
                has only the best for you.
                <br />
              </i>
            </h6>

            <div className="mt-5 text-center animate__animated animate__flash ">
              <Button variant="outline-light" size="lg">
                <Link to="/shoes">
                  <strong>
                    <i>Shop Now</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={12} lg={6} className="mt-3 mb-5 p-4">
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
