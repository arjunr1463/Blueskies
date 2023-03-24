import React, { useState,useEffect } from "react";
import Bg from "../../asset/Home/image3.jpg";
import Bg1 from "../../asset/Home/bannerimage2.jpg";
import CallIcon from "@mui/icons-material/Call";
import { motion } from "framer-motion";
import EnquireNow from "../EnquireNow/EnquireNow";

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

const buttonVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

function Home() {
  const [action, setAction] = useState(false);
  const [bgImage, setBgImage] = useState(Bg1);
  const handleClick = () => {
    setAction(!action);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage(bgImage === Bg1 ? Bg : Bg1);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [bgImage]);

  return (
    <div className="text-white">
      <div className="relative">
        <img
          src={bgImage}
          alt=""
          className="w-full h-[700px] blur-[1px] object-cover filter brightness-50"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0% 85%)",
          }}
        />
      </div>
      <div
        className="absolute h-[700px] inset-0 bg-gradient-to-b from-transparent to-gray-900 "
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0% 85%)",
        }}
      ></div>
      <div className="absolute top-80 flex flex-col gap-[30px] items-center  w-full font-mont font-bold">
        <motion.div
          className="flex flex-col"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-[30px] md:text-[50px] text-center text-shadow-xl ">
            Giving Wings{" "}
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              T
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              o
            </motion.span>{" "}
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              Y
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              o
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              u
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              r
            </motion.span>{" "}
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              D
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              r
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              e
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              a
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              m
            </motion.span>
            <motion.span className="text-[#EE7637]" variants={letterVariants}>
              s
            </motion.span>
          </span>
          <motion.span
            className="text-[30px] md:text-[50px] text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span variants={letterVariants}>B</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>{" "}
            <motion.span variants={letterVariants}>W</motion.span>
            <motion.span variants={letterVariants}>i</motion.span>
            <motion.span variants={letterVariants}>t</motion.span>
            <motion.span variants={letterVariants}>h</motion.span>{" "}
            <motion.span variants={letterVariants}>U</motion.span>
            <motion.span variants={letterVariants}>s</motion.span>
          </motion.span>
        </motion.div>
        <motion.div
          onClick={handleClick}
          className="bg-[#0f52ba] h-[40px] cursor-pointer w-[180px] font-mont rounded-[0.2rem] flex justify-center items-center gap-[10px]"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <span className="bg-white text-black rounded-[3rem] px-[2px] py-[2px]">
            <CallIcon />
          </span>
          <span className="text-white">Enquire Now</span>
        </motion.div>
      </div>
      {action && <EnquireNow click={handleClick} />}
    </div>
  );
}

export default Home;
