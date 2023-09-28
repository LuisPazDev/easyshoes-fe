import { useContext } from "react"
import { Link } from "react-router-dom"
import { Container, Badge, Row, Col, Button, Card } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

export const MyCart = () => {
    // getting cart data from cart context
    const { cart, setCart, removeCartItem } = useContext(CartContext)

    // Calculating the total price of the cart items
    const subTotalPrice = cart
        .reduce((acc, curr) => acc + parseFloat(curr.price), 0)
        .toFixed(2)

    // calculating the tax of the cart items 4%
    const tax = (subTotalPrice * 0.04).toFixed(2)

    // calculating the total price of the cart items with tax
    const totalPrice = (parseFloat(subTotalPrice) + parseFloat(tax)).toFixed(2)

    return (
        <Container fluid>
            <div className='text-center p-5'>
                <h1>
                    <Badge pill className='bg-danger'>
                        <strong>
                            <i>Cart</i>
                        </strong>
                    </Badge>
                </h1>
                <di className='mt-3'>
                    {
                        // if cart is not empty
                        cart.length > 0 ? (
                            <h6>
                                <i>Review your items</i>
                            </h6>
                        ) : (
                            // if cart is empty
                            <h6>
                                <i>Your cart is empty</i>
                            </h6>
                        )
                    }
                </di>
            </div>

            <Row>
                {cart.map((shoes) => (
                    <Col
                        xs={12}
                        className='d-flex flex-row justify-content-center align-items-center mt-1 p-2'>
                        <Card
                            key={shoes._id}
                            style={{ width: "20rem" }}
                            className='bg-dark text-white'>
                            <Row>
                                <Col>
                                    <Card.Img
                                        style={{ maxHeight: "130px" }}
                                        className='bg-black'
                                        variant='top'
                                        src={shoes.img}
                                    />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <small>
                                            <Card.Title>
                                                {shoes.brand}
                                            </Card.Title>
                                            <Card.Text>
                                                {" "}
                                                $ {shoes.price}
                                            </Card.Text>
                                            <Button
                                                onClick={() =>
                                                    removeCartItem(shoes)
                                                }
                                                size='sm'
                                                variant='danger'>
                                                Remove{" "}
                                            </Button>
                                        </small>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
                {
                    // if cart is not empty
                    cart.length > 0 ? (
                        <>
                            <div className='text-center'>
                                <Button className='mt-5' variant='danger'>
                                    <Link to='/shoes'>
                                        <strong>
                                            <i>Keep Shopping</i>
                                        </strong>
                                    </Link>
                                </Button>
                            </div>

                            <div className='text-center mt-5'>
                                <p>
                                    <b className='text-danger'>Sub-Total:</b>
                                    <strong>
                                        <i> $ {subTotalPrice}</i>
                                    </strong>
                                </p>
                                <p>
                                    <b className='text-danger'>Tax </b>
                                    (4%):
                                    <strong>
                                        <i> $ {tax} </i>
                                    </strong>
                                </p>
                                <p>
                                    <b className='text-danger'>Total: </b>
                                    <strong>
                                        <i> $ {totalPrice}</i>
                                    </strong>
                                </p>
                            </div>
                            <div className='text-center mt-3 mb-3'>
                                <Button variant='outline-light'>
                                    <strong>
                                        <i>Checkout</i>
                                    </strong>
                                </Button>
                            </div>
                        </>
                    ) : (
                        // if cart is empty
                        <div className='text-center mt-5 mb-5'>
                            <Link to='/shoes'>
                                <Button
                                    className='mt-4'
                                    variant='outline-light'>
                                    <strong>
                                        <i>Start Shopping Here</i>
                                    </strong>
                                </Button>
                            </Link>
                        </div>
                    )
                }
            </Row>
        </Container>
    )
}
