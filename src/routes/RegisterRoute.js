import React from 'react'
import Navbar from '../components/NavRegister';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const RegisterRoute = () => {
	return (
	<div>
	    <Navbar/>
	    <RegisterForm />
	    <Footer/>
    </div>
	)
}

export default RegisterRoute