import React from 'react'
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import User from './User';

const UserProfile = () => {
	let { id } = useParams();


	const [user, setUser] = useState();
	const [userDownloaded, setUserDownloaded] = useState(false);
	const [noUser, setNoUser] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        	try
        	{
		    	const data = await fetch("https://jacekjanurbackend.azurewebsites.net/users/"+id)
		    	const json = await data.json();
	    		setUser(json);
		      	 (json['id'] != undefined) ? setUserDownloaded(true) : setNoUser(true)
			}
			catch{
				setNoUser(true)
			}
		    
		  }
	  	fetchData()
     }, []);


	return (
		<div className="user-cont">
			{userDownloaded && <User data={user} />}
			{noUser && <div className="no-user">No user found</div>}
		</div>
	)
}

export default UserProfile