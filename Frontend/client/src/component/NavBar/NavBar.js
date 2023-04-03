import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Logo1 from "../../asset/Logo/Logo1.png";
import { CgMenuRight } from "react-icons/cg";
import Menu from "../Menu/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const navigate = useNavigate();
  const [action, setAction] = useState(false);
  const handleClickMenu = () => {
    setAction(!action);
  };
  return (
    <div className="flex flex-col text-white drop-shadow-2xl">
      <div className="hidden md:flex  justify-around py-[20px] border-b-[1px] border-white/10">
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <span className=" text-[#EE7637] flex items-center">
              <LocationOnIcon style={{ fontSize: "18px" }} />
            </span>
            <span className="font-mont md:text-[10px] lg:text-[12px] md:max-w-[200px] lg:max-w-[450px]">
              2nd FLOOR, AL ANSARI COMPLEX WESTFORT, THRISSUR-680004
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-[#EE7637] flex items-center">
              <EmailIcon style={{ fontSize: "18px" }} />
            </span>
            <a
              href="mailto:info@blueskiesacademy.com"
              class="text-[12px] md:text-[13px] font-mont break-all"
            >
              info@blueskiesacademy.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className=" text-[#EE7637] flex items-center">
            <AccessTimeIcon style={{ fontSize: "18px" }} />
          </span>
          <span className="font-mont md:text-[12px] lg:text-[13px]">
            Business hours:
          </span>
          <span className="font-mont md:text-[12px] lg:text-[13px]">
            Mon - Fri 8 AM - 6 PM
          </span>
        </div>
      </div>
      <div className="hidden lg:flex items-center  justify-around py-[20px] font-mont">
        {/* Left*/}
        <div>
          <img
            onClick={() => navigate("/")}
            src={Logo1}
            alt=""
            className="cursor-pointer lg:h-[80px] xl:h-[100px]"
          />
        </div>
        {/* Center */}
        <div className="flex lg:text-[15px] xl:text-[16px] items-center gap-[20px]">
          <div className="flex lg:gap-[15px] xl:gap-[25px]">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/BlueSkiesAcademy"
              className="nav-link"
              activeClassName="active"
            >
              Blue Skies Academy
            </NavLink>

            <NavLink
              to="/Courses"
              className="nav-link"
              activeClassName="active"
            >
              Courses
            </NavLink>
            <NavLink
              to="/Testimonial"
              className="nav-link"
              activeClassName="active"
            >
              Testimonials
            </NavLink>

            
            <NavLink
              to="/Contactus"
              className="nav-link"
              activeClassName="active"
            >
              Contact us
            </NavLink>
            <NavLink
              to="/StudentLogin"
              className="nav-link"
              activeClassName="active"
            >
              Student Login
            </NavLink>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-[40px] text-[#EE7637]">
              <MdCall />
            </span>
            <span>+91 9544311199</span>
          </div>
        </div>
      </div>
      {/*Medium */}
      <div className="flex lg:hidden justify-between py-[10px] px-[10px]">
        <div>
          <img
            onClick={() => navigate("/")}
            src={Logo1}
            alt=""
            className="h-[60px] cursor-pointer"
          />
        </div>
        <div onClick={handleClickMenu} className="text-[40px] text-[#EE7637]">
          <CgMenuRight />
        </div>
      </div>
      {action && (
        <div className="">
          <Menu click={handleClickMenu} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
