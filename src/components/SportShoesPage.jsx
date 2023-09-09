import { Container, Col, Row, Image, Badge } from "react-bootstrap";

import sportshoes from "../assets/sportshoespage.png";

export const SportShoesPage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
          <Image
            fluid
            roundedCircle
            style={{ maxHeight: "250px" }}
            src={sportshoes}
            alt="sportshoesimg"
          />
        </Col>
      </Row>
    </Container>
  );
};
