import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Image } from "react-bootstrap";

import registercard from "../assets/registerimg.png";

export const HomeSupportCard = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-5"
        >
          <div className="text-start">
            <h3>
              <Badge bg="danger">
                <strong>
                  <i>Be a Member </i>
                </strong>
              </Badge>
            </h3>

            <h1 className="mt-3 mb-4">
              <strong>
                <i>Register Now! </i>
              </strong>
            </h1>

            <h6 className="text-start">
              <strong>
                <i>
                  Create an account now and get 20% off
                  <br />
                  on your first purchase.
                </i>
              </strong>
              <br />
              <br />
            </h6>

            <div className="mt-3 text-center">
              <Button className="mt-5" variant="outline-light" size="lg">
                <Link className="text-light" to="/register">
                  <strong>
                    <i>Register Here</i>
                  </strong>
                </Link>
              </Button>
              <h6 className="mt-4">
                <strong>
                  <i>Join Us Today and be a VIP Member</i>
                </strong>
              </h6>
            </div>
          </div>
        </Col>

        {/*  Image Col */}
        <Col xs={12} md={12} lg={6} className="mt-5">
          <Image src={registercard} fluid />
        </Col>
      </Row>
    </Container>
  );
};
