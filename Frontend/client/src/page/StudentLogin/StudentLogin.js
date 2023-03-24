import React from "react";
import Main from "../../component/StudentLogin/StudentLogin";
import Banner from "../../component/Banner/StudentLogin";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function StudentLogin() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default StudentLogin;
