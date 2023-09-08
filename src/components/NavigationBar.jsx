import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

// Assets & Styles
import logo from "../assets/easyshoeslogo.png";

export const NavigationBar = () => {
  // offcanvas navbar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="sticky-top bg-black ps-3 pe-3 border-bottom border-2 border-danger"
        >
          <Navbar.Brand href="#">
            <h6>
              <strong>
                <i>
                  <b className="text-white">EASY</b>
                  <b className="text-danger">SHOES</b>
                </i>
              </strong>
            </h6>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleShow}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="bg-danger border-rounded border-2 border-dark"
          />
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            className="bg-black"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link to="/" onClick={handleClose}>
                  <img src={logo} alt="logo" width={100} height={25} />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link>
                  <Link
                    className="text-danger"
                    onClick={handleClose}
                    to="/menu"
                  >
                    <strong>
                      <i>Shoes</i>
                    </strong>
                    s
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-white"
                    onClick={handleClose}
                    to="/login"
                  >
                    <strong>
                      <i>Sign In</i>
                    </strong>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-white"
                    onClick={handleClose}
                    to="/contact"
                  >
                    <strong>
                      <i>Contact</i>
                    </strong>
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
};
