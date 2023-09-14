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
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  return (
    <Container
      fluid
      className="p-4"
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
          xs={12}
          md={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mt-4 p-3"
        >
          <div ref={ref1}>
            {inView1 && (
              <div className="animate__animated animate__backInRight">
                <h5>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className="me-3"
                    src={deliveryicon}
                    alt="deliveryicon"
                  />
                  Free Shipping
                </h5>

                <div className="text-center">
                  <h6 className="ms-5">On all orders</h6>
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={4}
          className={`d-flex flex-column justify-content-center align-items-center mt-4 p-3 ${
            inView2
              ? "animate__animated animate__backInRight animate__delay-1s"
              : ""
          }`}
        >
          <div ref={ref2}>
            {inView2 && (
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
            )}
            <div className="text-center">
              <h6 className="ms-5"> 24 hours</h6>
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={4}
          className={`d-flex flex-column justify-content-center align-items-center mt-4 p-3 ${
            inView3
              ? "animate__animated animate__backInRight animate__delay-2s"
              : ""
          }`}
        >
          <div ref={ref3}>
            {inView3 && (
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
            )}
            <div className="text-center">
              <h6 className="ms-5">Under 7 days</h6>
            </div>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col
          xs={12}
          md={12}
          lg={4}
          className={`d-flex flex-column justify-content-center align-items-center mt-4 p-3 ${
            inView4
              ? "animate__animated animate__backInRight animate__delay-3s"
              : ""
          }`}
        >
          <div ref={ref4}>
            {inView4 && (
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
            )}
            <div className="text-center">
              <h6 className="ms-5">Updated daily</h6>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={4}
          className={`d-flex flex-column justify-content-center align-items-center mt-4 p-3 ${
            inView5
              ? "animate__animated animate__backInRight animate__delay-4s"
              : ""
          }`}
        >
          <div ref={ref5}>
            {inView5 && (
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
            )}
            <div className="text-center">
              <h6 className="ms-5">Orders over 120</h6>
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={4}
          className={`d-flex flex-column justify-content-center align-items-center mt-4 p-3 ${
            inView6
              ? "animate__animated animate__backInRight animate__delay-5s"
              : ""
          }`}
        >
          <div ref={ref6}>
            {inView6 && (
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
            )}
            <div className="text-center">
              <h6 className="ms-5">100% secure</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
