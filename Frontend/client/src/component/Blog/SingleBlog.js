import React, { useEffect, useState,useCallback } from "react";
import Banner from "../Banner/SingleBlog";
import { useLocation } from "react-router-dom";
import "./Blog.css";
import user from "../../asset/User/user.jpg";
import Scroll from "../ScrollToTop/ScrollToTop";
import axios from "axios";
import { BsCalendarDate } from "react-icons/bs";

function SingleBlog() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    website: "",
  });

  const [numComments, setNumComments] = useState(5);

  const handleLoadMore = () => {
    setNumComments(numComments + 5);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/Blog/createComment/${location.state.id}`,
        form
      )
      .then((res) => {
        fetchData();
        setSuccess(res.data.message);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
        setForm({
          name: "",
          email: "",
          comment: "",
          website: "",
        });
      });
  };
  const fetchData = useCallback(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/Blog/createComment/${location.state.id}`
      )
      .then((res) => {
        setData(res.data.comments);
        console.log(res.data.comments)
      });
  }, [location.state.id]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const sortedData = data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const date=new Date(location.state.date.slice(0, 10)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Scroll />
      <Banner title={location.state.title} date={date} />
      <div className="py-[100px] px-[10px]">
        <div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[850px] flex flex-col items-center gap-[50px]">
              <img
                src={`data:image/*;base64,${btoa(
                  new Uint8Array(location.state.image.data.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                alt=""
                className="h-[500px] object-cover"
              />
              <p
                className="font-lato max-w-[750px]"
                dangerouslySetInnerHTML={{ __html: location.state.content }}
              />
              {/*Comments */}
              {data.length === 0 ? (
                ""
              ) : (
                <div className="bg-gray-100 w-full shadow-md rounded-sm px-4 py-6 flex flex-col gap-6">
                  <h2 className="font-bold text-2xl">Comments</h2>
                  {sortedData.slice(0, numComments).map((datas, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow">
                      <div className="flex items-center gap-4">
                        <img src={user} alt="" className="h-10 rounded-full" />
                        <div className="flex flex-col gap-2">
                          <span className="font-bold text-lg">
                            {datas.name}
                          </span>
                          <span className="text-gray-700">{datas.comment}</span>
                        </div>
                      </div>
                      <div className="flex justify-end text-[14px] items-center gap-[5px]">
                        <span>
                          <BsCalendarDate />
                        </span>
                        <span className=" font-roboto ">
                          {datas.createdAt.slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  ))}
                  {numComments < sortedData.length && (
                    <button
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      onClick={handleLoadMore}
                    >
                      Load More
                    </button>
                  )}
                </div>
              )}

              {/**Reply */}
              <div class="w-full py-8  ">
                <div class="flex flex-col gap-[10px] pb-[20px]">
                  <h2 class="text-4xl font-mont font-bold">Leave a Reply</h2>
                  <p class="text-gray-600 font-roboto">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="mb-6">
                    <label
                      for="comment"
                      class="block mb-2 font-medium text-gray-700"
                    >
                      Comment*
                    </label>
                    <textarea
                      value={form.comment}
                      id="comment"
                      name="comment"
                      onChange={handleChange}
                      class="w-full px-4 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 font-medium text-gray-700"
                      >
                        Name*
                      </label>
                      <input
                        value={form.name}
                        id="name"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        class="w-full px-4 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 font-medium text-gray-700"
                      >
                        Email*
                      </label>
                      <input
                        value={form.email}
                        id="email"
                        name="email"
                        onChange={handleChange}
                        type="email"
                        class="w-full px-4 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div class="mb-6">
                    <label
                      for="website"
                      class="block mb-2 font-medium text-gray-700"
                    >
                      Website
                    </label>
                    <input
                      value={form.website}
                      id="website"
                      name="website"
                      onChange={handleChange}
                      type="text"
                      class="w-full px-4 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="save" class="inline-flex items-center">
                      <input
                        type="checkbox"
                        id="save"
                        class="form-checkbox border border-gray-400 rounded-sm "
                      />
                      <span class="ml-2 text-gray-700 font-roboto">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <button
                      type="submit"
                      class="px-4 py-2 bg-[#0f52ba] text-white font-mont font-bold rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      POST COMMENT
                    </button>
                    <div className="text-[14px] flex justify-center text-[red] font-roboto ">
                      {success}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
