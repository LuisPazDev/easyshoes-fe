import { Col, Row, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import photo3 from "../assets/coverhome.png"

export const HomeHeader = () => {
    return (
        <Container fluid>
            <Row className='mb-3'>
                <Col lg='6' md='6' sm='12' className='mt-auto mb-auto'>
                    <div className='ms-3 p-3'>
                        <h1>
                            Welcome to
                            <br />
                            <i>EasyShoes</i>
                        </h1>
                        <p>
                            We are an online store that sells all kind of shoes
                            we have only the best for you. Get the best prices
                            and the best quality.
                        </p>
                        <div>
                            <Button variant='dark' size='lg'>
                                <Link to='/menu'> Shop Now </Link>
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6' sm='12'>
                    <Card className='bg-dark text-white'>
                        <Card.Img src={photo3} alt='Card image' />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
