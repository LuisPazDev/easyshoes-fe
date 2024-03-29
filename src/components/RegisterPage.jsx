import { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"

import { Container, Form, Button, Row, Col, Badge } from "react-bootstrap"

export const RegisterPage = () => {
    const { registerUser, authStatus, verifyingToken, formData, setFormData } =
        useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        verifyingToken()

        if (authStatus) {
            navigate("/myaccount")
        }
    }, [authStatus])

    if (authStatus) return null

    const sendData = (e) => {
        e.preventDefault()
        registerUser(formData)
    }

    return (
        <Container
            fluid
            className='d-flex flex-column justify-content-center align-items-center mb-5'>
            <div className='text-center p-5'>
                <h1>
                    <Badge pill className='bg-danger'>
                        <strong>
                            <i>Register</i>
                        </strong>
                    </Badge>
                </h1>
                <h6 className='mt-3'>
                    <i>Create your account</i>
                </h6>
            </div>

            <Form
                style={{
                    backgroundColor: "#212529",
                    maxWidth: "500px",
                }}
                className='mt-3 border border-dark rounded p-4'
                id='form'>
                <Row>
                    <Col xs={12} className='mb-4'>
                        <Form.Group controlId='formBasicUsername'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Username</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className='border border-dark'
                                name='username'
                                type='text'
                                placeholder='Enter your Username'
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} className='mb-4'>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Email</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className='border border-dark'
                                name='email'
                                type='email'
                                placeholder='Enter your email'
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} className='mb-4'>
                        <Form.Group controlId='formBasicLastPassword'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Password</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className='border border-dark'
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className='text-center'>
                    <Button
                        onClick={sendData}
                        className='mt-4 mb-3'
                        variant='outline-light'
                        size='lg'
                        type='submit'>
                        <strong>
                            <i>Register</i>
                        </strong>
                    </Button>
                </div>
            </Form>

            <div className='text-center mt-5 mb-5'>
                <h6>
                    Already have an account?
                    <br />
                    <br />
                    <Button variant='outline-light'>
                        <Link to='/login'>
                            <strong>
                                <i>Login Here</i>
                            </strong>
                        </Link>
                    </Button>
                </h6>
            </div>
        </Container>
    )
}
