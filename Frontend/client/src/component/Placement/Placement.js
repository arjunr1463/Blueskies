import React from "react";
import placementImage from "../../asset/Home/placement.jpg";

function Placement() {
  return (
    <div className="flex flex-col py-5 lg:pb-20 gap-10 md:gap-10 ">
      <div className="text-center ">
        <h2 className="text-3xl sm:text-5xl font-bold font-mont text-blue-900 tracking-wide">
          100% Placement Assistance
        </h2>
      </div>
      <div className="flex flex-col gap-[15px] md:gap-[10px]">
      <div className="w-full relative  h-96 md:h-[500px] overflow-hidden rounded-md shadow-lg">
        <img
          src={placementImage}
          alt="Placement Cell"
          className="w-full  h-full object-cover object-top transform  transition duration-500 ease-in-out"
        />
        <div className="absolute h-[700px] inset-0 bg-gradient-to-b from-transparent to-gray-900 "></div>
       
      </div>
      <div className="flex justify-center items-center h-full pl-[10px] pr-[10px]">
          <p className="font-open text-[18px] text-gray-500 md:text-[25px]">
            Blueskies Academy provides excellent training facilities in Aviation
            and offers attractive placement assistance in India. We ensure that
            students are able to explore possible career options in reputed
            organizations even before completing their course. Our placement
            cell comprises of eminent professionals who help our students secure
            excellent placement opportunities in the aviation industry. Many of
            our students are now successfully placed in different airports
            across the country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Placement;
