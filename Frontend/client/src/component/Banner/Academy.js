import React from "react";
import Bg from "../../asset/Home/image3.jpg";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function Academy() {
  return (
    <div className="text-white">
      <div className="relative">
        <img
          src={Bg}
          alt=""
          className="w-full h-[500px] object-cover blur-[1px] filter brightness-50 contrast-125"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0% 90%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0% 90%)",
          }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center"></div>
        </div>
      </div>
      <div className="absolute top-60 flex flex-col gap-[30px] items-center  w-full font-mont font-bold">
        <motion.div
          className="flex flex-col"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-[30px] md:text-[50px] text-center">
            <motion.span className="text-[white]" variants={letterVariants}>
              A
            </motion.span>
            <motion.span className="text-[white]" variants={letterVariants}>
              B
            </motion.span>
            <motion.span className="text-[white]" variants={letterVariants}>
              O
            </motion.span>
            <motion.span className="text-[white]" variants={letterVariants}>
              U
            </motion.span>
            <motion.span className="text-[white]" variants={letterVariants}>
              T
            </motion.span>{" "}
            <motion.span className="text-[white]" variants={letterVariants}>
              U
            </motion.span>
            <motion.span className="text-[white]" variants={letterVariants}>
              S
            </motion.span>
          </span>
          <motion.span
            className="text-[16px] font-mont text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span variants={letterVariants}>H</motion.span>
            <motion.span variants={letterVariants}>o</motion.span>
            <motion.span variants={letterVariants}>m</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>{" "}
            <motion.span className="text-[#EF834B]" variants={letterVariants}>/</motion.span>{" "}
            <motion.span className="text-[#EF834B]" variants={letterVariants}>A</motion.span>
            <motion.span className="text-[#EF834B]" variants={letterVariants}>b</motion.span>
            <motion.span className="text-[#EF834B]" variants={letterVariants}>o</motion.span>
            <motion.span className="text-[#EF834B]" variants={letterVariants}>u</motion.span>
            <motion.span className="text-[#EF834B]" variants={letterVariants}>t</motion.span>{" "}
            <motion.span className="text-[#EF834B]" variants={letterVariants}>u</motion.span>
            <motion.span className="text-[#EF834B]" variants={letterVariants}>s</motion.span>
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default Academy;
