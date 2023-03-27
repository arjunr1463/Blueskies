import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

function PhotoGrid() {
  const [action, setAction] = useState(false);
  const [select, setSelect] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const handleClick = (id) => {
    setAction(!action);
    setSelect(id);
  };

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
  const filter = images
    .filter((data) => data.imagestatus === "active")
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filter.slice(FirstPostIndex, lastPostIndex);

  return (
    <div className="py-8 px-[10px] relative  xl:px-[60px] flex flex-col gap-[30px]">
      <div className="grid grid-cols-1 small:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
        {currentPost.map((image, index) => (
          <>
            {action && select === image._id && (
              <div className="fixed px-[10px] top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                <div className="relative max-w-3xl mx-auto">
                  <button
                    className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none"
                    onClick={() => setSelect(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={`data:image/*;base64,${btoa(
                        new Uint8Array(image.image.data.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                        )
                      )}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              key={index}
              className="relative overflow-hidden w-full h-48 transition-transform-gpu transform-gpu hover:-translate-y-2 shadow-lg rounded-lg"
            >
              <div className="absolute inset-0">
                <img
                  onClick={() => handleClick(image._id)}
                  src={`data:image/*;base64,${btoa(
                    new Uint8Array(image.image.data.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                    )
                  )}`}
                  alt=""
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>
            </div>
          </>
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
