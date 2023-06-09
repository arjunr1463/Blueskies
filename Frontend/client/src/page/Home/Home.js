import React from "react";
import Banner from "../../component/Banner/Home";
import Academy from "../../component/Academy/Academy";
import ContactUs from "../../component/HomeContact/HomeContact";
import HomeCourse from "../../component/HomeCourse/HomeCourse";
import Scroll from "../../component/ScrollToTop/ScrollToTop";
import Placement from "../../component/Placement/Placement";
import { Helmet } from "react-helmet";

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

const Head = () => {
  return (
    <Helmet>
      <title>
        No.1 Aviation Academy in Kerala - Blueskies Aviation Academy
      </title>
      <meta
        name="google-site-verification"
        content="txmeuT0zvxZ4wYO7aYXndtGKctvK32_VOzrgFkKVqBo"
      />
      <meta
        name="description"
        content="Aviation and Hospitality  are developing tremendously. Over the year, the aviation and hospitality sectors had a large number of aviation jobs."
      />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="https://www.blueskiesacademy.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Blueskies Academy" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="No.1 Aviation Academy in Kerala - Blueskies Aviation Academy"
      />
      <meta
        property="og:description"
        content="Aviation and Hospitality  are developing tremendously. Over the year, the aviation and hospitality sectors had a large number of aviation jobs."
      />
      <meta property="og:url" content="https://www.blueskiesacademy.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="No.1 Aviation Academy in Kerala - Blueskies Aviation Academy"
      />
      <meta
        name="twitter:description"
        content="Aviation and Hospitality  are developing tremendously. Over the year, the aviation and hospitality sectors had a large number of aviation jobs."
      />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="admin" />
      <meta name="twitter:label2" content="Est. reading time" />
      <meta name="twitter:data2" content="5 minutes" />
    </Helmet>
  );
};

export default function HomePage() {
  return (
    <>
      <Head />
      <Home />
    </>
  );
}
