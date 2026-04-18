import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-2">
      <div className="border-3  flex items-center px-10  border-white  rounded-full uppercase hover:border-[#d3fd30] hover:text-[#d3fd30]">
        <Link
          className="text-[5vw] mt-6"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div className="border-3 flex items-center px-10 border-white  rounded-full uppercase hover:border-[#d3fd30] hover:text-[#d3fd30]">
        <Link
          className="text-[5vw] mt-6"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
