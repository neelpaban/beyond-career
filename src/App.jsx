import React, { useEffect } from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once: true = animate only once
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
