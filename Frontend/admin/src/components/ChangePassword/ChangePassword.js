import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function ChangePassword() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/adminuser/changepassword`,
        {
          oldpassword: oldPassword,
          newpassword: newPassword,
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
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  return (
    <div className="p-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white  mb-4"
        >
          <h2 className="text-2xl font-mont font-bold mb-4">Change Password</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont mb-2"
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
          <div className="mb-6">
            <label
              className="block text-gray-700 font-mont mb-2"
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
          <div className="flex flex-col gap-[10px]">
            <button
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-mont font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
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
