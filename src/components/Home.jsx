import { Container } from "react-bootstrap";
import { HomeCard } from "./HomeCard";
import { HomeCarousel } from "./HomeCarousel";

function Home() {
  return (
    <Container>
      <HomeCarousel />
      <HomeCard />
    </Container>
  );
}

export default Home;
