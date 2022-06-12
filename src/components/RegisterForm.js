import React from 'react'
import { Form, Box, Btn, Text} from "./styleLog"
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
    while (c.charAt(0) == ' ') { // eslint-disable-line
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) { // eslint-disable-line
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
   try{
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/users/register', {"name":name, "password":password, "email":email},
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
       if(response.data.status == 200){ // eslint-disable-line
        window.location.href = '/';
        setMessage("user created successfully")
         setCookie("token",response.data.token)

       }else{
        setMessage(response.data.message);
       }
      
    

       
    }catch (err) {
      setMessage(err.response.data.message);
    }
  }
  


  
      
  return (
    <div >
      <Form onSubmit={handleSubmit} className="login-bg">
        <Text>Name:</Text>
        <Box type="text" required value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <Text>Email:</Text>
        <Box type="email" required value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <Text>Password:</Text>
        <Box type="password" required value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        
        <Btn>Create account</Btn>
        
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </div>
  );
}
/* username email haslo pow haslo */
export default RegisterForm