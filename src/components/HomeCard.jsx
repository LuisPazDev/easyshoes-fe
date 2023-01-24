import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import shoes1 from "../assets/casualblack.png";
import shoes2 from "../assets/redconverse.png";
import shoes3 from "../assets/greensport.png";

export const HomeCard = () => {
  return (
    <Container>
      <h2 className='mt-3 mb-2'> Trending Now </h2>
      <CardGroup className='mb-4 text-center ms-auto me-auto'>
        <Card className='ms-auto me-auto' style={{ width: "20rem" }}>
          <Card.Img variant='top' src={shoes1} />
          <Card.Body>
            <Card.Title className='mb-2'> Levi's </Card.Title>
          </Card.Body>
        </Card>
        <Card className='ms-auto me-auto' style={{ width: "20rem" }}>
          <Card.Img variant='top' src={shoes2} />
          <Card.Body>
            <Card.Title className='mb-2'> Converse </Card.Title>
          </Card.Body>
        </Card>
        <Card className='ms-auto me-auto' style={{ width: "20rem" }}>
          <Card.Img variant='top' src={shoes3} />
          <Card.Body>
            <Card.Title className='mb-2'> Nike </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>

      <Card className='text-center mb-3'>
        <Card.Body>
          <Card.Title>Special Offers</Card.Title>
          <Card.Text>
            Go to our Catalog list and get your favorites shoes with special
            offers right now!
          </Card.Text>
          <Button variant='primary'>
            <Link className='link-button' to='/menu'>
              Go to Catalog
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
