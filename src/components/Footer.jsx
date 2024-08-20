import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 QuickCoder. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/1m____devil/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-700 transition-colors">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/kuldeep-singh-587842282/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-900 transition-colors">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/Kuldeep-W3B" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
