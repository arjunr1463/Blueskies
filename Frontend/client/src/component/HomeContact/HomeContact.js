import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

function HomeContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/createDetails`, form)
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setForm({
            name: "",
            email: "",
            phone: "",
          });
        }, 10);
        setTimeout(() => {
          setIsSubmitted(false);
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
    <div
      className="flex flex-col gap-10 lg:flex-row bg-gradient-to-br from-[#0396fe] to-[#001742] py-20 lg:py-32 px-10 lg:px-0 items-center justify-center mb-10 lg:mb-20"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0% 85%)",
      }}
    >
      <div className="text-center lg:text-left max-w-xl">
        <h2 className="text-4xl lg:text-6xl font-bold  text-white mb-6">
          Join Us & Stay Tuned!
        </h2>
        <p className="text-lg text-white font-light">
          We support you as you establish the discipline of ongoing learning.
          You can be your own accomplishment with our help.
        </p>
      </div>
      <motion.form
        ref={ref}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border-2 border-white w-full lg:w-1/2 h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border-2 border-white w-full lg:w-1/2 h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border-2 border-white w-full h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none"
            required
          />
        </div>
        {isSubmitted ? (
          <p className="text-white">Thanks for your message!</p>
        ) : (
          <button
            type="submit"
            className="bg-[#EE7637] py-3 px-6 font-mont font-bold text-[#001742] rounded-md shadow-md hover:bg-gradient-to-b from-orange-500 to-orange-600 transition duration-300"
          >
            Send a Message
          </button>
        )}
        {error && (
          <div className="text-[red] text-[14px] font-roboto flex justify-center">
            {error}
          </div>
        )}
      </motion.form>
    </div>
  );
}

export default HomeContact;
