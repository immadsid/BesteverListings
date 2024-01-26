import React from "react";
import Cards from "./Cards";

const Features = () => {
  return (
    <div className="max-w-[1230px] min-h-[872px] mx-auto mt-[100px] bg-gray-100 rounded-[18px]">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-[55px] font-[500] leading-[85px] pt-[61px]">
          Features
        </h1>
        <p className="max-w-[532px] mx-auto mt-[10px] text-center text-[16px] font-[400] leading-[30px]">
          We know finding deals is tough so we have made it easy for you to
          browse and do due diligence.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Features;
