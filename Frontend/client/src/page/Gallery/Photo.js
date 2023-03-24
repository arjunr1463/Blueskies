import React from "react";
import Scroll from "../../component/ScrollToTop/ScrollToTop";
import Main from "../../component/Photo/Photo";
import Banner from "../../component/Banner/Photo";

function Photo() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default Photo;
