import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Certificate() {
  const [certificate, setCertificate] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/getcoursecertificate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCertificate(res.data.certificates);
          console.log(res.data.certificates);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="border-[1px] bg-gray-50 h-[500px] overflow-y-scroll flex flex-col gap-[50px] font-mont pb-[50px]">
      <div className="bg-white px-[20px] py-[10px]  border-b-[1px] ">
        <h className="font-bold text-[22px] text-gray-800">
          Course Certificate
        </h>
      </div>

      {certificate[0] ? (
        <ul className="px-[20px] flex flex-col gap-[20px] ">
          {certificate.map((material, index) => (
            <motion.li
              key={index}
              className="flex justify-between items-center gap-[15px] py-2 px-4 bg-white rounded-md shadow-md  hover:bg-gray-100 "
              whileTap={{ scale: 0.97 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-gray-800 font-mont text-sm">
                {material.name}
              </span>

              <a
                href={`data:${
                  material.contentType
                };base64,${material.data}`}
                download={material.name}
                className="text-sm md:text-lg font-mont font-bold text-blue-500 hover:text-blue-600 transition duration-300 cursor-pointer ease-in-out"
              >
                Download
              </a>
            </motion.li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-full">
          <motion.span
            className="font-mont text-[20px] text-center text-gray-600"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            Course completion required for access
          </motion.span>
        </div>
      )}
    </div>
  );
}
export default Certificate;
