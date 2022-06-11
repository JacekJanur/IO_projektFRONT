import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const Navbar = () => {
    
    const [log, setLog] = useState("");
    
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function checkCookie() {
        let user = getCookie("token");
        if (user != "") {
            setLog(true);
        } else 
        {
            setLog(false);
        }
    }

    function removeCookie(cname){
        document.cookie = cname + " = ; expires = Thu , 01 Jan 1970 00:00:00 GMT";
        console.log("usunieto");
        window.location.href="/";
      }
  
      useEffect(()=>{
        checkCookie();
        
        
        
    }, [])
    
   
	return (
        
	   <nav>
           <div className="search">
              
            <input type="text" name="searchBar" id="searchBar" placeholder="what game you want to find"/>
           </div>
            
            <div className="logowanie">
            <Link to="/">Home</Link>
            {log===false &&<Link to="/login">Login</Link>}   
            {log===false &&<Link to="/register">Sign Up</Link> }
            {log===true&&<button className="logout" onClick={()=>{removeCookie("token")}}>Logout</button>}
            </div>
        </nav>
	)
  
}

export default Navbar