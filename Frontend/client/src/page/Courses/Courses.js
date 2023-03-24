import React from "react";
import Banner from "../../component/Banner/Courses";
import Main from "../../component/Courses/Courses";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function Courses() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default Courses;
