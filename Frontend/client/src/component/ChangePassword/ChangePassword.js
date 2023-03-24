import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function ChangePassword() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "newConfirmPassword") {
      setNewConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/user/changepassword`,
        {
          oldpassword: oldPassword,
          newpassword: newPassword,
          newconfirmpassword: newConfirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setSuccess(res.data);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
        navigate("/StudentLogin");
      })
      .catch((error) => {
        console.log(error.response.data)
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };
  return (
    <div className="border-[1px]  flex flex-col gap-[50px] font-mont  pb-[50px]">
      <div className="border-b-[1px] px-[10px] h-[50px] flex items-center">
        <h className="font-bold text-[22px]">Change Password</h>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="px-[10px] flex flex-col gap-[15px] ">
          <div className="">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="oldPassword"
            >
              Old Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="newConfirmPassword"
            >
              Confirm Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="newConfirmPassword"
              value={newConfirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <button
              className="bg-gradient-to-r from-gray-700 to-gray-900 w-[150px]  text-white font-mont font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <span className="text-[14px] text-[red] font-roboto">
              {success}
            </span>
            <span className="text-[14px] text-[red] font-roboto">{error}</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
