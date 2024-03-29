import { useState, useEffect } from "react"
import { CartContext } from "./CartContext"
import { Link, useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import { Button, Toast } from "react-bootstrap"

import cartimg from "../assets/cart.svg"

export const CartProvider = ({ children }) => {
    // get data from local storage and show it in cart
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    )

    // set data to local storage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // show button if cart is not empty
    const [showButton, setShowButton] = useState(false)

    // get current location to show button in specific page
    const location = useLocation()
    const { pathname } = location

    useEffect(() => {
        if (pathname === "/cart") {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }, [pathname])

    // adding item to cart
    const addToCart = (shoes) => {
        // Check if the item already exists in the cart
        const itemExists = cart.some((item) => item._id === shoes._id)

        if (itemExists) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Shoes already in cart!",
                background: "#1f1f1f",
                color: "#fff",
            })
        } else {
            const newCart = [...cart, shoes]

            localStorage.setItem("cart", JSON.stringify(newCart))

            setCart(newCart)

            Swal.fire({
                showConfirmButton: false,
                timer: 1000,
                width: 300,
                color: "#fff",
                background: "#1f1f1f",
                title: shoes.brand,
                text: "Added to cart!",
                imageUrl: shoes.img,
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: "Custom image",
            })

            setShowButton(true)
        }
    }

    // removing item from cart
    const removeCartItem = (shoes) => {
        const newCart = cart.filter((item) => item._id !== shoes._id)

        localStorage.setItem("cart", JSON.stringify(newCart))

        setCart(newCart)
    }

    return (
        <CartContext.Provider
            value={{ cart, setCart, removeCartItem, addToCart }}>
            <>
                {children}
                {cart.length > 0 && (
                    <Toast show={showButton}>
                        <Button
                            size='md'
                            variant='outline-danger'
                            className='position-fixed bottom-0 end-0 m-3'
                            style={{ zIndex: 5 }}>
                            <Link to='/cart'>
                                <strong>
                                    <i className='bi bi-cart3'>
                                        Go to Cart{"   "}
                                    </i>
                                </strong>
                            </Link>
                        </Button>
                    </Toast>
                )}
            </>
        </CartContext.Provider>
    )
}
