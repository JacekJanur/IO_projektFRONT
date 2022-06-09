import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

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
        console.log("do");
    }, [])

	return (
        
		<nav>
        
        {/* <Link to="/">Home</Link> |{" "} */}
       <div className="image">'</div>
       
       <div className="search">
          
        <input type="text" name="searchBar" id="searchBar" placeholder="what game you want to find"/>
       </div>
        <div className="navmenu">
        <ul>

            <li><Link to="">Games</Link>
            <ul>
                <li><Link to="">RPG</Link></li>
                <li><Link to="">ACTION</Link></li>
                <li><Link to="">STRATEGY</Link></li>
                <li><Link to="">SHOOTER</Link></li>
                <li><Link to="">SURVIVAL</Link></li>
                <li><Link to="">ADVENTURE</Link></li>
            </ul>
            </li>
        </ul>
        </div>
        
        <Link to="/">Home</Link>
        {log===false &&<Link to="/login">Login</Link>}   
        {log===false &&<Link to="/register">Sign Up</Link> }
        {log===true&&<button onClick={()=>{removeCookie("token")}}>Logout</button>}
        
        
        </nav>
	)
}

export default Navbar