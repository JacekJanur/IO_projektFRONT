import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/register">Sign Up</Link>
        </nav>
	)
}

export default Navbar