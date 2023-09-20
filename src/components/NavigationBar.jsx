import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

import cartimg from "../assets/cart.svg";
import menuicon from "../assets/menu.svg";

export const NavigationBar = () => {
  // offcanvas navbar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // use context to add quantity to cartimg
  const { cart } = useContext(CartContext);

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
            className="bg-danger border-rounded"
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src={menuicon}
              alt="menu.svg"
            />
          </Navbar.Toggle>
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
                  <h6>
                    <strong>
                      <i>
                        <b className="text-white">EASY</b>
                        <b className="text-danger">SHOES</b>
                      </i>
                    </strong>
                  </h6>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link>
                  <Link
                    className="text-danger"
                    onClick={handleClose}
                    to="/shoes"
                  >
                    <strong>
                      <i>Shoes</i>
                    </strong>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link onClick={handleClose} to="/myaccount">
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
                <Nav.Link>
                  <Link onClick={handleClose} to="/cart">
                    <strong>
                      <i>Cart </i>
                      <span className="badge bg-black">
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src={cartimg}
                          alt="cart.svg"
                        />
                        {cart.length === 0 ? (
                          <span></span>
                        ) : (
                          <span>{cart.length}</span>
                        )}
                      </span>
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
