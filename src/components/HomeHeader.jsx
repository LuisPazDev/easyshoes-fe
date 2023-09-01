import {
  Col,
  Row,
  Container,
  Button,
  Carousel,
  Image,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import firstslide from "../assets/firstslide.png";
import secondslide from "../assets/secondslide.png";
import thirdslide from "../assets/thirdslide.png";

import fasticon from "../assets/fast.svg";
import besticon from "../assets/price.svg";
import easyshoeslogo from "../assets/easyshoeslogo.png";

export const HomeHeader = () => {
  return (
    <Container fluid>
      <Row xs={1} md={1} lg={2}>
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5 p-2"
        >
          <div className="text-start">
            <h2 className="mb-4">
              <Badge bg="danger">
                <strong>
                  <i>
                    <b>Welcome</b>
                  </i>
                </strong>
              </Badge>
            </h2>

            <h4 style={{ lineHeight: "1.5em" }}>
              <strong>
                <i>
                  We are the Best <b className="text-danger">Shoes Store</b>
                  <br />
                  to buy <b className="text-danger">online </b>
                  with the best prices
                  <br />
                  check our <b className="text-danger">Full Stock</b> and find
                  <br />
                  the <b className="text-danger">best</b> shoes for you
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
        <Col xs={12} md={12} lg={6}>
          <Image
            fluid
            className="d-flex justify-content-center align-items-center mt-5 mb-5 "
            src={firstslide}
            alt="firstslide"
          />
        </Col>
      </Row>
    </Container>
  );
};
