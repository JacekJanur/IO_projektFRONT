import React from 'react'
import { useState } from 'react';
import { BackgroundDiv,Box, Btn} from "./styleReg"
import axios from 'axios';


const GameCommentsForm = ({game_id}) => {

	const [text, setText] = useState('');
   	const [message, setMessage] = useState(false);
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
   
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/comments/add', {"game":game_id, "token":"pbkdf2_sha256$320000$PhB9oFm2Jgw6CUMJe87326$EbnaeDqR8/PGWiLhvfZhShHNYtUWvc69tYMD8AhN5bU=", "text":text},
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
       if(response.data.status == 200){
         
       		console.log("łoś");
       }
       else{
       		console.log(game_id);
       }

    }

	return (
		<div className="GameCommentsForm">
			<form className="comments" onSubmit={handleSubmit}>
        
		        <input type="text" className="field" required value={text} onChange={(e)=>setText(e.target.value)} placeholder="Leave a comment"/>
		        
		        {!message &&<button className="send">Add Comment</button>}
		        {message &&<Btn disabled>Add</Btn>}
	      </form>
		</div>
	)
}

export default GameCommentsForm