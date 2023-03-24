import React from "react";
import Banner from "../../component/Banner/OurBlogs";
import Main from "../../component/Blog/Blog";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function OurBlogs() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default OurBlogs;
