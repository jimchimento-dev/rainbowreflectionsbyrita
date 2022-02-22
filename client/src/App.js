import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact/ContactComponent';
import Events from './components/Events';
import Services from './components/Services';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Cart from './components/Shop/Cart';
import CssBaseline from '@mui/material/CssBaseline';
import useShopData from './components/Shop/useShopData';
import "@stripe/stripe-js";
import './App.css';

function App() {

  const [shopItems] = useShopData();
  const [cartItems, setCartItems] = useState([]);

  const onAdd = product => {
    const exist = cartItems.find(x => x._id === product._id);
    if (exist) {
      setCartItems(cartItems.map(x => x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemove = product => {
    const exist = cartItems.find(x => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x._id !== product._id));
    } else {
      setCartItems(cartItems.map(x =>
        x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
      )
      );
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Header trackCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop onAdd={onAdd} shopItems={shopItems} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
