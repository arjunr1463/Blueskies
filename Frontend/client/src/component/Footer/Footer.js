import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MdCall } from "react-icons/md";
import Logo from "../../asset/Logo/Logo1.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/createnewsletter`, {
        email: email,
      })
      .then((res) => {
        setEmail("");
        setSuccess(res.data);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      });
  };
  return (
    <div className="bg-[#001742]  text-white  ">
      <div className="flex px-[20px] sm:px-0 sm:justify-center pt-[100px] lg:pt-[60px] pb-[20px] border-b-[1px] border-black font-mont">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[30px] ">
          <div className="flex items-center gap-[15px]">
            <span className=" bg-[#EE7637] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
              <MdCall style={{ fontSize: "30px" }} />
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="md:text-[18px]">GIVE US A CALL</span>
              <span className="text-[12px] md:text-[13px]">+91 9544311199</span>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <span className="bg-[#EE7637] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
              <EmailIcon style={{ fontSize: "30px" }} />
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="md:text-[18px]">Send Us A Message</span>
              <a
                href="mailto:info@blueskiesacademy.com"
                class="text-[12px] md:text-[13px] break-all"
              >
                info@blueskiesacademy.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <span className=" bg-[#EE7637] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
              <LocationOnIcon style={{ fontSize: "30px" }} />
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="md:text-[18px]">Location</span>
              <span className="text-[11px] max-w-[180px]">
                2nd FLOOR, AL ANSARI COMPLEX WESTFORT, THRISSUR-680004
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <span className=" bg-[#EE7637] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
              <AccessTimeIcon style={{ fontSize: "30px" }} />
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="md:text-[18px]">Business Hours</span>
              <span className="text-[12px] md:text-[13px]">
                Mon - Fri 8 AM - 6 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-[10px]  py-[40px] gap-[50px] lg:gap-0 lg:justify-around border-b-[1px] border-black">
        {/*Left */}
        <div className=" flex flex-col gap-[20px] ">
          <div>
            <img
              src={Logo}
              alt=""
              className="h-[80px] sm:h-[150px] md:h-[200px] lg:h-[100px]"
            />
          </div>
          <div className="flex xsmall:flex-col mob:flex-row gap-[15px]">
            <a
              href="http://www.instagram.com/theblueskiesacademy"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #833AB4, #FD1D1D)",
                }}
                className="text-white px-[8px] py-[8px] rounded-[3rem]"
              >
                <InstagramIcon style={{ fontSize: "30px" }} />
              </div>
            </a>

            <a
              href="http://www.facebook.com/TheBlueskiesAcademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#3B5998] text-white px-[8px] py-[8px] rounded-[3rem]">
                <FacebookIcon style={{ fontSize: "30px" }} />
              </div>
            </a>

            <a
              href="http://www.twitter.com/blueskiesacdmy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#1DA1F2] text-white px-[8px] py-[8px] rounded-[3rem]">
                <TwitterIcon style={{ fontSize: "30px" }} />
              </div>
            </a>

            <a
              href="http://www.linkedin.com/company/theblueskiesacademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#0077B5] text-white px-[8px] py-[8px] rounded-[3rem]">
                <LinkedInIcon style={{ fontSize: "30px" }} />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@theblueskiesacademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#FF0000] text-white px-[8px] py-[8px] rounded-[3rem]">
                <YouTubeIcon style={{ fontSize: "30px" }} />
              </div>
            </a>
          </div>
        </div>
        {/*Center */}
        <div className="flex flex-col gap-[10px] font-mont">
          <div>
            <h className="font-mont font-bold text-[20px]">Quick Links</h>
          </div>
          <div className="flex text-[14px] md:text-[16px] gap-[30px]">
            <div className="flex flex-col gap-[15px] ">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/BlueSkiesAcademy">Blue Skies Academy</Link>
              </div>
              <div>
                <Link to="/Courses">Courses</Link>
              </div>
              <div>
                <Link to="/Testimonial">Testimonials</Link>
              </div>
            </div>

            <div className="flex flex-col gap-[15px] ">
              <div>
                <Link to="/OurBlogs">Our Blogs</Link>
              </div>
              <div>
                <Link to="/Gallery/Photo">Photos</Link>
              </div>
              <div>
                <Link to="/Gallery/Video">Videos</Link>
              </div>

              <div>
                <Link to="/Contactus">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="flex flex-col gap-[20px]">
          <div>
            <h className="font-mont font-bold text-[20px]">Newsletter</h>
          </div>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
              className="px-[10px] h-12 text-[black] rounded-[0.1rem] outline-none font-open"
            />
            <span
              onClick={handleSubmit}
              className="bg-[#0f52ba] cursor-pointer flex justify-center items-center px-[10px] text-[25px]"
            >
              <AiOutlineSend />
            </span>
          </div>
          <div className="text-[white] font-mont px-[10px]">{success}</div>
        </div>
      </div>
      <div className="py-[20px] text-center font-roboto text-[13px] md:text-[14px] flex justify-end px-[50px]">
        <span>
          Blueskies Academy © 2023 All Rights Reserved. Powered by SQUAD MIND
        </span>
      </div>
    </div>
  );
}

export default Footer;
