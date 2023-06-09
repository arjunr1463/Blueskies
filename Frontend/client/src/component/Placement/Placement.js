import React from "react";
import placementImage from "../../asset/Home/placement.jpg";

function Placement() {
  return (
    <div className="pt-[20px] md:pb-[80px]">
      <div className="relative">
        <img
          src={placementImage}
          alt="Placement Cell"
          className="w-full xsmall:h-[550px] mob:h-[460px] sm:h-[510px] object-cover object-center"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-80"></div>
        <div className="absolute top-0  h-full flex flex-col gap-[10px] md:gap-[20px] lg:gap-[20px]  px-[10px] sm:px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] justify-center">
          <h2 className="text-white text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-mont ">
            Get Your Career Soaring with Our 100% Placement Assistance
          </h2>
          <p className="text-white text-md text-left px-[5px] md:text-center md:text-xl">
            Blueskies Academy provide excellent training facilities in Aviation
            and offers attractive placement assistance in India. We ensures that
            students are able to explore possible career options in reputed
            organizations even before completing their course. We have eminent
            professionals in our placement cell who will ensure excellent
            placement opportunities for our students. Many of our students are
            now placed in different airports.
          </p>
          <span className="text-[#ee7637] font-bold font-mont text-md text-center sm:text-left px-[5px] md:mt-10 md:text-center md:text-2xl">
            "Within a span of six months, we successfully placed 160+ individuals
            in 9 airports across India."
          </span>
        </div>
      </div>
    </div>
  );
}

export default Placement;
