import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

function VideoTable() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/Gallery/getVideos`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Gallery/getVideos`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (key) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/Gallery/admin/deletevideo/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        fetchUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filter=data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={
        data[0]
          ? "overflow-x-scroll scroll h-[600px] p-6"
          : "overflow-x-scroll scroll p-6"
      }
    >
      <div className="flex flex-col gap-[30px]">
        <span className="font-mont font-bold text-[22px]">View Videos</span>
        <table className="">
          <thead className="border-[1px] ">
            <tr className=" ">
              <th className="border-[1px] h-[50px] w-[100px]">SI</th>
              <th className="border-[1px] h-[50px] w-[120px] ">Video</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Status</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((data, key) => (
              <>
                {data.videos ? (
                  <tr className="">
                    <td className="border-[1px] text-center px-[50px]">
                      {key + 1}
                    </td>
                    <td className="border-[1px]  py-[20px] px-[20px]">
                      <div className="flex justify-center">
                        <ReactPlayer
                          url={data.videos}
                          width="300px"
                          height="100px"
                        />
                      </div>
                    </td>
                    <td className="border-[1px] px-[50px] ">
                     <span className="flex justify-center">
                     {data.videostatus}
                     </span>
                    </td>
                    <td className="border-[1px] px-[50px] ">
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleDelete(data._id)}
                          className="text-[20px] "
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            ))}
          </tbody>

          <thead className="border-[1px]">
            <tr className=" ">
              <th className="border-[1px] h-[50px] w-[80px]">SI</th>
              <th className="border-[1px] h-[50px]  ">Video</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Status</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </motion.div>
  );
}

export default VideoTable;
