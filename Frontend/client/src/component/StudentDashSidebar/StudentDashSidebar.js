import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { TbFileCertificate } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import axios from "axios";

function DashSideBar({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };
  useEffect(() => {
    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
      setActiveTab(activeTab);
    }
  }, []);

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/getSinglestudent`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res.data);
          
        });
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/user/studentlogout`,
        message,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setMessage(res.data.message);
        localStorage.removeItem("token");
        navigate("/StudentLogin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex flex-col border-r-[1px] font-mont border-t-[1px] border-b-[1px] border-l-[1px] shadow-sm">
      <div className="border-b-[1px] h-[50px] px-[10px] flex items-center">
        <h className="font-bold  text-[20px]">My Profile</h>
      </div>
      <div className="flex flex-col  gap-[10px] border-t-[1px]">
        <ul className="tabs">
          <Link
            to="/StudentDashBoard"
            className={
              activeTab === "Dashboard"
                ? "bg-gradient-to-r from-gray-700 to-gray-900  text-white flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px]"
                : "flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px] hover:bg-gray-900 hover:text-white hover:duration-500"
            }
            onClick={() => handleTabClick("Dashboard")}
          >
            <span>
              <AiOutlineDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to={`/Material/${data.course}`}
            
            className={
              activeTab === "Material"
                ? "bg-gradient-to-r from-gray-700 to-gray-900  text-white flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px]"
                : "flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px] hover:bg-gray-900 hover:text-white hover:duration-500"
            }
            onClick={() => handleTabClick("Material")}
          >
            <span>
              <RiBookOpenLine />
            </span>
            <span>Material</span>
          </Link>
          <Link
            to="/Certificate"
            
            className={
              activeTab === "certificate"
                ? "bg-gradient-to-r from-gray-700 to-gray-900  text-white flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px]"
                : "flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px] hover:bg-gray-900 hover:text-white hover:duration-500"
            }
            onClick={() => handleTabClick("certificate")}
          >
            <span >
              <TbFileCertificate />
            </span>
            <span>Certificate</span>
          </Link>
          <Link
            to="/Changepassword"
            className={
              activeTab === "changepassword"
                ? "bg-gradient-to-r from-gray-700 to-gray-900  text-white flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px]"
                : "flex gap-[15px] px-[20px] items-center justify-start h-[40px] border-b-[1px] hover:bg-gray-900 hover:text-white hover:duration-500"
            }
            onClick={() => handleTabClick("changepassword")}
          >
            <span>
              <RiLockPasswordLine />
            </span>
            <span>Change Password</span>
          </Link>
          <button
            onClick={() => {
              handleLogout();
              handleTabClick("Dashboard");
            }}
            className="flex gap-[15px] px-[20px] items-center justify-start w-full h-[40px]  hover:bg-gray-900 hover:text-white hover:duration-500"
          >
            <span>
              <VscSignOut />
            </span>
            <span>Sign Out</span>
          </button>
        </ul>
        <div className="tab-content">{children}</div>
      </div>
    </div>
  );
}

export default DashSideBar;
