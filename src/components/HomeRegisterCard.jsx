import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

import bgregistercard from "../assets/bgregistercard.png";

export const HomeRegisterCard = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bgregistercard})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-5"
    >
      <Row>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="d-flex flex-column justify-content-center align-items-center mt-5"
        >
          <div className="text-start">
            <Badge bg="danger">
              <strong>
                <i>Join us </i>
              </strong>
            </Badge>
            <h2 className="mt-3 mb-4">
              <strong>
                <i>Register Now! </i>
              </strong>
            </h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12} className="mt-4 mb-4 p-3">
          <div>
            <h6 className="text-center">
              <strong>
                <i>
                  Create an account now to get
                  <br />
                  20% off on your first purchase.
                  <br />
                  <br />
                  <strong>
                    <i>JOIN US TODAY!</i>
                  </strong>
                </i>
              </strong>
            </h6>
          </div>
          <div className="text-center mt-5">
            <Button className="mt-4" variant="outline-light" size="lg">
              <Link className="text-light" to="/menu">
                <strong>
                  <i>Register</i>
                </strong>
              </Link>
            </Button>
            <p className="text-center mt-3">
              <strong>
                <i>
                  Already have an account? <a href="/login">Login</a>
                </i>
              </strong>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
