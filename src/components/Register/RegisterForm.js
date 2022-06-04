import React from 'react'
import { BackgroundDiv, Form,Body, Box, Btn, Text, Heading, Error } from "./style"
import { useState } from 'react';
import "./reg.css";






   
  const RegisterRoute= () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [message, setMessage] = useState(false);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const dane = {name, email, password};
    setMessage(true);
    fetch('https://jacekjanurbackend.azurewebsites.net/users/register',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(dane)
    }).then(() => {
      console.log('new user added');
      setMessage(false);
    })
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