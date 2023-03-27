import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import MoreTestimony from "./MoreTestimony";

const TestimonialSlider = () => {
  const [action, setAction] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [select, setSelect] = useState("");
  const handleClick = (id) => {
    setAction(!action);
    setSelect(id)
  };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/Tetsimony/getAllTestimony`)
      .then((res) => {
        setTestimonials(res.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filter = testimonials
    .filter((data) => data.status === "active")
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filter.slice(FirstPostIndex, lastPostIndex);

  return (
    <div className="py-[100px] px-[30px] sm:px-[10px] xl:px-[50px] relative">
      <div className="grid grid-cols-1 small:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
        {currentPost.map((testimonial) => (
          <>
            {action && select===testimonial._id && (
              <MoreTestimony
                click={handleClick}
                name={testimonial.name}
                image={testimonial.image.data.data}
                about={testimonial.description}
              />
            )}
            <div
              key={testimonial.name}
              className="shadow-lg bg-white   py-[50px]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-[10px] items-center  "
              >
                <div className="flex justify-center">
                  <motion.img
                    src={`data:image/*;base64,${btoa(
                      new Uint8Array(testimonial.image.data.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                      )
                    )}`}
                    alt=""
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" rounded-full h-[150px] w-[150px] object-cover"
                  />
                </div>
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-mont font-bold text-center"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-mont text-center"
                >
                  {testimonial.coursedetail}
                </motion.p>
                <div className="flex gap-2 justify-center">
                 
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="font-mont text-center"//
                  >
                    Placed at <span className="text-[#2563eb]">{testimonial.placed}</span>
                  </motion.p>
                </div>
                <div className="flex break-normal h-[210px] overflow-hidden justify-center">
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="max-w-[400px] text-center px-[20px]  font-roboto text-gray-500"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: testimonial.description,
                      }}
                      
                    />
                  </motion.p>
                </div>
                <div className="w-full items-center gap-[3px] cursor-pointer flex justify-end font-mont px-[20px]">
                 <span onClick={()=>handleClick(testimonial._id)}>Read more</span>
                 <span><HiOutlineChevronDoubleRight/></span>
                </div>
              </motion.div>
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
};

export default TestimonialSlider;
