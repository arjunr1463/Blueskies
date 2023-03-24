import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu({ click }) {
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="flex flex-col gap-[22px] py-[10px] px-[10px] font-mont text-black bg-[white]"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div variants={itemVariants}>
        <Link to="/" onClick={click}>
          Home
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link to="/BlueSkiesAcademy" onClick={click}>
          Blue Skies Academy
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link to="/Courses" onClick={click}>
          Courses
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link to="/Testimonial" onClick={click}>
          Testimonials
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link to="/Contactus" onClick={click}>
          Contact us
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link to="/StudentLogin" onClick={click}>
          Student Login
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
