import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

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