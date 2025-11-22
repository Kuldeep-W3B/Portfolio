import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "../Images/Image.jpg";
import Skills from "./Skills";

const About = () => {
  // Container for staggered animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Item animation (for text, headings, etc.)
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Image animation
  const imageAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  // Social icons animation
  const iconAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      className="about-container bg-gray-50 p-8 flex justify-center items-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="about-me bg-white shadow-2xl p-8 rounded-2xl max-w-4xl w-full"
        variants={item}
      >
        {/* Profile Image */}
        <motion.div className="text-center mb-8" variants={item}>
          <motion.img
            src={Image}
            alt="Kuldeep Singh"
            className="about-image w-44 h-44 rounded-full mx-auto shadow-lg"
            variants={imageAnim}
          />
          <motion.h1
            className="text-4xl font-bold text-blue-700 mt-6"
            variants={item}
          >
            About Me
          </motion.h1>
        </motion.div>

        {/* About Paragraph */}
        <motion.p
          className="text-gray-700 mb-10 text-justify text-base sm:text-lg md:text-xl leading-relaxed"
          variants={item}
        >
          Hi there! I’m <strong>Kuldeep</strong>, a passionate Web and App Developer with a
          BCA degree and over a year of hands-on experience in the tech industry.
          I specialize in crafting dynamic websites using <strong>MERN technologies</strong>
          and building cross-platform mobile applications with
          <strong> React Native</strong>. My expertise spans both frontend and backend
          development, allowing me to create seamless and effective solutions.
          I’m dedicated to delivering high-quality, user-centric digital experiences.
          Feel free to explore my work and reach out for any exciting collaborations!
        </motion.p>

        {/* Personal Info */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Personal Information
          </h2>
          <ul className="list-none mb-8 text-gray-800 text-lg space-y-2">
            <li>
              <strong>Name:</strong> Kuldeep Singh
            </li>
            <li>
              <strong>Nationality:</strong> India
            </li>
            <li>
              <strong>Profession:</strong> Full Stack Developer
            </li>
            <li>
              <strong>Phone:</strong> 9711985252
            </li>
            <li>
              <strong>Email:</strong> kuldeepofficial775@gmail.com
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item}>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600 text-left">
            Social Links
          </h3>
          <div className="flex flex-wrap gap-6 text-left">
            {[
              {
                href: "https://www.instagram.com/1m____devil/?hl=en",
                icon: "fab fa-instagram",
                color: "text-pink-500 hover:text-pink-700",
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/kuldeep-singh-587842282/",
                icon: "fab fa-linkedin",
                color: "text-blue-700 hover:text-blue-900",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/Kuldeep-W3B",
                icon: "fab fa-github",
                color: "text-gray-700 hover:text-black",
                label: "GitHub",
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} flex items-center gap-2 text-lg transition-all duration-300`}
                custom={i}
                variants={iconAnim}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${link.icon} fa-2x`}></i>
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mt-10" variants={item}>
          <Skills />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
