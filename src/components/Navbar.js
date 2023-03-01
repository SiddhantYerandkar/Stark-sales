import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import "../styles/Navbar.css"

const Navbar = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate("/login")
    }

    return (
        <>
            <nav className='main-nav'>
                <div>
                    <NavLink to="/" >
                        <img src='./images/Logo.png' alt='my-logo' width={290} />
                    </NavLink>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>

                        {(localStorage.getItem("authToken")) ?
                            <NavLink to="/Cart">
                                <AiOutlineShoppingCart className="cart-trolley" />
                            </NavLink>
                            : ""}
                        {(!localStorage.getItem("authToken")) ?
                            <li>

                                <NavLink to="/login">Login</NavLink>

                                <NavLink to="/createuser">SignUp</NavLink>

                            </li>
                            :
                            <li onClick={handleLogout} >Logout </li>
                        }
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default Navbar