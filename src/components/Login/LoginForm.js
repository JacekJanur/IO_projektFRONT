import React from 'react'
import { BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./style"
const LoginForm = () => {
	return (
		<>
                <Heading>Login</Heading>
               <BackgroundDiv>
                   <Form>
                        <Text>Username:</Text>
                        <Box type="text" name="username" placeholder="Username"  />
                        <Text>Password:</Text>
                        <Box type="password" name="password" placeholder="Password" />
                        <Btn type="submit">Login</Btn>
                   </Form>
               </BackgroundDiv>
        </>      
	)
}
/* email haslo */
export default LoginForm