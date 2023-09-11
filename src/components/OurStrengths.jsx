import { useInView } from "react-intersection-observer";
import { Badge, Col, Container, Row } from "react-bootstrap";

import deliveryicon from "../assets/fast.svg";
import supporticon from "../assets/support.svg";
import returnicon from "../assets/money.svg";
import membericon from "../assets/member.svg";
import secureicon from "../assets/payment.svg";
import bestpriceicon from "../assets/price.svg";

import bgstrength from "../assets/bgstrength.png";

export const OurStrengths = () => {
  const { ref, inView } = useInView({
    freezeOnceVisible: true,
    threshold: 1,
    triggerOnce: true,
  });

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
            <h2>
              <Badge bg="danger">
                <strong>
                  <i>Our Strengths</i>
                </strong>
              </Badge>
            </h2>

            <h1 className="mt-4 mb-5">
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
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={deliveryicon}
                alt="deliveryicon"
              />
              Free Shipping
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5">On all orders</h6>
          </div>
        </Col>

        <Col
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight animate__delay-1s"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={supporticon}
                alt="deliveryicon"
              />
              Online Support
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5"> 24 hours</h6>
          </div>
        </Col>

        <Col
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight animate__delay-2s"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={returnicon}
                alt="deliveryicon"
              />
              Money Return
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5">Under 7 days</h6>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight animate__delay-3s"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={bestpriceicon}
                alt="deliveryicon"
              />
              The Best Prices
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5">Updated daily</h6>
          </div>
        </Col>
        <Col
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight animate__delay-4s"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={membericon}
                alt="deliveryicon"
              />
              Member Discount
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5">Orders over 120</h6>
          </div>
        </Col>

        <Col
          ref={ref}
          xs={12}
          md={12}
          lg={4}
          className={`${
            inView
              ? "d-flex flex-column justify-content-center align-items-center mt-4 p-3 animate__animated animate__backInRight animate__delay-5s"
              : ""
          }`}
        >
          <div>
            <h5>
              <img
                style={{ width: "40px", height: "40px" }}
                className="me-3"
                src={secureicon}
                alt="deliveryicon"
              />
              Secure Payment
            </h5>
          </div>
          <div className="text-center">
            <h6 className="ms-5">100% secure</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
