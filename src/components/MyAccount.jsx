import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

import { Container, Button, Badge, Card, Row, Col } from "react-bootstrap"

export const MyAccount = () => {
    const { logout, user } = useContext(UserContext)

    useEffect(() => {
        console.log("users", user)
    }, [])

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
                                    <i> My Account </i>
                                </strong>
                            </Badge>
                        </h1>
                    </div>
                    <div className='mt-3'>
                        <h6>
                            <i>Welcome to your account</i>
                        </h6>
                    </div>
                </Col>
            </Row>

            <Card
                style={{
                    width: "18rem",
                    backgroundColor: "#212529",
                }}
                className='text-center border border-dark rounded'>
                <Card.Header>
                    <h4>
                        <strong>
                            <i>Account Details</i>
                        </strong>
                    </h4>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <h6 className='text-danger'>
                            <strong>
                                <i>Username</i>
                            </strong>
                        </h6>
                    </Card.Title>
                    <Card.Text>
                        <strong>
                            <i>{user.username}</i>
                        </strong>
                    </Card.Text>
                    <Card.Title>
                        <h6 className='text-danger'>
                            <strong>
                                <i>Email</i>
                            </strong>
                        </h6>
                    </Card.Title>
                    <Card.Text>
                        <strong>
                            <i>{user.email}</i>
                        </strong>
                    </Card.Text>
                    <Card.Title>
                        <h6 className='text-danger mt-4'>
                            <strong>
                                <i>Use Code:</i>
                                <br />
                                <Badge pill className='bg-danger mt-2 mb-2'>
                                    <strong>
                                        <i> easyshoes20 </i>
                                    </strong>
                                </Badge>
                                <p className='text-white'>
                                    <i>to get 20% off</i>
                                </p>
                            </strong>
                        </h6>
                    </Card.Title>
                    <Button
                        className='mt-5'
                        variant='danger'
                        onClick={() => {
                            logout()
                        }}>
                        <strong>
                            <i>Logout</i>
                        </strong>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
