import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MdCall } from "react-icons/md";
import axios from "axios";

function Contactus() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/contactus/createDetails`,
        form
      )
      .then((res) => {
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSuccess(res.data);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      })
      .catch((error) => {
        setError(error.response.data);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };
  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-[20px] py-[100px] ">
      <div className="w-full max-w-md  py-[20px]  px-[20px] bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <div className="mb-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center flex flex-col gap-[15px]">
            <button
              type="submit"
              className="px-4 font-mont py-2 hover:bg-gradient-to-b from-orange-500 to-orange-600 bg-[#EE7637] text-white rounded-md "
            >
              Send Message
            </button>
            {success && (
              <div className="text-[red] py-[20px] font-roboto text-[14px]">
                {success}
              </div>
            )}
            {error && (
              <div className="text-[red] text-[14px] font-roboto flex justify-center">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-col px-[10px]">
        <iframe
          title="Map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G6F2+XQX,%20C%20Achutha%20Menon%20Rd,%20West%20Fort,%20Asvary%20Nagar,%20Sreenagar%20Colony,%20Thrissur,%20Kerala%20680011+(Myframe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="h-[300px] w-full "
        />
        <div className="flex px-[20px] sm:px-0 sm:justify-center pt-[100px] lg:pt-[60px] pb-[20px] font-mont">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]  w-full">
            <div className="flex items-center gap-[15px] bg-[#1e3a8a] text-white shadow-md py-[10px] px-[10px]">
              <span className=" bg-[white]  rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
                <LocationOnIcon style={{ fontSize: "30px" }} />
              </span>
              <div className="flex flex-col gap-[5px] ">
                <span className="text-[14px]">Location</span>
                <span className="text-[11px] max-w-[180px]">
                  2nd FLOOR, AL ANSARI COMPLEX WESTFORT, THRISSUR-680004
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px] hover:bg-[#1e3a8a] duration-500 hover:text-white shadow-md py-[10px] px-[10px]">
              <span className=" bg-[white] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
                <MdCall style={{ fontSize: "30px" }} />
              </span>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px]">GIVE US A CALL</span>
                <span className="text-[12px] md:text-[13px]">
                  +91 9544311199
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px] hover:bg-[#1e3a8a] duration-500 hover:text-white shadow-md py-[10px] px-[10px]">
              <span className="bg-[white] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
                <EmailIcon style={{ fontSize: "30px" }} />
              </span>
              <div class="flex flex-col gap-[5px]">
                <span class="text-[14px]">Email</span>
                <a
                  href="mailto:info@blueskiesacademy.com"
                  class="text-[12px] md:text-[13px] break-all"
                >
                  info@blueskiesacademy.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-[15px] hover:bg-[#1e3a8a] duration-500 hover:text-white shadow-md py-[10px] px-[10px]">
              <span className=" bg-[white] rounded-[3rem] text-black px-[15px] py-[15px] flex items-center">
                <AccessTimeIcon style={{ fontSize: "30px" }} />
              </span>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px]">Business Hours</span>
                <span className="text-[12px] md:text-[13px]">
                  Mon - Fri 8 AM - 6 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
