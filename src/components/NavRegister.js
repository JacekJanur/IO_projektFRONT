import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    
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
        <Link to="/login">Login</Link>
        
        </nav>
	)
}

export default Navbar