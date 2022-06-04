import React from 'react'
import { Content,BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./style"
const LoginForm = () => {
	return (
        
		<>
        <Content>
            <center>
            <BackgroundDiv>
                <Form>
                    <Text>Username:</Text>
                    <Box type="text" name="username" placeholder="Username"  />
                    <Text>Password:</Text>
                    <Box type="password" name="password" placeholder="Password" />
                    <Btn type="submit">Login</Btn>
                </Form>
            </BackgroundDiv>
            </center>
        </Content>
               
        </> 
          
	)
}
/* email haslo */
export default LoginForm