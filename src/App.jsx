import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Rentals from './components/Rentals';
import MarketPrices from './components/MarketPrices';
import Workers from './components/Workers';
import News from './components/News';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
