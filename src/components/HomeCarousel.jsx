import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import photo from "../assets/photo.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={photo2} alt='First slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={photo3} alt='Second slide' />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={photo} alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  );
};
