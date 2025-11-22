import React from "react";
import { motion } from "framer-motion";
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
    title: "E-Commerce",
    description: "An Amazon-like e-commerce website with dynamic product features.",
    link: "https://github.com/Kuldeep-W3B/E-Commerce-App.git",
    image: Image3,
  },
  {
    title: "Chat-App",
    description: "A real-time chat app similar to WhatsApp using Socket.io.",
    link: "https://github.com/Kuldeep-W3B/Chat-App.git",
    image: Image4,
  },
  {
    title: "Blog-App",
    description: "A blogging platform to share and manage your ideas online.",
    link: "https://github.com/Kuldeep-W3B/blog-app-frontend.git",
    image: Image5,
  },
  {
    title: "Library-Management",
    description: "A web app to manage and organize library book data.",
    link: "#",
    image: Image6,
  },
  {
    title: "Movie-Streaming",
    description: "A movie streaming site inspired by Netflix and Hotstar.",
    link: "#",
    image: Image7,
  },
  {
    title: "Video-Call-App",
    description: "A Zoom-like real-time video calling app.",
    link: "#",
    image: Image8,
  },
  {
    title: "Accordion",
    description: "A small notes app using accordion-style UI.",
    link: "#",
    image: Image9,
  },
  {
    title: "To-Do-App",
    description: "A simple and effective task management app.",
    link: "https://github.com/Kuldeep-W3B/To-Do-App.git",
    image: Image10,
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Project Card component
const ProjectCard = ({ title, description, link, image }) => (
  <motion.div
    variants={cardAnim}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    }}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[320px] md:w-[360px] flex flex-col"
  >
    <motion.img
      src={image}
      alt={title}
      className="w-full h-44 object-cover"
      loading="lazy"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    />
    <div className="p-5 flex flex-col flex-1">
      <h4 className="text-xl font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  </motion.div>
);

// Projects Section
const Projects = () => {
  return (
    <motion.div
      className="p-8 bg-gray-50"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold text-blue-700 text-center">
          Welcome to My Projects
        </h3>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
        variants={container}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
