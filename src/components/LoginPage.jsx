import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginPage = () => {
  return (
    <Container>
      <Card className='m-auto mt-5' style={{ width: "25rem" }}>
        <div className='m-auto mt-3'>
          <h2> Log In </h2>
        </div>

        <Form className='ms-3 me-3 mt-4 mb-4'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Form>
      </Card>
      <div className='text-center mt-3'>
        <h6> Don't have an account? Register Now!</h6>
        <Button className='mt-2'>
          <Link className='link-button' to='/register'>
            Register
          </Link>
        </Button>
      </div>
    </Container>
  );
};
