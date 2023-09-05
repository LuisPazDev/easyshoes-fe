import { Container, Row, Col } from "react-bootstrap";

import logoluispazdev from "../assets/logoluispazdev.png";

export const HomeFooter = () => {
  return (
    <Container fluid className="bg-black text-white text-center p-4">
      <Row>
        <Col>
          <div className="mt-4">
            <h6>
              <strong>
                <i> Developed By </i>
              </strong>
            </h6>
            <a
              href="https://luispazdev.github.io/portfolio/#home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logoluispazdev}
                alt="logo"
                style={{ width: "150px", height: "50px" }}
              />
            </a>
          </div>
          <div className="mt-2">
            <p>
              <i>© 2023 All rights reserved </i>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
