import React, { useContext } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";
import { useNavigate } from "react-router";
import { SidebarContext } from "../../Context/Context";

function NavBar() {
  const navigate = useNavigate();
  const { handleClick, action } = useContext(SidebarContext);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" px-5 bg-white py-4 z-[1000] shadow-md"
    >
      <div className="flex gap-[50px] text-[25px] justify-between md:justify-start items-center">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          src={Logo}
          alt="Logo"
          className="h-[65px] w-[150px] object-cover hidden md:flex"
          onClick={() => navigate("/admin/Dashboard")}
        />
        {action ? (
          <button onClick={handleClick}>
            <BsToggle2On />
          </button>
        ) : (
          <button onClick={handleClick}>
            <BsToggle2Off />
          </button>
        )}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          src={Logo}
          alt="Logo"
          className="h-[50px] w-[120px] flex md:hidden"
          onClick={() => navigate("/admin/Dashboard")}
        />
      </div>
    </motion.nav>
  );
}

export default NavBar;
