import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>     
    </>
  );
}

export default App;