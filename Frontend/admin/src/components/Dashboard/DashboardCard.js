import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import "./Dashboard.css";

function DashBoard({ title, total, view, icon}) {
  const Total = total.props.children;
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: Total },
    config: { duration: 2000 },
  });
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="dashboard-container text-white bg-gradient-to-b from-indigo-900 to-gray-900">
      <div className="dashboard-title">
        <motion.h1
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="dashboard-title-text text-[20px] font-mont"
        >
          {typeof title === "string" &&
            title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className=""
              >
                {letter}
              </motion.span>
            ))}
        </motion.h1>
      </div>
      <div className="dashboard-stats-container">
        <div className="dashboard-total-container">
          <animated.h1 className="dashboard-total">
            {number.to((val) => val.toFixed(0))}
          </animated.h1>
          <p className="dashboard-total-label ">Total</p>
        </div>
        <div className="dashboard-view-container">
          <p className="dashboard-view font-open">{view}</p>
          <div className="dashboard-icon-container">{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
