import React from 'react';
import Image from "../Images/Image.jpg";
import Spin from "./Spin";

const About = () => {
  return (
    <div className="about-container bg-stake-100 p-8">
      <div className="about-me bg-white p-6 rounded-lg">
        <img 
          src={Image}
          alt="Oliver Queen"
          className="about-image w-44 h-44 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-700 ">About Me</h1>
        <p className="text-gray-700 mb-6 text-center">
          Hello! I'm Kuldeep.I have grduation degree of BCA.I am Web and App Developer with over 1 years of experience.
          <br />
          I use Mern technologies for Website Development and I use React Native for App.I Having an in-depth knowledge
          <br />
          of Programming Languages.Strong background in Frontend and Backend.for more Information Hire me,Thank you.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <ul className="list-none mb-6">
          <li className="mb-2">
            <strong className="font-semibold">Name:</strong> Kuldeep
          </li>
          <li className="mb-2">
            <strong className="font-semibold">Nationality:</strong> India
          </li>
          <li className="mb-2">
            <strong className="font-semibold">Phone:</strong> 9711985252
          </li>
          <li className="mb-2">
            <strong className="font-semibold">E-mail:</strong> kuldeepofficial775@gmail.com
          </li>
        </ul>
        <div className="skills-spin-container flex justify-between items-start mb-6">
          <div className="skills w-2/3">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <ul className="list-disc list-inside">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>TailwindCss</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Git</li>
              <li>Redux</li>
              <li>ReactJs & NextJs</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="spin-container w-1/3 flex justify-center">
            <Spin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
