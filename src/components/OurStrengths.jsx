import { Badge, Col, Container, Row } from "react-bootstrap";

import deliveryicon from "../assets/fast.svg";
import supporticon from "../assets/support.svg";
import returnicon from "../assets/money.svg";
import membericon from "../assets/member.svg";
import secureicon from "../assets/payment.svg";
import bestpriceicon from "../assets/price.svg";

export const OurStrengths = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12} className="mt-4 mb-4 p-3">
          <h2 className="text-center mt-5 mb-5">
            <Badge bg="danger">
              <strong>
                <i>Why choose us </i>
              </strong>
            </Badge>
          </h2>
        </Col>
      </Row>
      {/* First Row */}
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <div>
            <h3>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={deliveryicon}
                alt="deliveryicon"
              />
              Free Shipping
            </h3>
          </div>
          <div>
            <p className="ms-5">Free shipping on all order</p>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <h3>
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-3"
              src={supporticon}
              alt="deliveryicon"
            />
            Online Support
          </h3>
          <p>Online support 24 hours</p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <h3>
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-3"
              src={returnicon}
              alt="deliveryicon"
            />
            Money Return
          </h3>
          <p>Guarantee under 7 days </p>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <h3>
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-3"
              src={bestpriceicon}
              alt="deliveryicon"
            />
            Best Price
          </h3>
          <p>We have the best prices </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <h3>
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-3"
              src={membericon}
              alt="deliveryicon"
            />
            Member Discount
          </h3>
          <p>Orders over 120</p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3"
        >
          <h3>
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-3"
              src={secureicon}
              alt="deliveryicon"
            />
            Secure Payment
          </h3>
          <p>All cards accepted</p>
        </Col>
      </Row>
    </Container>
  );
};
