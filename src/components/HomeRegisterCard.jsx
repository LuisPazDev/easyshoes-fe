import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

export const HomeRegisterCard = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div className="text-start">
            <Badge bg="danger">
              <strong>
                <i>Join us </i>
              </strong>
            </Badge>
            <h2 className="mt-3 mb-5">
              <strong>
                <i>Register Now! </i>
              </strong>
            </h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12} className="mb-4 p-3">
          <div>
            <p className="text-center">
              <strong>
                <i>
                  Create an account now to get the best deals and discounts.
                  <br />
                  Join us and get 20% off your first purchase.
                </i>
              </strong>
            </p>
          </div>
          <div className="text-center">
            <Button className="mt-4 mb-3" variant="outline-light" size="lg">
              <Link className="text-light" to="/menu">
                <strong>
                  <i>Register</i>
                </strong>
              </Link>
            </Button>
            <p className="text-center">
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
