import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

function PhotoGrid() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/Gallery/getImages`)
      .then((res) => {
        setImages(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleUnhover = () => {
    setHoveredIndex(-1);
  };

  const filter=images.filter((data)=>data.imagestatus==="active").sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filter.slice(FirstPostIndex, lastPostIndex);

  return (
    <div className="py-8 px-[10px] xl:px-[60px] flex flex-col gap-[30px]">
    <div className="grid grid-cols-1 small:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
      {currentPost.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden w-full h-48 transition-transform-gpu transform-gpu hover:-translate-y-2 shadow-lg rounded-lg"
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleUnhover()}
        >
          <div className="absolute inset-0">
            <img
              src={`data:image/*;base64,${btoa(
                new Uint8Array(image.image.data.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`}
              alt={hoveredIndex === index ? image.image.contentType : ""}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className={`${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            } absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 transition-opacity duration-300`}
          >
            <p className="text-white text-lg font-bold">
              {image.image.contentType}
            </p>
          </div>
        </div>
      ))}
    </div>
     <Pagination
     totalpost={filter.length}
     postsperpage={postsPerPage}
     currentPage={currentPage}
     setCurrentPage={setCurrentPage}
     setPostPerPage={setPostPerPage}
   />
   </div>
  );
}

export default PhotoGrid;
