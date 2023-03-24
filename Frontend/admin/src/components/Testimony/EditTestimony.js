import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditTestimony() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState(location.state.fullname);
  const [imageName, setImageName] = useState("Choose files to upload");
  const [course, setcourse] = useState(location.state.coursedetail);
  const [placed, setPlaced] = useState(location.state.placed);
  const [year, setYear] = useState(location.state.year);
  const [image, setImage] = useState(location.state.image);
  const [discription, setDiscription] = useState(location.state.description);

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
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
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
        .put(
          `${process.env.REACT_APP_API_URL}/api/Testimony/admin/edit/${location.state.id}`,
          formData
        )
        .then((res) => {
          navigate("/admin/Testimony");
          setFullname("");
          setcourse("");
          setPlaced("");
          setYear("");
          setDiscription("");
          setImageName("Choose files to upload");
          setImage(null);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 font-roboto ">
      <div className="flex flex-col gap-[20px]">
        <h className="font-bold font-mont text-[22px] ">
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

          <div className="w-full flex flex-col gap-[10px] items-center">
            <button
              type="submit"
              className="font-mont bg-gradient-to-r from-gray-700 to-gray-900 text-[white] w-[150px] rounded-[0.2rem] h-[40px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default EditTestimony;
