import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import {
    Container,
    Badge,
    Row,
    Col,
    Button,
    Card,
    Modal,
    Form,
} from "react-bootstrap"

import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

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

    // state for modal
    const [showModal, setShowModal] = useState(false)

    // state for customer info
    const [customerInfo, setCustomerInfo] = useState({
        shoes: cart,
        name: "",
        email: "",
        address: "",
        payment: "",
    })

    // state for input data modal form
    const [input, setInput] = useState({})

    // handle input change
    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value, shoes: cart }))
    }

    const clearForm = () => {
        document.getElementById("form").reset()
    }

    const postMessage = async () => {
        try {
            const response = await axios.post(
                "https://easyshoes.onrender.com/orders/addorder",
                input
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    // handle form submit
    const handleFormSubmit = (event) => {
        event.preventDefault()
        // TODO: handle payment logic
        console.log("payment sent", input)
        postMessage()
        setShowModal(false)
        setCart([])
        localStorage.removeItem("cart")
        clearForm()
        Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: "Thank you for shopping with us!",
            background: "#1f1f1f",
            color: "#fff",
        })
    }

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
                <div className='mt-3'>
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
                </div>
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
                                <Button
                                    className='mt-5'
                                    variant='danger'
                                    onClick={() => setShowModal(true)}>
                                    <strong>
                                        <i>Checkout</i>
                                    </strong>
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
                                    <b className='text-danger'>Tax (4%): </b>
                                    <strong>
                                        <i> $ {tax} </i>
                                    </strong>
                                </p>
                                <h5>
                                    <b className='text-danger'>Total: </b>
                                    <strong>
                                        <i> $ {totalPrice}</i>
                                    </strong>
                                </h5>
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

            {/* Checkout Modal */}
            <Modal centered show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header
                    className='text-center'
                    style={{ backgroundColor: "#1f1f1f" }}
                    closeButton>
                    <Modal.Title>
                        <i>
                            <strong>
                                Check
                                <b className='text-danger'>Out</b>
                            </strong>
                        </i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#1f1f1f" }}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className='mb-4' controlId='formName'>
                            <Form.Label>
                                <strong>
                                    <i>Name</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter name'
                                name='name'
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='mb-4' controlId='formEmail'>
                            <Form.Label>
                                <strong>
                                    <i>Email</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                name='email'
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='mb-4' controlId='formAddress'>
                            <Form.Label>
                                <strong>
                                    <i>Shipping Address</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter address'
                                name='address'
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='formPayment'>
                            <Form.Label>
                                <strong>
                                    <i>Payment</i>
                                </strong>
                            </Form.Label>
                            <Form.Select
                                name='payment'
                                onChange={handleInputChange}
                                required>
                                <option>Select a Payment Method</option>
                                <option value='debit card'>Debit Card</option>
                                <option value='credit card'>Credit Card</option>
                                <option value='paypal'>Paypal</option>
                            </Form.Select>
                        </Form.Group>
                        <div className='mt-4 text-center'>
                            <p>
                                <b className='text-danger'>Sub-Total:</b>
                                <strong>
                                    <i> $ {subTotalPrice}</i>
                                </strong>
                            </p>
                            <p>
                                <b className='text-danger'>Tax (4%): </b>
                                <strong>
                                    <i> $ {tax} </i>
                                </strong>
                            </p>
                            <h5>
                                <b className='text-danger'>Total: </b>
                                <strong>
                                    <i> $ {totalPrice}</i>
                                </strong>
                            </h5>
                        </div>

                        <div className='text-center mt-4'>
                            <Button variant='danger' type='submit'>
                                <strong>
                                    <i> Send Payment </i>
                                </strong>
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
