import React, { useState } from "react";
import Logo from "../../asset/Logo/Logo.png";
import Bg from "../../asset/Home/enquire.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";

function EnquireNow({ click }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name should be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
  });
  const initialValues = { name: "", email: "", phone: "" };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-900 bg-opacity-50  px-[10px]  z-[999] flex justify-center items-center fixed top-0   w-full h-full"
    >
      <div className="bg-white rounded-[0.2rem]  relative flex flex-col gap-[20px] px-[20px] py-[20px]">
        <span
          className=" absolute top-2 right-2 text-black text-[22px] cursor-pointer "
          onClick={click}
        >
          <AiOutlineClose />
        </span>
        <div className="flex justify-center">
          <img src={Logo} alt="" className="h-[70px] md:h-[100px]" />
        </div>
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex justify-center">
            <img
              src={Bg}
              alt=""
              className="h-[150px] md:h-[200px] rounded-[0.4rem]"
            />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              axios
                .post(
                  `${process.env.REACT_APP_API_URL}/api/createDetails`,
                  values
                )
                .then((res) => {
                  resetForm();
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
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-6 max-w-sm">
                <div className="flex flex-col lg:flex-row  gap-4">
                  <div className="flex flex-col ">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className={`border-2 border-white flex w-full h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none ${
                        errors.name && touched.name ? "border-red-500" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm font-medium"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className={`border-2 border-white flex w-full h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm font-medium"
                    />
                  </div>
                </div>
                <div>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className={`border-2 border-white w-full h-12 px-4 rounded-md shadow-md text-lg text-[#001742] outline-none ${
                      errors.phone && touched.phone ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#EE7637] font-mont py-3 px-6 font-bold text-[#001742] rounded-md shadow-md hover:bg-gradient-to-b from-orange-500 to-orange-600 transition duration-300"
                >
                  Send a Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {success && (
          <div className="text-[red] text-[14px] font-roboto flex justify-center">
            {success}
          </div>
        )}
        {error && (
          <div className="text-[red] text-[14px] font-roboto flex justify-center">
            {error}
          </div>
        )}
        <span className="flex justify-center text-black font-roboto text-center text-[12px] md:text-[16px]">
          Thank You! Our dedicated team will contact you soon.
        </span>
      </div>
    </motion.div>
  );
}

export default EnquireNow;
