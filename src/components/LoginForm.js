import React from 'react'
import { useState } from 'react'
import { Content,BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./styleLog"
import RegisterForm from './RegisterForm.js'
import axios from 'axios';
import {  } from "react-cookie";
import { Link } from "react-router-dom";


function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue ;
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
  
  function checkCookie() {
    let user = getCookie("token");
    if (user != "") {
      return true;
    } else 
    {
      return false;
    }
    
  }
  
  
  


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);

    const handleSubmit = async (e) =>{
    e.preventDefault();
       
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/users/login', {"password":password, "email":email},
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
    
        });
         
        if(response.status == 200){
        setCookie("token",response.data.token)
        window.location.href = '/';
        };
             
    
        };
    
	return (
        
		<>
        <Content>
            <center>
            <BackgroundDiv>
                <Form onSubmit={handleSubmit}>
                    <Text>Email:</Text>
                    <Box type="text" name="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <Text>Password:</Text>
                    <Box type="password" name="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Btn type="submit">Login</Btn>

                    
                </Form>
            </BackgroundDiv>
            </center>
        </Content>
               
        </> 
        
          
	)

}

export default LoginForm