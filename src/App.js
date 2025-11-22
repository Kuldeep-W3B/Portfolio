import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Projects from "./components/Projects.jsx";
import SectionWrapper from './components/SectionWrapper.jsx';  

const App = () => { 
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <SectionWrapper>
          <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <Home />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div id="about" className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <About />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper direction="right">
  <div id="projects" className="min-h-screen flex justify-center items-center">
    <Projects />
  </div>
</SectionWrapper>


        <SectionWrapper>
          <div id="contact" className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-full">
              <Contact />
            </div>
          </div>
        </SectionWrapper>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
