import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Badge } from "react-bootstrap";

import casualshoes from "../assets/casualshoespage.png";

export const CasualShoesPage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
          <Link to="/casualshoes">
            <Image
              fluid
              roundedCircle
              style={{ maxHeight: "250px" }}
              src={casualshoes}
              alt="sportshoesimg"
              className="border border-light shadow mb-3 bg-white rounded"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
