import React from "react";
import Banner from "../../component/Banner/Contactus";
import Main from "../../component/Contactus/Contactus";
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function ContactUs() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  );
}

export default ContactUs;
