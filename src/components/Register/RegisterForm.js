import React from 'react'
import { BackgroundDiv, Form,Body, Box, Btn, Text, Heading, Error } from "./style"
import { useState } from 'react';
import "./reg.css";
import axios from 'axios';





   
  const RegisterRoute= () =>{
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
       console.log("Response", response);
    }
  


  
      
  return (
    <BackgroundDiv>
      <h2>Add user</h2>
      <form onSubmit={handleSubmit}>
        
        <Box type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
        <Box type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Box type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        {!message &&<Btn>Add</Btn>}
        {message &&<Btn disabled>Add</Btn>}
      </form>
    </BackgroundDiv>
  );
}
/* username email haslo pow haslo */
export default RegisterRoute