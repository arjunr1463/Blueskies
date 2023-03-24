import React, { useState, useRef } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("Choose files to upload");
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size <= 1048576) {
        newImages.push(file);
        setImages([...images, ...files]);
        setImageName(`${images.length + files.length} files selected`);
        e.target.value = null;
      } else {
        console.log(`Image ${file.name} is too large`);
        alert(`Please choose a file that is less than 1 MB.`);
      }
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/Gallery/createimage`,
          formData
        )
        .then(() => {
          setImages([]);
          window.location.reload();
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setImageName(`${newImages.length} files selected`);
  };

  return (
    <div className="p-6 flex flex-col gap-10">
      <div>
        <h className="font-bold text-[20px] font-mont text-center">
          Gallery Image Upload
        </h>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageChange}
            ref={inputRef}
          />
          {images.length > 0 ? (
            <div className="flex">
              <span className="border-[1px] text-[#99919c] text-center rounded-l-[0.2rem] outline-none shadow-md w-[250px] flex items-center px-[10px] text-[12px] sm:text-[14px]">
                {imageName}
              </span>
              <button
                className="bg-gradient-to-r from-gray-700 to-gray-900 font-mont text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={() => inputRef.current.click()}
              >
                Add More
              </button>
            </div>
          ) : (
            <div className="flex">
              <span className="border-[1px] text-[#99919c] text-center rounded-l-[0.2rem] outline-none shadow-md w-[250px] flex items-center px-[10px] text-[12px] sm:text-[14px]">
                {imageName}
              </span>
              <button
                className="bg-gradient-to-r from-gray-700 to-gray-900 font-mont text-white font-bold sm:py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={() => inputRef.current.click()}
              >
                Choose File
              </button>
            </div>
          )}
        </div>
        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
            {images.map((image, index) => {
              if (image.size <= 1048576) {
                return (
                  <div className="w-1/4 p-2" key={index}>
                    <div className="relative w-[180px] py-4">
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        className="h-[180px] w-[150px]"
                      />
                      <button
                        className="absolute top-0 right-0 text-[22px] px-2  rounded-md"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <AiFillCloseCircle />
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
      <div>
        {images.length > 0 && (
          <button
            className="bg-gradient-to-tr from-gray-700 to-gray-900 text-white w-[150px] font-mont font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleImageUpload}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
