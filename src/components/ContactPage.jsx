import { useState } from "react"
import { Link } from "react-router-dom"
import { Badge, Button, Form, Row, Col, Container } from "react-bootstrap"
import axios from "axios"
import Swal from "sweetalert2"

export const ContactPage = () => {
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }

    const clearForm = () => {
        document.getElementById("form").reset()
    }

    const postMessage = async () => {
        try {
            const response = await axios.post(
                "https://easyshoes.onrender.com/contact/addcontact",
                input
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    // send data to backend
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("message sent", input)
        postMessage()
        clearForm()
        Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "We will contact you soon",
            showConfirmButton: false,
            timer: 1800,
        })
    }

    return (
        <Container
            fluid
            className='d-flex flex-column justify-content-center align-items-center'>
            <Row>
                <Col xs={12} md={12} lg={12} className='text-center mt-5 mb-4'>
                    <div>
                        <h1>
                            <Badge pill className='bg-danger'>
                                <strong>
                                    <i>Contact Us</i>
                                </strong>
                            </Badge>
                        </h1>
                    </div>
                    <div className='mt-3'>
                        <h6>
                            <i>We are here to help you </i>
                        </h6>
                    </div>
                </Col>
            </Row>

            <Form
                style={{ backgroundColor: "#212529" }}
                className='mt-3 border border-dark rounded p-4'
                id='form'>
                <Row>
                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Name</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleChange}
                                name='name'
                                type='text'
                                placeholder='Enter your Name'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Email</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleChange}
                                name='email'
                                type='email'
                                placeholder='Enter email'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={12} lg={12} className='text-start mt-3'>
                        <Form.Group controlId='formBasicDescription'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Message</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                className='border border-dark input-comment'
                                onChange={handleChange}
                                name='comment'
                                type='text'
                                placeholder='Leave your Message here'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <div className='text-center mt-3'>
                        <Button
                            onClick={handleSubmit}
                            variant='outline-light'
                            className='mt-3 mb-3'
                            size='lg'
                            type='submit'>
                            <strong>
                                <i>Send</i>
                            </strong>
                        </Button>
                    </div>
                </Row>
            </Form>

            <Row className='ms-auto me-auto mt-5 mb-5'>
                <Col xs={12} md={12} lg={12} className='text-center'>
                    <Link to='/'>
                        <h5 className='text-center text-white'>
                            Go to{" "}
                            <strong>
                                <i>
                                    <u> HOME </u>
                                </i>
                            </strong>
                        </h5>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
