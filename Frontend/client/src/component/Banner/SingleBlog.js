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
function OurBlogs({ title, date }) {
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
          <span className="text-[20px] md:text-[30px] text-center">
            {title}
          </span>
          <div className="flex gap-[5px] justify-center">
            <span className="text-[14px]">Created at: </span>
            <span className="text-[14px] text-[#EF834B] ">{date}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurBlogs;
