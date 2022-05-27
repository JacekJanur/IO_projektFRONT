import React from 'react'
import { BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./style"





const RegisterRoute = () => {
	return (
		<>
			 <Heading>Register</Heading>
                <BackgroundDiv>
                    <Form>
                        <Text>Username:</Text>
                        <Box type="text" name="username" placeholder="Username" />
                        <Text>Password:</Text>
                        <Box type="password" name="password" placeholder="Password"  />
                        <Text>Email:</Text>
                        <Box type="email" name="email" placeholder="Email"  />
                        <Btn type="submit" >Create Account</Btn>
                        
                    </Form>
                </BackgroundDiv>
		</>
	)
}
/* username email haslo pow haslo */
export default RegisterRoute