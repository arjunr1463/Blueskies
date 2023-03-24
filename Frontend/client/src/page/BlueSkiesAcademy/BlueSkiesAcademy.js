import React from "react";
import Banner from "../../component/Banner/Academy";
import Intro from "../../component/BlueSkiesAcademy/BlueSkiesAcademy";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function BlueSkiesAcademy() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Intro />
    </div>
  );
}

export default BlueSkiesAcademy;
