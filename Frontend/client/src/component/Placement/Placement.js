import React from "react";
import placementImage from "../../asset/Home/placement.jpg";

function Placement() {
  return (
    <div className="pt-[20px] md:pb-[80px]">
      <div className="relative">
        <img
          src={placementImage}
          alt="Placement Cell"
          className="w-full h-[500px] object-cover object-center"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-80"></div>
        <div className="absolute top-0  h-full flex flex-col gap-[10px] md:gap-[20px] lg:gap-[20px] text-center px-[10px] sm:[px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] justify-center">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold font-mont ">
            Get Your Career Soaring with Our 100% Placement Assistance
          </h2>
          <p className="text-white text-md md:text-xl">
            Blueskies Academy provide excellent training facilities in Aviation
            and offers attractive placement assistance in India. We ensures that
            students are able to explore possible career options in reputed
            organizations even before completing their course. We have eminent
            professionals in our placement cell who will ensure excellent
            placement opportunities for our students. Many of our students are
            now placed in different airports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Placement;
