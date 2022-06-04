import React from 'react'
import Navbar from '../components/Login/NavLogin';
import Footer from '../components/Footer';
import CommentForm from '../components/Comments';



const CommentsRoute = () => {
	return (
	<div>
	    <Navbar/>
	    <CommentForm />
	    <Footer/>
    </div>
	)
}

export default CommentsRoute