import React from "react";
import Card from "./DashboardCard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  const [totalstudents, setTotalstudents] = useState([]);
  const [totaltestimony, setTotaltestimony] = useState([]);
  const [totalBlog, setTotalBlog] = useState([]);
  const fetchTotalModel = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/getAllstudent`
    );
    setTotalstudents(response.data.length);
  };

  const fetchTotalBlog = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/Blog/createblog`
    );
    setTotalBlog(response.data.length);
  };

  const fetchtotaltestimonyStory = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/Tetsimony/getAllTestimony`)
      .then((res) => {
        setTotaltestimony(res.data.length);
      });
  };

  useEffect(() => {
    fetchTotalModel();
    fetchtotaltestimonyStory();
    fetchTotalBlog();
  }, []);

  const data = [
    {
      title: "Total Students",
      total: <div>{totalstudents}</div>,
      view: <Link to="/admin/AllStudent">View Students</Link>,
      icon: <PersonAddAlt1Icon />,
      bgColor: "bg-[#ff5370]",
    },

    {
      title: "Total Testimony",
      total: <div>{totaltestimony}</div>,
      view: <Link to="/admin/Testimony">View Testimony</Link>,
      icon: <AutoStoriesIcon />,
      bgColor: "bg-[#2ed8b6]",
    },
    {
      title: "Total Blog",
      total: <div>{totalBlog}</div>,
      view: <Link to="/admin/Blogs">View Blog</Link>,
      icon: <MenuIcon />,
      bgColor: "bg-[#ffb64d]",
    },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="p-6 sm:px-[100px] md:px-[10px] lg:px-[10px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]"
    >
      {data.map((card) => (
        <div className="">
          <Card
            style={card.bgColor}
            title={card.title}
            total={card.total}
            view={card.view}
            icon={card.icon}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default Dashboard;
