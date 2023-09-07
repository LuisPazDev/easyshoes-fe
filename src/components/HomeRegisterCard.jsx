import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Image } from "react-bootstrap";

import registercard from "../assets/registerimg.png";

export const HomeRegisterCard = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center mt-5"
        >
          <div className="text-start">
            <Badge bg="danger">
              <strong>
                <i>Be a Member </i>
              </strong>
            </Badge>
            <h2 className="mt-3 mb-4">
              <strong>
                <i>Register Now! </i>
              </strong>
            </h2>

            <h6 className="text-start">
              <strong>
                <i>
                  Create an account now and get 20% off
                  <br />
                  on your first purchase.
                  <br />
                  <br />
                  <strong>
                    <i>JOIN US TODAY!</i>
                  </strong>
                </i>
              </strong>
            </h6>

            <div className="mt-5 text-center">
              <Button className="mt-5" variant="outline-light" size="lg">
                <Link className="text-light" to="/menu">
                  <strong>
                    <i>Register</i>
                  </strong>
                </Link>
              </Button>
              <p className="mt-4">
                <strong>
                  <i>
                    Already have an account?{" "}
                    <a href="/login">
                      <strong>
                        <i>
                          <u>Login</u>
                        </i>
                      </strong>
                    </a>
                  </i>
                </strong>
              </p>
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
