import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { useFetch } from "../hooks/useFetch"
import {
    Badge,
    Container,
    Col,
    Row,
    Button,
    Carousel,
    Image,
} from "react-bootstrap"

import bgsportcard from "../assets/bgsportcard.png"

import casual from "../assets/casualhome.png"
import fashion from "../assets/fashionhome.png"
import sport from "../assets/sporthome.png"

export const HomeSportCard = () => {
    const { data, isLoading } = useFetch(
        `https://easyshoes.onrender.com/shoes/get`
    )

    const { ref, inView } = useInView({
        freezeOnceVisible: true,
        threshold: 1,
        triggerOnce: true,
    })

    return (
        <Container
            fluid
            style={{
                backgroundImage: `url(${bgsportcard})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
            <Row>
                {/* Text Col */}
                <Col
                    ref={ref}
                    xs={12}
                    md={12}
                    lg={6}
                    className='d-flex flex-column justify-content-center align-items-center mt-5 mb-2 p-5 animate__animated animate__backInRight animate__delay-2s'>
                    <div className='text-center'>
                        <h2>
                            <Badge pill bg='danger'>
                                <strong>
                                    <i>Our Shoes</i>
                                </strong>
                            </Badge>
                        </h2>

                        <h1 className='mt-4 mb-4'>
                            <strong>
                                <i>We Have the Best </i>
                            </strong>
                        </h1>

                        <h6 style={{ lineHeight: "1.7em" }}>
                            <strong>
                                <i>
                                    Check out our amaizing range of shoes
                                    <br />
                                    we have it all, casual, sport fashion,
                                    <br />
                                    Easy<b className='text-danger'>Shoes </b>
                                    has only the best for you.
                                    <br />
                                </i>
                            </strong>
                        </h6>

                        <div className='mt-3'>
                            <Button
                                className='mt-4'
                                variant='outline-light'
                                size='lg'>
                                <Link to='/shoes'>
                                    <strong>
                                        <i>Shop Now</i>
                                    </strong>
                                </Link>
                            </Button>
                            <h6 className='mt-4'>
                                <strong>
                                    <i>Free Shipping on all orders</i>
                                </strong>
                            </h6>
                        </div>
                    </div>
                </Col>
                {/* Image Col */}
                <Col
                    ref={ref}
                    xs={12}
                    md={12}
                    lg={6}
                    className='d-flex flex-column justify-content-center align-items-center mt-3 mb-2 p-5 animate__animated animate__backInRight animate__delay-2s'>
                    <Link to='/shoes'>
                        <Carousel controls={false} indicators={false}>
                            <Carousel.Item>
                                <Image
                                    src={casual}
                                    style={{ maxHeight: "400px" }}
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src={fashion}
                                    style={{ maxHeight: "400px" }}
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src={sport}
                                    style={{ maxHeight: "400px" }}
                                    className='d-block w-100'
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
