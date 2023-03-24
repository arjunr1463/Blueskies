import React from "react";
import Main from "../../component/Video/Video";
import Banner from "../../component/Banner/Video";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function Video() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default Video;
