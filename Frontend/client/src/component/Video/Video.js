import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ReactPlayer from "react-player";
import Pagination from "../Pagination/Pagination";

function Video() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/Gallery/getVideos`)
      .then((res) => {
        setVideos(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filter = videos
    .filter((data) => data.videostatus === "active")
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filter.slice(FirstPostIndex, lastPostIndex);

  const [showVideo, setShowVideo] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleVideoHover = (index) => {
    setHoveredVideo(index);
    setShowVideo(true);
  };

  const handleVideoLeave = () => {
    setShowVideo(false);
  };

  return (
    <div className="flex flex-col items-center gap-[30px] px-4 py-8">
      <div className="grid grid-cols-1 small:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {currentPost.map((videoUrl, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden transition transform-gpu hover:scale-105 rounded-lg"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => handleVideoHover(index)}
            onMouseLeave={handleVideoLeave}
          >
            {showVideo && hoveredVideo === index && (
              <div className="absolute top-0 left-0 w-full h-full z-10 ">
                <ReactPlayer
                  url={videoUrl.videos}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </div>
            )}
            <ReactPlayer url={videoUrl.videos} width="100%" height="100%" />
          </motion.div>
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

export default Video;
