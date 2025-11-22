import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, direction = "up" }) => {
  // Define slide directions dynamically
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const animation = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1], // smoother cubic-bezier motion
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true, amount: 0.2 }}
      className="motion-section"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
