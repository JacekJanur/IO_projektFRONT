import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
const Navbar = () => {
	return (
		<nav>
        <Link to="/logowanie"> Logowanie </Link>
        <Link to="/rejestracja"> Rejestracja </Link>
        </nav>
	)
}

export default Navbar