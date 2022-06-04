import React from 'react'
import Navbar from '../components/Register/NavRegister';
import Footer from '../components/Footer';
import RegisterForm from '../components/Register/RegisterForm';

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