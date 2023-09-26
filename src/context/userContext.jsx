import { useState, createContext, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [authStatus, setAuthStatus] = useState(false)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const onResetForm = () => {
        setFormData({
            username: "",
            email: "",
            password: "",
        })
    }

    const registerUser = async (dataForm) => {
        try {
            await axios.post(
                "https://easyshoes.onrender.com/user/register",
                dataForm
            )
            onResetForm()
            // Navigate to login page
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem("token")

        if (token) {
            axios.defaults.headers.common["x-auth-token"] = token
        } else {
            delete axios.defaults.headers.common["x-auth-token"]
        }

        try {
            const res =
                token &&
                (await axios.get("https://easyshoes.onrender.com/user/get"))
            setUser(res.data.data)
            setAuthStatus(true)
        } catch (error) {
            console.log("token error", error)
        }
    }

    const loginUser = async (dataForm) => {
        try {
            const res = await axios.post(
                "https://easyshoes.onrender.com/login",
                dataForm
            )
            localStorage.setItem("token", res.data.token)
            verifyingToken()
            onResetForm()
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email or password is incorrect!",
            })
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
        setAuthStatus(false)
    }

    useEffect(() => {
        verifyingToken()
    }, [])

    const data = {
        registerUser,
        loginUser,
        handleChange,
        verifyingToken,
        logout,
        formData,
        setFormData,
        user,
        authStatus,
    }

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
