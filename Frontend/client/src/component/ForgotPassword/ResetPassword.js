import React, { useState } from "react";
import model from "../../asset/Banner/image20.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import Banner from "../Banner/ResetPassword";
import Scroll from "../ScrollToTop/ScrollToTop";

function ResetPassword() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmpassword(e.target.value);
  };
  const handleSubmit = () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/user/register/resetToken/${id}`,
          {
            password: password,
            confirmpassword: confirmpassword,
          }
        )
        .then((res) => {
          setSuccess(res.data.message);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setPassword("");
          setConfirmpassword("");
        })
        .catch((error) => {
          setError(error.response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Scroll />
      <Banner />
      <div className="gap-[50px] w-full h-full lg:h-[700px] flex flex-col items-center lg:flex-row  lg:gap-[20px] lg:justify-center py-[50px] md:py-[130px] lg:items-start  px-[10px]">
        {/*left */}
        <div className="px-[15px]  lg:px-0  flex ">
          <img
            src={model}
            alt=""
            className="lg:h-[300px] lg:w-[500px] md:h-[450px] md:w-[700px] sm:w-[550px] sm:h-[320px] w-[95vw] h-full object-cover"
          />
        </div>
        {/*Right */}
        <div className="flex flex-col gap-[20px]  lg:gap-5  border-[#d6dbe0] px-4 lg:w-[600px]  md:w-[700px] sm:w-[550px] w-[95vw]">
          <div className="flex justify-start items-center break-normal ">
            <h className="text-[30px] sm:text-[35px] text-[#EE7637] text-center font-mont font bold ">
              Reset Password
            </h>
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[20px]">
            <div>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                placeholder="Enter the password"
                className="w-full h-[50px] px-[20px] outline-none border-[1px] border-[#d6dbe0] rounded-[0.4rem] text-[20px] input"
              />
            </div>
            <div>
              <input
                value={confirmpassword}
                onChange={handleChangeConfirmPassword}
                type="password"
                placeholder="Enter the confirm password"
                className="w-full font-roboto h-[50px] px-[20px] outline-none border-[1px] border-[#d6dbe0] rounded-[0.4rem] text-[20px] input"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="">
              <button
                onClick={handleSubmit}
                className="bg-[#EE7637] flex justify-center items-center w-full rounded-[0.4rem] h-[45px] cursor-pointer hover:bg-gradient-to-b from-orange-500 to-orange-600 text-white font-mont text-[20px]"
              >
                Submit
              </button>
            </div>
            <div className="text-[red] flex justify-center text-center font-fair text-[14px] md:text-[16px]">
              {success}
            </div>
            <div className="text-[red] flex justify-center text-center font-fair text-[14px] md:text-[16px]">
              {error}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
