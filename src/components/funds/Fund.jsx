import React from "react";

const Fund = () => {
  return (
    <div className="mt-[123px]">
      <div>
        <span className="text-[40px] sm:text-[70px] leading-[40px] font-[700] capitalize bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
          Industrial Fund
        </span>
      </div>

      <div className="max-w-[1230px] min-h-[401px] flex justify-center items-center flex-col sm:flex-row gap-4 sm:gap-[40px] mt-[35px] rounded-[18px] bg-gray-100 px-[20px] sm:px-[149px] py-[66px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/2253/4233/33b7fa63498dd48d3d9ec239d9972465?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlEZWfbl1iR6oqh1S77~wKoQzN76FG~VrOVgRd2GhqHLLasgdzR~EIoCPT2-DYnrOiNEUllaaR~RCnHd-Z5~JD2XVGQKyvjF-5bBEZNJXMu4ApBmWp95BmCNVu~LQSQXi83M-KIWzGd0krDjW88V~aCl~~FRcSmltK5KnIkwrd0z1Bx03geEKIKU4rFWr0JEoxa00Z1XfQ0zUSueVp1vFD~6VluRC9udn91mvlvzfCJa9d3S88JRG2cDF9P2k5Ud-Fuzmbh-RpOwdsL2En~t4zXZihY5q3xughn6aS6n6ElpX2dgt3To0p~vF~SuKrTd1zfmUAz0Zndy12D6UBh~sg__"
          alt="img"
          className="w-full sm:w-[386px] h-[332px] rounded-[18px]"
        />

        <div className="w-full sm:w-[506px] md:w-full h-[227px] flex justify-center items-center md:justify-self-center bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] rounded-[18px]">
          
          <ul className="flex flex-col justify-center text-white text-[14px] font-[400] capitalize w-full">
            <li className="mx-auto py-[12px] cursor-pointer w-full text-center hover:bg-[#EFEFEF] hover:text-[#222222]">
              Description
            </li>
            <li className="mx-auto py-[12px] border-t border-gray-400 cursor-pointer w-full text-center hover:bg-[#EFEFEF] hover:text-[#222222]">
              Management
            </li>
            <li className="mx-auto py-[12px] border-t border-gray-400 cursor-pointer w-full text-center hover:bg-[#EFEFEF] hover:text-[#222222]">
              Financial
            </li>
            <li className="mx-auto py-[12px] border-t border-gray-400 cursor-pointer w-full text-center hover:bg-[#EFEFEF] hover:text-[#222222]">
              Document
            </li>
            <li className="mx-auto py-[12px] border-t border-gray-400 cursor-pointer w-full text-center hover:bg-[#EFEFEF] hover:text-[#222222]">
              Disclaimers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fund;
