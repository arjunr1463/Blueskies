import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { SidebarContext } from "../../Context/Context";
import axios from "axios";

function SideBar() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { action } = useContext(SidebarContext);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/adminuser/getsingleadmin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res.data._id)
        });
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/adminuser/adminLogout`,
        message,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setMessage(res.data.message);
        navigate("/");
        console.log(res.data);
        localStorage.removeItem("token");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {action && (
        <div className="font-mont pt-2 overflow-y-scroll">
          <div className="">
            <ul className="text-[14px] md:text-[15px] w-[245px]">
              <Link
                to="admin/Dashboard"
                className={
                  activeTab === "Dashboard"
                    ? " flex gap-[10px] px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] bg-[black] "
                    : "flex  gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("Dashboard")}
              >
                <span>
                  <FiHome />
                </span>
                <span>Dashboard</span>
              </Link>
              <Link
                to="admin/AllStudent"
                className={
                  activeTab === "Allstudent"
                    ? " flex gap-[10px] px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] bg-[black] "
                    : "flex  gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("Allstudent")}
              >
                <span>
                  <FiHome />
                </span>
                <span>All Student</span>
              </Link>
              <Link
                to={`admin/Alladmin/${data}`}
                className={
                  activeTab === "Alladmin"
                    ? " flex gap-[10px] px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] bg-[black] "
                    : "flex  gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("Alladmin")}
              >
                <span>
                  <FiHome />
                </span>
                <span>All Admin</span>
              </Link>
              <Link
                to="/admin/Student"
                className={
                  activeTab === "student"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("student")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Student</span>
              </Link>
              <Link
                to="/admin/Addmaterial"
                className={
                  activeTab === "addmaterial"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("addmaterial")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Add Material</span>
              </Link>

              <Link
                to="/admin/Testimony"
                className={
                  activeTab === "testimony"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("testimony")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Testimony</span>
              </Link>
              <Link
                to="admin/Blogs"
                className={
                  activeTab === "blog"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("blog")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Blog</span>
              </Link>
              <Link
                to="/admin/Photo"
                className={
                  activeTab === "ourteam"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("ourteam")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Photos</span>
              </Link>
              <Link
                to="/admin/Video"
                className={
                  activeTab === "video"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("video")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Videos</span>
              </Link>

              <Link
                to="admin/Changepassword"
                className={
                  activeTab === "changepassword"
                    ? "bg-[black]  flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:text-white  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => handleTabClick("changepassword")}
              >
                <span>
                  <FiSettings />
                </span>
                <span>Change Password</span>
              </Link>

              <button
                className={
                  activeTab === "Dashboard"
                    ? "flex gap-[10px]  px-[35px] md:px-[40px] items-center justify-start h-[60px] text-[white] hover:bg-black hover:text-white hover:duration-500 w-full  "
                    : "flex gap-[10px] text-[white] px-[35px] md:px-[40px] items-center justify-start h-[60px]  hover:bg-black hover:text-white hover:duration-500"
                }
                onClick={() => {
                  handleLogout();
                  handleTabClick("Dashboard");
                }}
              >
                <span>
                  <BiLogOut />
                </span>
                <span>Log Out</span>
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
