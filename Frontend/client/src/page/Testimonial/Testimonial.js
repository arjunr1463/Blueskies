import React from 'react'
import Main from "../../component/Testimonial/Testimonial"
import Banner from "../../component/Banner/Testimonial"
import Scroll from "../../component/ScrollToTop/ScrollToTop";

function Testimonial() {
  return (
    <div>
      <Scroll />
      <Banner />
      <Main />
    </div>
  )
}
const Head = () => {
  return (
    <head>
      <title>
        100% Job Assurance in Airport Jobs - Blueskies Aviation Academy
      </title>

      <meta
        name="description"
        content="Aviation and Hospitality  are developing tremendously. Offering Diploma course in Airport Customer Service. it's 1 6 months course with 100 % Job assurance."
      />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="https:///" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        href="https://www.blueskiesacademy.com/"
        content="Blueskies Academy"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="100% Job Assurance in Airport Jobs - Blueskies Aviation Academy"
      />
      <meta
        property="og:description"
        content="Aviation and Hospitality  are developing tremendously. Aviation and Hospitality  are developing tremendously. Offering Diploma course in Airport Customer Service. it's 1 6 months course with 100 % Job assurance."
      />
      <meta property="og:url" content="https://www.blueskiesacademy.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="100% Job Assurance in Airport Jobs  - Blueskies Aviation Academy"
      />
      <meta
        name="twitter:description"
        content="Aviation and Hospitality  are developing tremendously. Aviation and Hospitality  are developing tremendously. Offering Diploma course in Airport Customer Service. it's 1 6 months course with 100 % Job assurance."
      />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="admin" />
      <meta name="twitter:label2" content="Est. reading time" />
      <meta name="twitter:data2" content="5 minutes" />
    </head>
  );
};
export default function Testimonials() {
  return (
    <>
      <Head />
      <Testimonial/>
    </>
  );
}
