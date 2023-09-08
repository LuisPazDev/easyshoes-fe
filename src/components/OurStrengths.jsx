import { Badge, Col, Container, Row } from "react-bootstrap";

import deliveryicon from "../assets/fast.svg";
import supporticon from "../assets/support.svg";
import returnicon from "../assets/money.svg";
import membericon from "../assets/member.svg";
import secureicon from "../assets/payment.svg";
import bestpriceicon from "../assets/price.svg";

import bgstrength from "../assets/bgstrength.png";

export const OurStrengths = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bgstrength})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div className="text-start">
            <h3>
              <Badge bg="danger">
                <strong>
                  <i>Our Strengths</i>
                </strong>
              </Badge>
            </h3>

            <h1 className="mt-3 mb-5">
              <strong>
                <i>Why Choose Us</i>
              </strong>
            </h1>
          </div>
        </Col>
      </Row>

      {/* First Row */}
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={deliveryicon}
                alt="deliveryicon"
              />
              Free Shipping
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">On all order</p>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={supporticon}
                alt="deliveryicon"
              />
              Online Support
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">Support 24 hours</p>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={returnicon}
                alt="deliveryicon"
              />
              Money Return
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">Under 7 days</p>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={bestpriceicon}
                alt="deliveryicon"
              />
              The Best Prices
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">Updated daily</p>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={membericon}
                alt="deliveryicon"
              />
              Member Discount
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">Orders over 120</p>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div>
            <h6>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={secureicon}
                alt="deliveryicon"
              />
              Secure Payment
            </h6>
          </div>
          <div className="text-center">
            <p className="ms-5">100% secure payment</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
