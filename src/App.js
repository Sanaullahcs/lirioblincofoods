import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Product from '../src/pages/Product';
import Certifications from '../src/pages/Certifications';
import Contact from '../src/pages/Contact';
import Footer from '../src/components/Footer'; // Import Footer

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Footer will appear on all pages */}
      </div>
    </Router>
  );
};

export default App;
