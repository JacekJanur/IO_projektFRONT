import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';




const GameCommentsForm = ({game_id}) => {


  const [log, setLog] = useState("");

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
    if (user != "") { // eslint-disable-line 
        setLog(true);
    } else 
    {
        setLog(false);
    }
  }
  useEffect(()=>{
    checkCookie();
  
  
  
  }, )
  function refreshPage() {
    window.location.reload(false);
  }

	const [text, setText] = useState('');
   	const [message, setMessage] = useState(false); // eslint-disable-line no-unused-vars
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
   
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/comments/add', {"game":game_id, "token":"pbkdf2_sha256$320000$PhB9oFm2Jgw6CUMJe87326$EbnaeDqR8/PGWiLhvfZhShHNYtUWvc69tYMD8AhN5bU=", "text":text},
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
       if(response.data.status == 200){  // eslint-disable-line 
         
       		console.log("success");
       }
       else{
       		console.log(game_id);
       }

    }

	return (
		<div className="GameCommentsForm">
			<form className="comments" onSubmit={handleSubmit}>
        
		        {log===false && <input type="text" className="field" required value={text} onChange={(e)=>setText(e.target.value)} placeholder="You must log in if you want to add a comment"/>}
		        {log===true && <input type="text" className="field" required value={text} onChange={(e)=>setText(e.target.value)} placeholder="Leave a comment"/>}
		        {log===true &&<button onClick={refreshPage} className="send">Add Comment</button>}
		        
	      </form>
		</div>
	)
}

export default GameCommentsForm