import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Projects from "./components/Projects.jsx";

const App = () => { 

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <Home />
            </div>
          </div>
          <div id="about" className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <About />
            </div>
          </div>
          <div id="projects" className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <Projects />
            </div>
          </div>
          <div id="contact" className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <Contact />
            </div>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
