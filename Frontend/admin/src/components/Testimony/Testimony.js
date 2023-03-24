import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

function Testimony() {
  const [error, setError] = useState([]);
  const [success, setSuccss] = useState([]);
  const [fullname, setFullname] = useState("");
  const [imageName, setImageName] = useState("Choose files to upload");
  const [course, setcourse] = useState("");
  const [placed, setPlaced] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);
  const [discription, setDiscription] = useState("");

  const handleChangeName = (e) => {
    setFullname(e.target.value);
  };
  const handleChangecourse = (e) => {
    setcourse(e.target.value);
  };
  const handleChangePlaced = (e) => {
    setPlaced(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const maxSize = 1024 * 1024 * 1.5;

    if (!file) {
      alert("Please select an image!");
      return;
    }

    if (file.size > maxSize) {
      alert("File is too large! Maximum size is 1MB.");
      return;
    }

    setImage(file);
    setImageName(file.name);

    e.target.value = null;
  };

  const handleChangeContent = (value) => {
    setDiscription(value);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: [1, 2, 3, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["link", "image", "video"],
    ],

    clipboard: {
      matchVisual: false,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fullname);
    formData.append("coursedetail", course);
    formData.append("image", image);
    formData.append("placed", placed);
    formData.append("year", year);
    formData.append("description", discription);
    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/Testimony/createTestimony`,
          formData
        )
        .then((res) => {
          setSuccss(res.data);
          setTimeout(() => {
            setSuccss("");
          }, 3000);
          setFullname("");
          setcourse("");
          setPlaced("");
          setYear("");
          setDiscription("");
          setImageName("Choose files to upload");
          setImage(null);
        })
        .then(() => window.location.reload());
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 font-roboto ">
      <div className="flex flex-col gap-[20px]">
        <h className="font-bold font-mont text-[18px] md:text-[22px] ">
          Add testimony details
        </h>
        <div className="border-b-[2px] w-[150px] "></div>

        <div>
          <input
            onChange={handleChangeName}
            value={fullname}
            type="text"
            placeholder="Full Name"
            className="border-[1px] shadow-md outline-none w-full h-[45px] px-[10px]"
          />
        </div>
        <div>
          <input
            onChange={handleChangecourse}
            value={course}
            type="text"
            placeholder="Course Detail"
            className="border-[1px] shadow-md outline-none w-full h-[45px] px-[10px] "
          />
        </div>
        <div>
          <input
            onChange={handleChangePlaced}
            value={placed}
            type="text"
            placeholder="Placed"
            className="border-[1px] shadow-md outline-none w-full h-[45px] px-[10px] "
          />
        </div>
        <div>
          <input
            onChange={handleChangeYear}
            value={year}
            type="text"
            placeholder="Year"
            className="border-[1px] shadow-md outline-none w-full h-[45px] px-[10px] "
          />
        </div>
        <div>
          <input
            id="image"
            onChange={handleChangeImage}
            type="file"
            className="hidden"
          />
          <div className="flex ">
            <span className="border-[1px] text-[#99919c] rounded-l-[0.2rem] outline-none shadow-md w-[250px] flex items-center px-[10px] text-[14px]">
              {imageName}
            </span>
            <label
              htmlFor="image"
              className="bg-gradient-to-r text-center from-gray-700 to-gray-900 px-[10px] font-mont rounded-r-[0.2rem] cursor-pointer text-white font-bold font-montw-[120px] h-[45px] flex justify-center items-center"
            >
              Choose File
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between w-full">
            <h className="font-fair ">Write Content</h>
          </div>
          <div className="border-t-[1px] border-b-[1px]">
            <ReactQuill
              value={discription}
              onChange={handleChangeContent}
              className=" overflow-y-scroll scroll"
              modules={modules}
            />
          </div>
          {image && (
            <div className="flex justify-start max-w-[180px]  relative  py-[20px]">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="h-[150px] w-[150px] object-cover"
              />
              <span
                onClick={() => {
                  setImageName("Choose files to upload");
                  setImage(null);
                }}
                className="absolute text-[20px] cursor-pointer top-0 right-2 "
              >
                <AiFillCloseCircle />
              </span>
            </div>
          )}
          <div className="w-full flex flex-col gap-[10px] items-center">
            <button
              type="submit"
              className="font-mont bg-gradient-to-r from-gray-700 to-gray-900 text-[white] w-[150px] rounded-[0.2rem] h-[40px]"
            >
              Submit
            </button>
            <div className="text-[red] font-roboto text-[14px]">{success}</div>
            <div className="text-[red] font-roboto text-[14px]">{error}</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Testimony;
