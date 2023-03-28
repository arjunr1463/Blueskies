import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  const [student, setStudent] = useState([]);
  const [image, setImage] = useState([]);

  const fetchData = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/getSinglestudent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStudent(res.data);
        setImage(res.data.image.data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} className="border-[1px] p-6 flex flex-col items-center font-mont py-[50px]">
      <motion.div  initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }} className="w-full flex flex-col gap-[30px]">
        <motion.div   initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }} className="flex flex-col lg:flex-row">
          <motion.div  initial={{ rotate: -360 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 2 }} className="flex  items-center justify-center">
            <img
              src={`data:image/*;base64,${btoa(
                new Uint8Array(image).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`}
              alt={student.name}
              className="w-32 h-32 rounded-full object-cover border-2 border-black"
            />
          </motion.div>
          <div className="text-center lg:text-left  ml-4">
            <h1 className="text-2xl  text-center text-gray-600 font-bold mb-2">
              {student.name}
            </h1>
            <div className="">
              <span className="text-gray-600 ">Student ID:</span>
              <span className="text-gray-600 ml-2 font-bold">
                {student.studentid}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div  initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }} className="flex flex-col gap-2">
          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start  py-2 border-b-[1px] border-t-[1px] ">
            <span className="text-gray-600 font-bold md:w-[140px]">Email:</span>
            <span className="text-gray-800 mob:w-[150px] md:w-full">{student.email}</span>
          </div>
          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start py-2 border-b-[1px]">
            <span className="text-gray-600 font-bold md:w-[140px]">Mobile:</span>
            <span className="text-gray-800 mob:w-[150px] md:w-full ">{student.mobile}</span>
          </div>
          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start py-2 border-b-[1px]">
            <span className="text-gray-600 font-bold md:w-[140px]">Course:</span>
            <span className="text-gray-800 mob:w-[150px] md:w-full">{student.course}</span>
          </div>
          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start py-2 border-b-[1px]">
            <span className="text-gray-600 font-bold md:w-[140px]">
              Qualification:
            </span>
            <span className="text-gray-800 mob:w-[150px] md:w-full">{student.qualification}</span>
          </div>

          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start  py-2 border-b-[1px]">
            <span className="text-gray-600 font-bold md:w-[120px]">Address:</span>
            <span className="text-gray-800  break-all md:break-normal mob:w-[150px] md:max-w-[300px] lg:max-w-[400px]">
              {student.address}
            </span>
          </div>
          <div className="mob:text-[14px] md:text-[16px] text-gray-600 flex mob:justify-between md:justify-start py-2 ">
            <span className="text-gray-600 font-bold md:w-[140px]">
              Certified:
            </span>
            <span className="text-gray-800 mob:w-[150px] md:w-full">{student.certified}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StudentDashboard;
