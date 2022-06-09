import styled from 'styled-components'
export const Body = styled.button`

width:100%;
height:90vh;


`
export const BackgroundDiv = styled.div`
  border: 1px solid black;
  width: 30vw;
  text-align: center;
  display: block;
  margin: auto;
  height: 39rem;
  background-color: white;
  margin-top:100px;
  margin-bottom:100px;
`

export const Form = styled.form`
  
  padding: 20px;
  
`

export const Box = styled.input`
  display: block;
  width: 15vw;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 2rem;
  textAlignVertical:center;
  margin-left:115px;
  position:flex;
  justify-content:center;
 
  
`

export const Btn = styled.button`
  background-color: #1E88E5;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 30px 2px;
  cursor: pointer;
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`

export const Text = styled.p`
  font-size: 3rem;
  color: black;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 8rem;
  color: white;
  font-family: 'Bangers', cursive; 
  padding: 0.3rem;   
`

export const Error = styled.span`
  color: red;
`
