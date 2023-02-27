import { Container } from "react-bootstrap"
import { HomeCard } from "./HomeCard"
import { HomeFooter } from "./HomeFooter"
import { HomeHeader } from "./HomeHeader"

function Home() {
    return (
        <Container fluid>
            <HomeHeader />
            <HomeCard />
            <HomeFooter />
        </Container>
    )
}

export default Home
