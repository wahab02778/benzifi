import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events'; // Import your page components
import AboutUs from './pages/AboutUs';
import Features from './pages/Features.js';
import Gears from './pages/Gears';
import Benzifi from './pages/benzifi.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route index element={<Benzifi />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/gears" element={<Gears />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
