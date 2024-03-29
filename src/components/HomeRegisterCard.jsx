import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col, Badge, Button, Image } from "react-bootstrap"

import bgcontainer from "../assets/bgcontainer.png"
import registercard from "../assets/registerimg.png"

export const HomeRegisterCard = () => {
    const { ref, inView } = useInView({
        freezeOnceVisible: true,
        threshold: 0.5,
        triggerOnce: true,
    })

    return (
        <Container
            fluid
            style={{
                backgroundImage: `url(${bgcontainer})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
            <Row>
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
                    <div className='text-center'>
                        <h2>
                            <Badge bg='danger'>
                                <strong>
                                    <i>Be a Member </i>
                                </strong>
                            </Badge>
                        </h2>

                        <h1 className='mt-4 mb-4'>
                            <strong>
                                <i>Register Now! </i>
                            </strong>
                        </h1>

                        <h6 style={{ lineHeight: "1.7em" }}>
                            <strong>
                                <i>
                                    Create an account now and get 20% off
                                    <br />
                                    on your purchases. Be a VIP Member and
                                    <br />
                                    enjoy our exclusive offers.
                                </i>
                            </strong>
                            <br />
                        </h6>

                        <div className='mt-3'>
                            <Button
                                className='mt-4'
                                variant='outline-light'
                                size='lg'>
                                <Link className='text-light' to='/register'>
                                    <strong>
                                        <i>Register Here</i>
                                    </strong>
                                </Link>
                            </Button>
                            <h6 className='mt-4'>
                                <strong>
                                    <i>Join Us Today and be a VIP Member</i>
                                </strong>
                            </h6>
                        </div>
                    </div>
                </Col>

                {/*  Image Col */}
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    className='d-flex flex-column justify-content-center align-items-center mt-5'>
                    <div ref={ref}>
                        {inView && (
                            <Image
                                fluid
                                src={registercard}
                                style={{
                                    maxWidth: "450px",
                                }}
                                className='animate__animated animate__backInRight animate__delay-1s ps-4 pe-4'
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
