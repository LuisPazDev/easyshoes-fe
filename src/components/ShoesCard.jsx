import { useContext } from "react"
import { ShoesContext } from "../context/ShoesContext"
import { CartContext } from "../context/CartContext"
import { FiltertButton } from "./FiltertButton"
import {
    Badge,
    Container,
    Button,
    Card,
    Spinner,
    Col,
    Row,
} from "react-bootstrap"

import stars from "../assets/stars.png"

export const ShoesCard = () => {
    // get data from shoes context
    const { shoes, isLoading } = useContext(ShoesContext)

    // add to cart button function using cart from context
    const { addToCart } = useContext(CartContext)

    return (
        <Container fluid className='p-4'>
            <div>
                <h1 className='text-center mt-4'>
                    <Badge pill bg='danger'>
                        <strong>
                            <i>Shoes</i>
                        </strong>
                    </Badge>
                </h1>
            </div>
            <div className='text-center mt-3'>
                <h6>
                    <i>Find the perfect pair for you.</i>
                </h6>
            </div>

            <FiltertButton />

            <Row>
                {isLoading ? (
                    <div className='text-center mt-5'>
                        <Spinner animation='border' variant='danger' />
                    </div>
                ) : (
                    Array.isArray(shoes) &&
                    shoes.map((item) => (
                        <Col
                            key={item._id}
                            xs={12}
                            md={6}
                            lg={4}
                            className='d-flex flex-row justify-content-center align-items-center mt-3 p-4'>
                            <Card
                                style={{
                                    width: "16rem",
                                }}
                                className='border-dark rounded animate__animated animate__backInLeft animate__delay-1s'>
                                <Card.Img
                                    variant='top'
                                    src={item.img}
                                    className='img-fluid'
                                    style={{
                                        height: "250px",
                                        backgroundColor: "black",
                                    }}
                                />
                                <Card.Body
                                    style={{
                                        backgroundColor: "#0E0E0E",
                                    }}>
                                    <div>
                                        <img
                                            style={{
                                                width: "70px",
                                            }}
                                            src={stars}
                                            alt='stars'
                                        />
                                    </div>

                                    <Card.Title className='text-start'>
                                        <h4>
                                            <strong>
                                                <i>{item.brand}</i>
                                            </strong>
                                        </h4>
                                    </Card.Title>
                                    <Card.Text>
                                        <h6>
                                            <i>{item.model}</i>
                                        </h6>
                                    </Card.Text>
                                    <Card.Text>
                                        <h6>
                                            <i>
                                                <strong>Size : </strong>
                                                {item.size}
                                            </i>
                                        </h6>
                                    </Card.Text>
                                    <Card.Text>
                                        <h5 className='mt-4'>
                                            <strong>
                                                <i className='text-danger'>
                                                    $ {item.price}
                                                </i>
                                            </strong>
                                        </h5>
                                    </Card.Text>
                                    <div className='text-center mt-4 mb-4'>
                                        <Button
                                            onClick={() => addToCart(item)}
                                            variant='outline-light'>
                                            <strong>
                                                <i>Add to cart</i>
                                            </strong>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    )
}
