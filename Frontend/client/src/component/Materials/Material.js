import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import "./Material.css";
import { MdDelete } from "react-icons/md";

function StudyMaterials() {
  const [materials, setMaterials] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchMaterials() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user/getStudymaterial/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMaterials(res.data.studyMaterials);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMaterials();
  }, [id]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/getStudymaterial/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMaterials(res.data.studyMaterials);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickDelete = (key) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/user/studymaterial/delete/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => fetchData());
  };

  return (
    <div className="border-[1px] bg-gray-50 h-[500px] overflow-y-scroll flex flex-col gap-[50px] font-mont pb-[50px]">
      <div className="bg-white px-[20px] py-[10px]  border-b-[1px] ">
        <h className="font-bold text-[22px] text-gray-800">Study Material</h>
      </div>

      {materials[0] ? (
        <ul className="px-[20px] flex flex-col gap-[20px] ">
          {materials.map((material, index) => (
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

              <div className="flex gap-[20px]  md:gap-[50px] items-center">
                <a
                  href={`data:${
                    material.contentType
                  };base64,${material.data.toString("base64")}`}
                  download={material.name}
                  className="text-sm md:text-lg font-mont font-bold text-blue-500 hover:text-blue-600 transition duration-300 cursor-pointer ease-in-out"
                >
                  Download
                </a>
                <span
                  onClick={() => handleClickDelete(material.id)}
                  className="text-[22px] cursor-pointer"
                >
                  <MdDelete />
                </span>
              </div>
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
            We will provide you the materials soon
          </motion.span>
        </div>
      )}
    </div>
  );
}

export default StudyMaterials;
