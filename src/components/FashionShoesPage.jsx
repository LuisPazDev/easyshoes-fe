import { Container, Col, Row, Image, Badge } from "react-bootstrap";

import fashionshoes from "../assets/fashionshoespage.png";

export const FashionShoesPage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
          <Image
            fluid
            roundedCircle
            style={{ maxHeight: "250px" }}
            src={fashionshoes}
            alt="sportshoesimg"
          />
        </Col>
      </Row>
    </Container>
  );
};
