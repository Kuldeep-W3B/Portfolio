import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen); 
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the slider when a link is clicked
    }
  };

  return (
    <nav className="bg-state-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-2xl font-bold text-blue-700" href="/">MyPort</a>
        <div className="hidden md:flex space-x-4">
          <Link onClick={() => scrollToSection('header')} className="text-lg hover:underline underline-offset-8 font-bold text-slate-900 hover:text-blue-700" to="/">Home</Link>
          <Link onClick={() => scrollToSection('about')} className="text-lg hover:underline underline-offset-8 font-bold text-slate-900 hover:text-blue-700" to="/about">About</Link>
          <Link onClick={() => scrollToSection('projects')} className="text-lg hover:underline underline-offset-8 font-bold text-slate-900 hover:text-blue-700" to="/projects">Projects</Link>
          <Link onClick={() => scrollToSection('contact')} className="text-lg hover:underline underline-offset-8 font-bold text-slate-900 hover:text-blue-700" to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSlider} className="text-2xl text-blue-700">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 bg-opacity-75 flex flex-col items-start space-y-4 p-4 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link onClick={() => scrollToSection('header')} className="text-lg font-bold text-white" to="/">Home</Link>
        <Link onClick={() => scrollToSection('about')} className="text-lg font-bold text-white" to="/about">About</Link>
        <Link onClick={() => scrollToSection('projects')} className="text-lg font-bold text-white" to="/projects">Projects</Link>
        <Link onClick={() => scrollToSection('contact')} className="text-lg font-bold text-white" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
