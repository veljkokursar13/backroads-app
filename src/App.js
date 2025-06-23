import React, { useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';



function App() {
  useEffect(() => {
    const handleLink = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleLink));
    return () =>
      links.forEach((link) => link.removeEventListener('click', handleLink));
  }, []);

  return (
     <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
