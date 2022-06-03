import React from 'react'
import { BackgroundDiv, Form,Body, Box, Btn, Text, Heading, Error } from "./style"
import { useState } from 'react';
import "./reg.css";
import Axios from 'axios';




function RegisterRoute () {
   
  const url="https://jacekjanurbackend.azurewebsites.net/users/register";
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  
  function submit(e){
    e.preventDefault();
    const data2 = {
      name: data.name,
      email: data.email,
      password:data.password,
    }
    console.log(data2);
    Axios.post(url,{data2})
    .then(res=>{
      console.log(res.data)
    })

    }
  
 function handle(e){
   const newdata={...data}
   newdata[e.target.id]=e.target.value
   setData(newdata)
   console.log(newdata)

 }
  
      
  return (
    <Body>
      <BackgroundDiv>
        <Text>Registration</Text>
          <Form onSubmit={(e)=>submit(e)}>
            <input
          
          type="text"
          id="name"
          value={data.name}
          placeholder="Name"
          onChange={(e) => handle(e)}
        />
        <input
          type="email"
          id="email"
          value={data.email}
          placeholder="Email"
          onChange={(e) => handle(e)}
        />
        <input
          type="password"
          id="password"
          value={data.password}
          placeholder="Password"
          onChange={(e) => handle(e)}
        />
        
        <button>Create</button>
      </Form>
      </BackgroundDiv>
      </Body>
        );
      }
/* username email haslo pow haslo */
export default RegisterRoute