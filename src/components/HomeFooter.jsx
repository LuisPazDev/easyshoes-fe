import { Badge, Container } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import footerpic from "../assets/footerpic.png"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"

export const HomeFooter = () => {
    return (
        <Container fluid>
            <Row className='mt=3 mb-3 p-5'>
                <Col lg='6' md='6' sm='12'>
                    <Card>
                        <Card.Img
                            className='p-5'
                            src={footerpic}
                            alt='Card image'
                        />
                    </Card>
                </Col>

                <Col lg='6' md='6' sm='12' className='mt-auto mb-auto'>
                    <div className='mt-3 ms-3 p-2'>
                        <h4>
                            <i>Contact Us</i>
                        </h4>
                        <p>
                            Do not hesitate to contact us if you have any doubt
                            or question.
                        </p>
                        <div className='text-center'>
                            <Badge bg='dark'>
                                <h6>
                                    <i className='fas fa-phone-alt'>
                                        {" "}
                                        customerService@easyshoes.com
                                    </i>
                                </h6>
                            </Badge>
                        </div>
                    </div>
                    <div className='ms-3 p-2 mt-1'>
                        <h4>
                            <i> Follow Us </i>
                        </h4>
                        <p>
                            Follow us on our social media to get the latest news
                            and promotions.
                        </p>
                        <div className='text-center'>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'>
                                <img
                                    className='img-socialMedia me-2'
                                    src={instagram}
                                    alt='instagram'
                                />
                            </a>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <img
                                    className='img-socialMedia me-2'
                                    src={facebook}
                                    alt='facebook'
                                />
                            </a>
                            <a
                                href='https://twitter.com/?lang=en'
                                target='_blank'>
                                <img
                                    className='img-socialMedia'
                                    src={twitter}
                                    alt='twitter'
                                />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
