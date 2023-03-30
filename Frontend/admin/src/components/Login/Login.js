import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Bg from "../../assets/image3.jpg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

function LoginForm() {
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/adminuser/login`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("admin/Dashboard");
          console.log(res.data);
        })
        .catch((error) => {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } catch (error) {
      setLoginError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden ">
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
      <div className="relative z-10 flex justify-center items-center h-full  px-[10px]">
        <div className="flex flex-col bg-gray-200 w-[300px] lg:w-[450px] shadow-md rounded-lg py-8">
          <div className="mb-6 text-center">
            <img src={Logo} alt="" className="h-12 mx-auto" />
            <h2 className="text-2xl font-bold font-mont text-gray-800">
              Login
            </h2>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email required"),
              password: Yup.string().required("Password required"),
            })}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full px-[20px] gap-[10px]">
                <div className="flex items-center">
                  <div className="  px-3 py-3">
                    <FaEnvelope className="text-blue-400 text-[20px] " />
                  </div>
                  <div className="w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full border-[1px] border-gray-300 px-4 py-2 rounded-[0.2rem] focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 font-fair text-[12px]"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" px-3 py-3">
                    <FaLock className="text-blue-400 text-[20px]" />
                  </div>
                  <div className="w-full">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="w-full border-[1px] border-gray-300 px-4 py-2 rounded-[0.2rem] focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500  font-fair text-[12px]"
                    />
                  </div>
                </div>
                {loginError && (
                  <div className="text-red-500  font-fair text-[12px]">
                    Incorrect email or password.
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-blue-500 font-semibold font-fair text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <span className="text-[14px] flex justify-center text-[red] font-roboto">
                  {error}
                </span>
                <div className="flex justify-end pt-[20px]">
                  <Link to="/create/adminuser" className="underline font-mont">
                    New Admin?
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

export default LoginForm;
