import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact/ContactComponent';
import Events from './components/Events';
import Services from './components/Services';
import Shop from './components/Shop';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
