import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Button,
  Image,
  Badge,
  Carousel,
} from "react-bootstrap";

import bgcontainer from "../assets/bgcontainer.png";
import firstslide from "../assets/secondslide.png";
import secondslide from "../assets/thirdslide.png";
import thirdslide from "../assets/firstslide.png";
import logo from "../assets/easyshoeslogo.png";

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
          <div className="text-center">
            <Image fluid src={logo} alt="logo" />
            <h5 className="mt-3 text-center">
              <strong>
                <i>Men Shoes </i>
              </strong>
            </h5>
            <Button className="mt-5" variant="outline-light" size="lg">
              <Link className="text-light" to="/shoes">
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
