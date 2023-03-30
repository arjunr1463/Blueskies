import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock, FaUser, FaMobileAlt } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import Bg from "../../assets/image3.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminUser() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/adminuser/create`, {
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          password: values.password,
          issuperadmin: values.issuperadmin,
        })
        .then((res) => {
          setSuccess(res.data.message);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          navigate("/");
        })
        .catch((error) => {
          setError(error.response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
        style={{ mixBlendMode: "multiply" }}
      />
      <img
        src={Bg}
        alt=""
        className="absolute inset-0 object-cover w-full h-full blur-sm"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
      <div className="relative z-10 flex justify-center items-center h-full px-[10px]">
        <div className="flex flex-col bg-gray-200 shadow-md w-[300px] lg:w-[450px] rounded-lg p-8">
          <div className="mb-6 text-center">
            <img src={Logo} alt="" className="h-12 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              mobile: "",
              issuperadmin: false,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Full name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
              mobile: Yup.string().required("Mobile number is required"),
            })}
            onSubmit={handleLogin}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="  px-3 py-3">
                      <FaUser className="text-blue-400 text-[20px]" />
                    </div>
                    <div className="w-full">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 border rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400"
                      />

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 mt-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className=" px-3 py-3">
                      <FaEnvelope className="text-blue-400 text-[20px]" />
                    </div>
                    <div className="w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400"
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 mt-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className=" px-3 py-3">
                      <FaMobileAlt className="text-blue-400 text-[20px] " />
                    </div>
                    <div className="w-full">
                      <Field
                        type="text"
                        name="mobile"
                        placeholder="Mobile"
                        className="w-full px-4 py-3 border rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400"
                      />

                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-red-500 mt-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className=" px-3 py-3">
                      <FaLock className="text-blue-400 text-[20px]" />
                    </div>
                    <div className="w-full">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 mt-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="issuperadmin"
                  className="flex items-center mt-4"
                >
                  <Field
                    type="checkbox"
                    id="issuperadmin"
                    name="issuperadmin"
                    className="mr-2 h-[15px] w-[15px]"
                  />
                  <span className="text-[16px] font-mont font-bold text-gray-800">
                    Super admin
                  </span>
                </label>
                <div className="flex items-center gap-[5px] justify-center">
                  <button className="bg-[#60a5fa] rounded-sm text-white font-mont px-[30px] py-[5px]">
                    Sign Up
                  </button>
                  <div className="text-[12px] text-[red] font-roboto">
                    <span>{success}</span>
                    <span>{error}</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link className="underline font-mont" to="/">
                    {" "}
                    Back to Login
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default AdminUser;
