import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {
  Badge,
  Container,
  Col,
  Row,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";

import bgcasualcard from "../assets/bgcasualcard.png";

export const HomeCasualCard = () => {
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
        backgroundImage: `url(${bgcasualcard})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            <Badge pill bg="danger">
              <strong>
                <i>Be Casual</i>
              </strong>
            </Badge>

            <h4 className="mt-3 mb-3">
              <strong>
                <i>Casual Shoes</i>
              </strong>
            </h4>

            <h6 style={{ lineHeight: "1.6em" }}>
              <strong>
                <i>
                  Lorem ipsum dolor sit amet
                  <br />
                  consectetur adipisicing elit.
                </i>
              </strong>
            </h6>

            <Button className="mt-4" variant="outline-light" size="lg">
              <Link className="text-light" to="/menu">
                <strong>
                  <i>Shop Now</i>
                </strong>
              </Link>
            </Button>
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
