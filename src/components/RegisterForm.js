import React from 'react'
import { BackgroundDiv,Box, Btn} from "./styleReg"
import { useState } from 'react';
import axios from 'axios';




function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
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



   
  const RegisterForm= () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);

  
  const handleSubmit = async (e) =>{
    e.preventDefault();
   
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/users/register', {"name":name, "password":password, "email":email},
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
       if(response.data.status == 200){
         setCookie("token",response.data.token)

       };
      
    

       
    }
  


  
      
  return (
    <BackgroundDiv>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        
        <Box type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
        <Box type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Box type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        {!message &&<Btn>Create account</Btn>}
        {message &&<Btn disabled>Add</Btn>}
      </form>
    </BackgroundDiv>
  );
}
/* username email haslo pow haslo */
export default RegisterForm