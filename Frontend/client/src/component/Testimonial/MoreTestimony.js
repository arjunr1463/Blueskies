import React from "react";
import { FiX } from "react-icons/fi";

function MoreTestimony({ click, name, about, image }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 flex items-center px-[10px] justify-center z-[999]">
      <div className="bg-white max-w-lg rounded-lg  shadow-lg">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">{name}</h2>
          <button onClick={click}>
            <FiX className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
          </button>
        </div>
        <div className="flex flex-col gap-8 px-[10px] py-[10px] lg:p-8  overflow-y-scroll h-[500px] xl:h-[600px]">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover border-4 border-blue-500"
              src={`data:image/*;base64,${btoa(
                new Uint8Array(image).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`}
              alt=""
            />
          </div>
          <p className="text-gray-800 leading-relaxed font-roboto" dangerouslySetInnerHTML={{__html:about}}/>
        </div>
      </div>
    </div>
  );
}

export default MoreTestimony;
