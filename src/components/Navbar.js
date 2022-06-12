import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


const Navbar = () => {
    
    const [log, setLog] = useState("");
    const [str, setStr] = useState("");
    
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') { // eslint-disable-line
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) { // eslint-disable-line 
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function checkCookie() {
        let user = getCookie("token");
<<<<<<< HEAD
        if (user != "") { // eslint-disable-line
=======
        if (user != "") {
>>>>>>> 5f2a302b69683055db5ce917cd5d81ba3c6efd82
            setLog(true);

        } else 
        {
            setLog(false);
        }
    }

    function removeCookie(cname){
        document.cookie = cname + " = ; expires = Thu , 01 Jan 1970 00:00:00 GMT";
        document.cookie = cname + '=; Max-Age=0; path=/; domain=' + window.location.host;
        window.location.href="/";
      }
  
    useEffect(()=>{
        checkCookie();
        
    }, )
    
   
    const handleSubmit = () =>{
         window.location.href="/search/" + str;
        
    };



	return (
        
	   <nav>
           <div className="search">
                    <input type="text" name="searchBar" id="searchBar" required value={str} onChange={(e)=>setStr(e.target.value)}/>
                    <button type="button" className="sButton" onClick={handleSubmit}>Search</button>
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