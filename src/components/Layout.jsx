import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import profile from "../assets/user.svg";
import cart from "../assets/cart.svg";
import flag from "../assets/flag.svg";
import logo from "../assets/logo.svg";

import "../styles/App.css";

export const Layout = () => {
  return (
    <>
      <Container fluid>
        {[false].map((expand) => (
          <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
            <Container fluid>
              <Navbar.Brand href='#'>
                <img src={logo} className='nav-img-logo' />
                <h3> EasyShoes</h3>
              </Navbar.Brand>

              <div className='nav-link'>
                <Nav.Link>
                  <img src={flag} className='nav-img-flag' />
                  <p className='nav-img-text'>USD</p>
                </Nav.Link>
                <Nav.Link>
                  <Link className='link' to='/login'>
                    <img src={profile} className='nav-img' />
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='link' to='/cart'>
                    <img src={cart} className='nav-img' />
                  </Link>
                </Nav.Link>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />

                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement='end'
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className='justify-content-end flex-grow-1 pe-3'>
                      <Nav.Link>
                        <Link className='link' to='/'>
                          Home
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className='link' to='/menu'>
                          Shoes
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className='link' to='/login'>
                          Login
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className='link' to='/register'>
                          Register
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className='link' to='/cart'>
                          Cart
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
            </Container>
          </Navbar>
        ))}
        <Outlet />
      </Container>
    </>
  );
};
