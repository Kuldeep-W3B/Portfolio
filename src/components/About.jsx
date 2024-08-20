import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "../Images/Image.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="about-container bg-stake-100 p-8">
        <div className="about-me bg-white p-6 rounded-lg">
          <div className="text-center mb-4">
            <img
              src={Image}
              alt="Oliver Queen"
              className="about-image w-44 h-44 rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold text-blue-700 mt-4">About Me</h1>
          </div>
          <p className="text-gray-700 mb-6 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
            Hi there! I’m Kuldeep, a passionate Web and App Developer with a BCA degree 
            and over a year of hands-on experience in the tech industry. I specialize in 
            crafting dynamic websites using MERN technologies and building cross-platform 
            mobile applications with React Native. My expertise spans both frontend and 
            backend development, allowing me to create seamless and effective solutions. 
            With a solid foundation in various programming languages and a keen eye for 
            detail, I’m dedicated to delivering high-quality, user-centric digital experiences. 
            Feel free to explore my work, and don’t hesitate to reach out for any exciting 
            opportunities or collaborations. Thank you for visiting!
          </p>
          <h2 className="text-3xl font-semibold mb-4">Personal Information</h2>
          <ul className="list-none mb-6">
            <li className="mb-2">
              <strong className="font-semibold">Name:</strong> Kuldeep Singh
            </li>
            <li className="mb-2">
              <strong className="font-semibold">Nationality:</strong> India
            </li>
            <li className="mb-2">
              <strong className="font-semibold">Profession:</strong> Full Stack Developer
            </li>
            <li className="mb-2">
              <strong className="font-semibold">Phone:</strong> 9711985252
            </li>
            <li className="mb-2">
              <strong className="font-semibold">E-mail:</strong> kuldeepofficial775@gmail.com
            </li>
          </ul>

          {/* Social Links */}
          <h3 className="text-3xl font-semibold mb-4 text-left">Social Links</h3>
          <div className="flex space-x-4 text-left mb-6">
            <a
              href="https://www.instagram.com/1m____devil/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition-colors"
            >
              <i className="fab fa-instagram fa-2x"></i> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/kuldeep-singh-587842282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <i className="fab fa-linkedin fa-2x"></i> Linkedin
            </a>
            <a
              href="https://github.com/Kuldeep-W3B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <i className="fab fa-github fa-2x"></i> Github
            </a>
          </div>
          <Skills/>
        </div>
      </div>
    </>
  );
};

export default About;
