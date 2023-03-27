import React from "react";
import { motion } from "framer-motion";
import image from "../../asset/Banner/image1.jpg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Academy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      className="flex flex-col lg:flex-row py-10 md:pt-16 md:pb-[100px] gap-10 px-4 xl:px-24"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <motion.div
        className="flex flex-col gap-6 md:gap-12"
        variants={imageVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold font-mont text-blue-900 lg:hidden">
          Blue Skies Academy
        </h1>
        <div className="">
          <motion.img
            src={image}
            alt="Blue Skies Academy"
            className="w-full lg:w-[120vw] xl:w-[35vw] h-auto object-cover filter contrast-120"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          />
        </div>
      </motion.div>
      <motion.div
        className="lg:max-w-3xl flex flex-col gap-6 md:gap-8"
        variants={textVariants}
      >
        <h1 className="hidden lg:block text-4xl md:text-4xl font-bold font-mont text-blue-900">
          Blue Skies Academy
        </h1>
        <p className="font-open text-md md:text-lg tracking-wide text-gray-700 leading-7">
          Blue Skies Academy offers training courses that mentor and teach the skills you need to succeed in this brand-new, rapidly evolving environment. We create and provide unique programs for both personal and professional growth.
        </p>
        <div>
          <Link
            to="/BlueSkiesAcademy"
            className="bg-blue-600 hover:bg-blue-700 text-white font-mont text-lg md:text-xl px-8 py-3"
          >
            About Us
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Academy;
