import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Pagination from "../Pagination/Pagination";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function Blog() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/Blog/createblog`)
      .then((res) => {
        setData(res.data.filter((data) => data.status === "Active"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filter = data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filter.slice(FirstPostIndex, lastPostIndex);

  return (
    <div className="pt-[100px] pb-[30px] px-[10px] lg:px-[40px] flex flex-col gap-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {currentPost.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <img
              src={`data:image/*;base64,${btoa(
                new Uint8Array(item.image.data.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`}
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p
                className="text-gray-700 text-base mb-4 h-[100px] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  {new Date(item.createdAt.slice(0, 10)).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
                <div className="w-full items-center gap-[3px] cursor-pointer flex justify-end font-mont ">
                  <Link
                    state={{
                      id: item._id,
                      image: item.image,
                      title: item.title,
                      content: item.content,
                      date: item.createdAt,
                    }}
                    to="/SingleBlog"
                    
                  >
                    Read More
                  </Link>
                  <span>
                    <HiOutlineChevronDoubleRight />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <Pagination
          totalpost={data.length}
          postsperpage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPostPerPage={setPostPerPage}
        />
      </div>
    </div>
  );
}

export default Blog;
