import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { SportShoesPage } from "./SportShoesPage";
import { CasualShoesPage } from "./CasualShoesPage";
import { FashionShoesPage } from "./FashionShoesPage";

export const ShoesPage = () => {
  return (
    <Container fluid className="p-4">
      <div className="text-center mt-4">
        <h1>
          <Badge pill className="bg-danger">
            <strong>
              <i>Shoes</i>
            </strong>
          </Badge>
        </h1>
        <h6 className="mt-4">
          <i>We have the best Models For You</i>
        </h6>
      </div>

      <Row
        xs={1}
        sm={1}
        md={1}
        lg={3}
        className="d-flex flex-row justify-content-center align-items-center mt-5 p-4"
      >
        <Col>
          <SportShoesPage />
        </Col>
        <Col>
          <CasualShoesPage />
        </Col>
        <Col>
          <FashionShoesPage />
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button variant="outline-light">
          <Link to="/allshoes">
            <strong>
              <i>View All Shoes</i>
            </strong>
          </Link>
        </Button>
      </div>
    </Container>
  );
};
