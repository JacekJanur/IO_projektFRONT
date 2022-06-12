import React from 'react'
import { useState } from 'react'
import { Form, Box, Btn, Text} from "./styleLog"
import axios from 'axios';
import {  } from "react-cookie";




  
  
  


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);
    const [log, setLog] = useState(""); 

    const handleSubmit = async (e) =>{
    e.preventDefault();
    function setCookie(cname, cvalue) {
      document.cookie = cname + "=" + cvalue ;
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
    
    function checkCookie() { // eslint-disable-line no-unused-vars
      
      let user = getCookie("token");
      if (user != "") {  // eslint-disable-line
        setLog(true);
      } else 
      {
        setLog(false);
      }
      
    }
    


    try{  
    const response = await axios.post('https://jacekjanurbackend.azurewebsites.net/users/login', {"password":password, "email":email},
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
    
        });

        if(response.status == 200){ // eslint-disable-line
          setMessage("Login passed")
          setCookie("token",response.data.token)
          window.location.href = '/';
        }else{
          setMessage(response.message);
        }
        

        
      }catch (err) {
        setMessage(err.response.data.message);
      } 
    
        };
    
	return (
        
		<>
          
            <div >
                <Form onSubmit={handleSubmit} className="login-bg">
                    <Text>Email:</Text>
                    <Box type="email" name="email" placeholder="Email" className="input" required value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <Text>Password:</Text>
                    <Box type="password" name="password" className="input" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Btn type="submit">Login</Btn>
                    <div className="message">{message ? <p className="error">{message}</p> : null}</div>

                </Form>
            </div>
            
        
               
        </> 
        
          
	)

}

export default LoginForm