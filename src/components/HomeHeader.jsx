import {
  Col,
  Row,
  Container,
  Button,
  Image,
  Badge,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import bgcontainer from "../assets/bgcontainer.png";
import firstslide from "../assets/secondslide.png";
import secondslide from "../assets/thirdslide.png";
import thirdslide from "../assets/firstslide.png";

export const HomeHeader = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bgcontainer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row xs={1} md={1} lg={2}>
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <div className="mb-3">
            <Badge pill bg="danger">
              <strong>
                <i>Online Store</i>
              </strong>
            </Badge>
          </div>
          <div className="text-center">
            <h1 className="mb-3">
              <strong>
                <i>
                  <b className="text-white">EASY</b>
                  <b className="text-danger">SHOES</b>
                </i>
              </strong>
            </h1>

            <h5 style={{ lineHeight: "1.6em" }}>
              <strong>
                <i>
                  <b className="text-white">Men Shoes</b>
                </i>
              </strong>
            </h5>

            <h6
              style={{
                lineHeight: "1.6em",
                textAlign: "justify",
              }}
              className="mt-5 ps-5 pe-5"
            >
              <i>
                We are you <b className="text-danger">best option</b> to buy
                shoes online. We have the{" "}
                <b className="text-danger">best prices</b> and the{" "}
                <b className="text-danger">best quality</b> . Check our wide
                variety of <b className="text-danger">shoes</b> for all{" "}
                <b className="text-danger">tastes and styles</b> and have a
                happy shopping.
              </i>
            </h6>

            <Button className="mt-5" variant="outline-light" size="lg">
              <Link className="text-light" to="/menu">
                <strong>
                  <i>Shop Now</i>
                </strong>
              </Link>
            </Button>
          </div>
        </Col>
        {/* Carousel Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex justify-content-center align-items-center mt-4 mb-4"
        >
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                style={{ maxHeight: "600px" }}
                src={firstslide}
                alt="First slide"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={secondslide}
                style={{ maxHeight: "600px" }}
                alt="First slide"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={thirdslide}
                style={{ maxHeight: "600px" }}
                alt="First slide"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
