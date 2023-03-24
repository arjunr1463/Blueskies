import React, { useState, useEffect, useCallback } from "react";
import EditStudent from "./EditStudent";
import { AiTwotoneEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
function ViewStudent() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [action, setAction] = useState(false);
  const [coursestartdate, setCourseStartDate] = useState([]);
  const [courseenddate, setCourseEndDate] = useState([]);
  const handleClick = () => {
    setAction(!action);
  };
  const fetchData = useCallback(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/user/getSinglestudent/admin/${id}`
      )
      .then((res) => {
        setData(res.data);
        setImage(res.data.image.data.data);
        setCourseStartDate(
          new Date(res.data.coursestart.slice(0, 10)).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        );
        setCourseEndDate( new Date(res.data.courseend.slice(0, 10)).toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
      );
      });
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {action ? (
        <div>
          <EditStudent click={handleClick} />
        </div>
      ) : (
        <div className="flex flex-col gap-[30px] p-6">
          <div className="flex items-center gap-[20px]">
            <h className="font-mont font-bold text-[18px] md:text-[22px]">
              Student Profile
            </h>
            <button
              onClick={handleClick}
              className="text-[22px] bg-indigo-700 px-[10px] text-white py-[5px] rounded-[0.2rem]"
            >
              <AiTwotoneEdit />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 ">
            <div className="flex flex-col  w-full">
              <div className="flex border-b-[1px] py-[8px] border-t-[1px] md:items-center gap-[5px] md:gap-0">
                <label
                  htmlFor="name"
                  className=" text-gray-800 font-mont w-[150px]"
                >
                  Name:
                </label>
                <span className="font-open ">{data.name}</span>
              </div>

              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="course"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Course:
                </label>
                <span className="font-open ">{data.course}</span>
              </div>

              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="contactNumber"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Contact Number:
                </label>
                <span className="font-open ">{data.mobile}</span>
              </div>

              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="email"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Email:
                </label>
                <span className="font-open ">{data.email}</span>
              </div>
              <div className="flex border-b-[1px] py-[8px] md:items-center  gap-[5px]">
                <label
                  htmlFor="address"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Address:
                </label>
                <span className="max-w-[180px] break-all lg:max-w-[400px] font-open">
                  {data.address}
                </span>
              </div>

              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="qualification"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Qualification:
                </label>
                <span className="font-open ">{data.qualification}</span>
              </div>

              <div className="flex lg:border-b-[1px] py-[8px] md:items-center ">
                <label
                  htmlFor="certified"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Certified:
                </label>
                <span className="font-open ">{data.certified}</span>
              </div>
            </div>
            <div className="flex flex-col  w-full">
              <div className="flex border-b-[1px] py-[8px] border-t-[1px] md:items-center gap-[5px]">
                <label
                  htmlFor="courseFee"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Course Fee:
                </label>
                <span className="font-open ">{data.coursefee}</span>
              </div>
              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="paymentType"
                  className=" text-gray-800 font-mont w-[150px]"
                >
                  Payment Type:
                </label>
                <span className="font-open ">{data.paymenttype}</span>
              </div>
              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="courseStartDate"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Course Start Date:
                </label>
                <span className="font-open ">{coursestartdate}</span>
              </div>
              <div className="flex border-b-[1px] py-[8px] md:items-center gap-[5px]">
                <label
                  htmlFor="courseEndDate"
                  className=" text-gray-800 font-mont w-[150px]"
                >
                  Course End Date:
                </label>
                <span className="font-open ">{courseenddate}</span>
              </div>
              <div className="flex flex-col border-b-[1px] py-[8px]  gap-[5px]">
                <label
                  htmlFor="studentPhoto"
                  className="  text-gray-800 font-mont w-[150px]"
                >
                  Student Photo:
                </label>
                <img
                  src={`data:image/*;base64,${btoa(
                    new Uint8Array(image).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                    )
                  )}`}
                  alt=""
                  className="h-[150px] w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewStudent;
