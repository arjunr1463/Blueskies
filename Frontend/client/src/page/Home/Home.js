import React from "react";
import Banner from "../../component/Banner/Home";
import Academy from "../../component/Academy/Academy";
import ContactUs from "../../component/HomeContact/HomeContact";
import HomeCourse from "../../component/HomeCourse/HomeCourse";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <div className="">
      <Scroll />
      <Banner />
      <Academy />
      <HomeCourse />
      <ContactUs />
    </div>
  );
}

export default Home;
