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
                  <Link className='link' to='/menu'>
                    Shoes
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='link' to='/myaccount'>
                    <img src={profile} className='nav-img' />
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='link' to='/mycart'>
                    <img src={cart} className='nav-img' />
                  </Link>
                </Nav.Link>
              </div>
            </Container>
          </Navbar>
        ))}
        <Outlet />
      </Container>
    </>
  );
};
