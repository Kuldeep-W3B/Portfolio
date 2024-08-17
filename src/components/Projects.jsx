import React from 'react';
import Image3 from "../Images/Image 3.jpg";
import Image4 from "../Images/Image 4.jpg";
import Image5 from "../Images/Image 5.jpg";
import Image6 from "../Images/Image 6.jpg";
import Image7 from "../Images/Image 7.jpg";
import Image8 from "../Images/Image 8.jpg";
import Image9 from "../Images/Image 9.png";
import Image10 from "../Images/Image 10.jpg";

const projects = [
  {
    title: 'E-Commerce',
    description: 'This is the description for project one.',
    link: '#',
    image: Image3
  },
  {
    title: 'Chat-App',
    description: 'This is the description for project two.',
    link: '#',
    image: Image4
  },
  {
    title: 'Blog-App',
    description: 'This is the description for project two.',
    link: '#',
    image: Image5
  },
  {
    title: 'Library-Management',
    description: 'This is the description for project two.',
    link: '#',
    image: Image6
  },
  {
    title: 'Movie-Streaming',
    description: 'This is the description for project two.',
    link: '#',
    image: Image7
  },
  {
    title: 'Video-Call-App',
    description: 'This is the description for project two.',
    link: '#',
    image: Image8
  },
  {
    title: 'Accordion',
    description: 'This is the description for project two.',
    link: '#',
    image: Image9
  },
  {
    title: 'To-Do-App',
    description: 'This is the description for project two.',
    link: '#',
    image: Image10
  },
];

const ProjectCard = ({ title, description, link, image }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-40 object-cover" src={image} alt={title} />
    <div className="px-4 py-2">
      <div className="font-bold text-lg mb-2">{title}</div>
      <p className="text-gray-700 text-sm">
        {description}
      </p>
    </div>
    <div className="px-4 pt-2 pb-4">
      <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Project
      </a>
    </div>
  </div>
);
 
const Projects = () => {
  return (
    <div className="p-5">
      <div className="flex justify-center mb-5">
        <h3 className="text-3xl font-bold text-blue-700">Welcome to Projects Section</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            image={project.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
