import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from "./Pages/Logowanie";
import About from "./Pages/Rejestracja";



function App() {
  return (
    <div>
     <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
