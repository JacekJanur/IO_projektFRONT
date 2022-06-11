import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';





function App() {
  return (
    
    <div className="grid-container">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
