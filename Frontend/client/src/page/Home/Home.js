import React from "react";
import Banner from "../../component/Banner/Home";
import Academy from "../../component/Academy/Academy";
import ContactUs from "../../component/HomeContact/HomeContact";
import HomeCourse from "../../component/HomeCourse/HomeCourse";
import Scroll from "../../component/ScrollToTop/ScrollToTop";
import Placement from "../../component/Placement/Placement";

function Home() {
  return (
    <div className="">
      <Scroll />
      <Banner />
      <Academy />
      <Placement />
      <HomeCourse />
      <ContactUs />
    </div>
  );
}

export default Home;
