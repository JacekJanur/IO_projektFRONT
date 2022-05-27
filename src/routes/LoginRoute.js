import React from 'react'
import Navbar from '../components/Login/NavLogin';
import Footer from '../components/Footer';
import LoginForm from '../components/Login/LoginForm';

const LoginRoute = () => {
	return (
	<div>
	    <Navbar/>
	    <LoginForm />
	    <Footer/>
    </div>
	)
}

export default LoginRoute