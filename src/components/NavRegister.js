import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    
	return (
         
		<div className="item1">
        
        {/* <Link to="/">Home</Link> |{" "} */}
       
       
       <div className="search">
          
        <input type="text" name="searchBar" id="searchBar" placeholder="what game you want to find"/>
       </div>
      
       <div className="logowanie">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        </div>
        </div>
	)
}

export default Navbar