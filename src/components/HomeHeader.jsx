import { Col, Row, Container, Button, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import firstslide from "../assets/firstslide.png";
import bgcontainer from "../assets/bgcontainer.png";

import thirdslide from "../assets/thirdslide.png";

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
          <div className="text-start">
            <h2 className="mb-3">
              <Badge bg="danger">
                <strong>
                  <i>
                    <b>Welcome</b>
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
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex justify-content-center align-items-center mt-4 mb-4"
        >
          <Image fluid src={firstslide} alt="firstslide" />
        </Col>
      </Row>
    </Container>
  );
};
