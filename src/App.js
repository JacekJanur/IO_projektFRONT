import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Profile from "./Pages/Logowanie";
import About from "./Pages/Rejestracja";



function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/rejestracja" element={<About />} />
        <Route path="/logowanie" element={<Profile />} />
      </Routes>
      <Content/>
      <Footer/>
    </Router>
  );
}

export default App;
