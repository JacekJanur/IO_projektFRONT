import React from 'react'
import Navbar from '../components/NavLogin';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const LoginRoute = () => {
	return (
	<div className="grid-container2">
	    <Navbar/>
	    <LoginForm />
	    <Footer/>
    </div>
	)
}

export default LoginRoute