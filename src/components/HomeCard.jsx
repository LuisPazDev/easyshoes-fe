import { Badge, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardGroup from "react-bootstrap/CardGroup"
import casualShoes from "../assets/casualshoes.png"
import sportShoes from "../assets/sportshoes.png"
import dressShoes from "../assets/dressshoes.png"

export const HomeCard = () => {
    return (
        <Container fluid>
            <Row>
                <div className='mt-4 mb-3 text-center'>
                    <h2>
                        <span className=''>
                            <i className='fas fa-shoe-prints'>
                                We have the Best Options for You
                            </i>
                        </span>
                    </h2>
                    <span>
                        <Badge bg='dark'>
                            <h6>
                                <i className='fas fa-phone-alt'>
                                    {" "}
                                    New Collection
                                </i>
                            </h6>
                        </Badge>
                    </span>
                </div>

                <Col className='text-center'>
                    <CardGroup>
                        {/*  Casual Shoes */}
                        <Card>
                            <Card.Img
                                className='p-5'
                                variant='top'
                                src={casualShoes}
                            />
                            <Card.Body>
                                <h3> Casual Shoes </h3>
                                <Card.Text className='p-3'>
                                    Check out our casual shoes collection and
                                    get the best prices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/*  Sport Shoes */}
                        <Card>
                            <Card.Img
                                className='p-5'
                                variant='top'
                                src={sportShoes}
                            />
                            <Card.Body>
                                <h3> Sports Shoes </h3>
                                <Card.Text className='p-3'>
                                    we have the best sports shoes for you at the
                                    best prices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/*  Dress Shoes */}
                        <Card>
                            <Card.Img
                                className='p-5'
                                variant='top'
                                src={dressShoes}
                            />
                            <Card.Body>
                                <h3> Dress Shoes </h3>
                                <Card.Text className='p-3'>
                                    Visit our dress shoes collection and get the
                                    best fashion shoes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <div className='text-center mt-3 mb-4'>
                    <Button variant='dark' size='lg'>
                        <Link to='/menu'> See More </Link>
                    </Button>
                </div>
            </Row>
        </Container>
    )
}
