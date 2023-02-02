import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import shoes from "../assets/shoes.png";
import CardGroup from "react-bootstrap/CardGroup";

export const HomeCard = () => {
  return (
    <CardGroup className='mt-4'>
      <Card>
        <img className='img-home' src={shoes} />
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>
            <h2> Welcome to Easy Shoes </h2>
          </Card.Title>
          <Card.Text>
            <p>
              We are an online store that sells all kind of shoes <br /> we have
              only the best for you <br /> Get the best prices
            </p>
            <p>
              <strong>Check Our full Catalog</strong>
            </p>
            <Button className='ms-auto me-auto' variant='dark'>
              <Link className='link-button' to='/menu'>
                Go to Catalog
              </Link>
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
