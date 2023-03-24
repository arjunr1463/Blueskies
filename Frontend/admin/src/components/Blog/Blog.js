import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "./Blog.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Blog() {
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState("");
  const [content, setcontent] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("Choose files to upload");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangecontent = (value) => {
    setcontent(value);
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
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/Blog/createblog`, formData)
        .then((res) => {
          setSuccess(res.data);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setTitle("");
          setcontent("");
          setImageName("Choose files to upload");
        }).then(() => window.location.reload());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between ">
          <h className="font-mont font-bold text-[22px]">Add Blog details</h>
        </div>
        <div className="border-b-[2px] w-[150px]"></div>
        <div>
          <input
            onChange={handleChangeTitle}
            value={title}
            type="text"
            placeholder="Enter Title"
            className="border-[1px] shadow-md outline-none w-full h-[45px] px-[10px] "
          />
        </div>
        <div>
          <input
            onChange={handleChangeImage}
            id="image"
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
        <div className="flex flex-col gap-[10px] ">
          <div className="flex justify-between w-full">
            <h className="font-fair">Write content</h>
          </div>
          <div className="border-t-[1px] border-b-[1px]">
            <ReactQuill
              value={content}
              onChange={handleChangecontent}
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
          <div className="w-full flex justify-center">
            <button className="font-mont bg-gradient-to-r text-center from-gray-700 to-gray-900 text-[white] w-[150px] rounded-[0.2rem] h-[35px]">
              Submit
            </button>
          </div>
          <div>
            <span className="text-[red] font-roboto text-[14px] flex justify-center">
              {success}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Blog;
