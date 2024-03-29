import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col, Badge, Button, Image } from "react-bootstrap"

import bgregistercard from "../assets/bgregistercard.png"
import supportcard from "../assets/supportcard.png"

export const HomeSupportCard = () => {
    const { ref, inView } = useInView({
        freezeOnceVisible: true,
        threshold: 1,
        triggerOnce: true,
    })
    return (
        <Container
            fluid
            style={{
                backgroundImage: `url(${bgregistercard})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
            <Row>
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    className='d-flex flex-column justify-content-center align-items-center mt-5 ps-4'>
                    <div className='text-center'>
                        <h2>
                            <Badge bg='danger'>
                                <strong>
                                    <i>Support 24/7 </i>
                                </strong>
                            </Badge>
                        </h2>

                        <h1 className='mt-4 mb-4'>
                            <strong>
                                <i>Contact Us! </i>
                            </strong>
                        </h1>

                        <h6 style={{ lineHeight: "1.7em" }}>
                            <i>
                                We are here to help you 24/7
                                <br />
                                Please do not hesitate in contact us
                                <br />
                                if you need any help or support.
                            </i>
                            <br />
                        </h6>

                        <div className='mt-3'>
                            <Button
                                className='mt-4'
                                variant='outline-light'
                                size='lg'>
                                <Link to='/contact'>
                                    <strong>
                                        <i>Contact</i>
                                    </strong>
                                </Link>
                            </Button>
                            <h6 className='mt-4'>
                                <strong>
                                    <i>
                                        <u>Call Us:</u>
                                    </i>
                                    <i> 800-123-4567</i>
                                </strong>
                                <h6 className='mt-2'>
                                    <strong>
                                        <i>
                                            <u>Email:</u>
                                        </i>
                                        <i> support@easyshoes.com</i>
                                    </strong>
                                </h6>
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
                                style={{
                                    maxWidth: "450px",
                                }}
                                src={supportcard}
                                className='animate__animated animate__backInRight '
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
