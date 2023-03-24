import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faLayerGroup,
  faGraduationCap,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  const data = [
    {
      title: "Best Learning Experience",
      content:
        "Get the right Airline Customer Service training to explore the sky.",
      icon: faChalkboardTeacher,
    },
    {
      title: "Wide Range of Topics",
      content:
        "Our Training programs cover a wide range of topics including Personal development.",
      icon: faLayerGroup,
    },
    {
      title: "Quality Education",
      content:
        "Every Student receives a Quality and Focused Education at an affordable price.",
      icon: faGraduationCap,
    },
    {
      title: "Advanced Classroom",
      content: "Modern Classrooms with Audio-Visual Interactions.",
      icon: faTv,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-3xl font-mont tracking-tight text-gray-900 sm:text-4xl">
          Benefits of Blue Skies Academy
        </div>
        <div className="mt-4 max-w-2xl mx-auto text-center text-xl text-gray-500" ref={ref}>
          We provide the highest quality training programs to meet the needs of
          the airline and hospitality industries. Join us and take the first
          step towards a successful career.
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {data.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white flex flex-col justify-between overflow-hidden shadow rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
              animate={{
                rotateX: inView ? 0 : 90,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-blue-500 text-2xl"
                />
              </div>
              <div className="px-4">
                <div className="text-lg font-mont font-medium text-gray-900">
                  {item.title}
                </div>
                <div className="mt-2 text-sm font-open text-gray-500">
                  {item.content}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
