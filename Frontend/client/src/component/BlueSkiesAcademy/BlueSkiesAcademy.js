import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import image1 from "../../asset/Academy/about1.jpg";
import image2 from "../../asset/Academy/about2.jpg";
import image3 from "../../asset/Academy/about3.jpg";
import image4 from "../../asset/Academy/about3.jpg";
import Benefits from "../Benefits/Benefits";

function BlueSkiesAcademy() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: true });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-[50px]">
        <div className="text-center  text-3xl sm:text-5xl font-mont mb-10 tracking-wide">
          Welcome to BlueSkies Academy
        </div>
        <p className="text-[#001742] font-roboto text-lg mb-10">
          The training courses provided by BlueSkies Academy mentor and provide
          the knowledge and abilities you need to thrive in this brand-new,
          fast-changing environment.
        </p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <motion.div
              ref={ref1}
              className="rounded-lg overflow-hidden shadow-lg relative"
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image1}
                alt="about1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-white text-lg font-semibold mb-2 text-shadow-2xl drop-shadow-2xl">
                  Airline Customer Service Skills
                </div>
                <p className="text-gray-300 text-shadow-2xl drop-shadow-2xl">
                  Learn how to provide top-notch customer service in the airline
                  industry.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <motion.div
              ref={ref2}
              className="rounded-lg overflow-hidden shadow-lg relative"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image2}
                alt="about2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-white text-xl font-semibold mb-2 text-shadow-2xl drop-shadow-2xl">
                  Personal Development
                </div>
                <p className="text-gray-300 text-shadow-2xl drop-shadow-2xl">
                  Grow as an individual and reach your full potential.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <motion.div
              ref={ref3}
              className="rounded-lg overflow-hidden shadow-lg relative"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image3}
                alt="about3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-white text-xl font-semibold mb-2 text-shadow-2xl drop-shadow-2xl">
                  Our Programs
                </div>
                <p className="text-gray-300 text-shadow-2xl drop-shadow-2xl">
                  Explore our courses and discover your passion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col lg:flex-row py-10 md:py-16 gap-10 px-4 xl:px-24">
        <div className="flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mont text-blue-900 lg:hidden">
            Our Mission
          </h1>
          <motion.div
            initial="hidden"
            ref={ref4}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="w-full h-auto"
          >
            <img
              src={image4}
              alt="Blue Skies Academy"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        <div className="lg:max-w-3xl flex flex-col gap-6 md:gap-8">
          <h1 className="hidden lg:block text-4xl md:text-5xl font-bold font-mont text-blue-900">
            Our Mission
          </h1>
          <div className="text-left">
            <p className="font-lato text-lg md:text-xl tracking-wide text-gray-700 leading-7">
              By following world-class standards in training, we aim to help
              every student acquire professional competence and achieve higher
              presentation standards.
            </p>
            <p className="font-lato text-lg md:text-xl tracking-wide text-gray-700 leading-7">
              Our vision is to inform, educate, and encourage people to achieve
              their professional goals.
            </p>
          </div>
        </div>
      </div>
      {/*Benefits */}
      <Benefits />
    </div>
  );
}

export default BlueSkiesAcademy;
