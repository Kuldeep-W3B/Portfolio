import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiRust,
  SiMysql,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <h3 className="text-3xl font-semibold mb-4 text-left">Skills</h3>
          <div className="skills-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center">
              <FaHtml5 className="text-orange-500 text-3xl mr-2" />
              <span>HTML5</span>
            </div>
            <div className="flex items-center">
              <FaCss3Alt className="text-blue-500 text-3xl mr-2" />
              <span>CSS3</span>
            </div>
            <div className="flex items-center">
              <SiBootstrap className="text-purple-600 text-3xl mr-2" />
              <span>Bootstrap</span>
            </div>
            <div className="flex items-center">
              <FaJs className="text-yellow-500 text-3xl mr-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center">
              <FaReact className="text-blue-400 text-3xl mr-2" />
              <span>ReactJS</span>
            </div>
            <div className="flex items-center">
              <SiAngular className="text-red-600 text-3xl mr-2" />
              <span>Angular</span>
            </div>
            <div className="flex items-center">
              <SiNextdotjs className="text-black text-3xl mr-2" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center">
              <SiTailwindcss className="text-cyan-400 text-3xl mr-2" />
              <span>TailwindCSS</span>
            </div>
            <div className="flex items-center">
              <FaNodeJs className="text-green-600 text-3xl mr-2" />
              <span>NodeJS</span>
            </div>
            <div className="flex items-center">
              <SiExpress className="text-gray-500 text-3xl mr-2" />
              <span>Express.js</span>
            </div>
            <div className="flex items-center">
              <FaDatabase className="text-green-500 text-3xl mr-2" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center">
              <SiMysql className="text-blue-800 text-3xl mr-2" />
              <span>SQL</span>
            </div>
            <div className="flex items-center">
              <FaPython className="text-blue-500 text-3xl mr-2" />
              <span>Python</span>
            </div>
            <div className="flex items-center">
              <SiRust className="text-orange-500 text-3xl mr-2" />
              <span>Rust</span>
            </div>
            <div className="flex items-center">
              <SiTypescript className="text-blue-600 text-3xl mr-2" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <FaReact className="text-blue-400 text-3xl mr-2" />
              <span>React Native</span>
            </div>
            <div className="flex items-center">
              <FaGitAlt className="text-red-500 text-3xl mr-2" />
              <span>Git</span>
            </div>
          </div>
    </>
  )
}

export default Skills;