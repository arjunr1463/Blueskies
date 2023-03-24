import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

function PhotoTable() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/Gallery/getImages/`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Gallery/getImages/`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/Gallery/admin/deleteimage/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        fetchUser();
      });
  };

  const filter = data.sort((a, b) => {
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
        data.length === 5
          ? "overflow-x-scroll scroll h-[600px] p-6"
          : "overflow-x-scroll scroll p-6"
      }
    >
      <div className="flex flex-col gap-[30px]">
        <span className="font-mont font-bold text-[22px]">View Images</span>
        <table className="">
          <thead className="border-[1px] ">
            <tr className=" ">
              <th className="border-[1px] h-[50px] w-[100px]">SI</th>
              <th className="border-[1px] h-[50px] w-[150px]">Image</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Status</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((datas, key) => (
              <tr className="" key={datas.id}>
                <td className="border-[1px] px-[50px] ">
                  <span className="flex justify-center">{key + 1}</span>
                </td>
                <td className="border-[1px]  py-[5px] px-[20px]">
                  <div className="w-[200px] md:w-full ">
                    <img
                      src={`data:image/*;base64,${btoa(
                        new Uint8Array(
                          datas.image ? datas.image.data.data : ""
                        ).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                        )
                      )}`}
                      alt=""
                      className="h-[100px] w-full"
                    />
                  </div>
                </td>
                <td className="border-[1px] px-[50px]  ">
                  <span className="flex justify-center">
                    {datas.imagestatus}
                  </span>
                </td>
                <td
                  className="border-[1px] px-[50px] "
                  onClick={() => handleDelete(datas._id)}
                >
                  <span className="flex justify-center">
                    <MdDelete className="text-[20px] hover:text-[red] cursor-pointer" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <thead className="border-[1px]">
            <tr className=" ">
              <th className="border-[1px] h-[50px] w-[100px]">SI</th>
              <th className="border-[1px] h-[50px]  ">Image</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Status</th>
              <th className="border-[1px] h-[50px]  w-[150px]">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </motion.div>
  );
}
export default PhotoTable;
