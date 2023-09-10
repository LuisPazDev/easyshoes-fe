import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Image } from "react-bootstrap";

import supportcard from "../assets/supportcard.png";

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
                  <i>Support 24/7 </i>
                </strong>
              </Badge>
            </h3>

            <h1 className="mt-3 mb-4">
              <strong>
                <i>Contact Us! </i>
              </strong>
            </h1>

            <h6 className="text-start">
              <i>
                We are here to help you 24/7. Please contact us
                <br />
                if you need any help or support.
              </i>

              <br />
            </h6>

            <div className="mt-2">
              <Button className="mt-5" variant="outline-light" size="lg">
                <Link to="/contact">
                  <strong>
                    <i>Contact</i>
                  </strong>
                </Link>
              </Button>
              <h6 className="mt-4">
                <strong>
                  <i>
                    <u>Call Us:</u>
                  </i>
                  <i> 800-123-4567</i>
                </strong>
                <h6 className="mt-2">
                  <strong>
                    <i>
                      <u>Email:</u>
                    </i>
                    <i> support@easyshoes.com</i>
                  </strong>
                </h6>
              </h6>
            </div>
          </div>
        </Col>

        {/*  Image Col */}
        <Col xs={12} md={12} lg={6} className="mt-5">
          <Image src={supportcard} fluid />
        </Col>
      </Row>
    </Container>
  );
};
