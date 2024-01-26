import React from "react";

const Action = () => {
  return (
    
    <div className="max-w-[1015px] min-h-[362px] mx-auto mt-[100px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col w-full mx-auto justify-center items-center">
        <button className="w-full sm:max-w-[230px] bg-[#3B338B] text-gray-100 rounded-[110px] px-[25px] py-[8px] mx-auto mb-4 sm:mb-6">
          Follow Along On Twitter
        </button>
        <h1 className="text-center text-[30px] mt-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[1.4] font-[500]">
          A Marketplace Where <br />
          Investor
          <span className="bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
            {" "}
            & Sponsors Meet.
          </span>
        </h1>
        <p className="text-[14px] sm:text-[18px] md:text-[20px] font-[400] text-center mt-4 sm:mt-6">
          Browse ongoing and funded deals from our trusted sponsors.
        </p>
        <div className="flex justify-center mt-4 sm:mt-6 gap-4 sm:gap-6">
          <button className="bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]  py-[12px] px-[30px] text-white rounded-md">
            Get Start
          </button>
          <button className="py-[12px] px-[30px] rounded-md border border-solid border-[#3B338B]">
            Git Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
