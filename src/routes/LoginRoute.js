import React from 'react'
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const LoginRoute = () => {
	return (
	<div className="login-cont">
	    <Navbar/>
	    <LoginForm />
    </div>
	)
}

export default LoginRoute