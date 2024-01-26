import React from "react";
import cardInfo from "../../data/cardInfo";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-[30px] mt-[60px]">
      {cardInfo.map((card) => (
        <div
          key={card.id}
          className="w-[325px] h-[232px] bg-[#3B338B] border border-white rounded-[18px]"
        >
          <div className="pl-[20px] py-[28px]">
            <div className="flex justify-center items-center bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] w-[62px] h-[62px] rounded-full">
              <img className="" src={card.imgUrl} alt="icon" />
            </div>
            <h2 className="text-[18px] mt-[20px] text-white font-[700] leading-[30px] capitalize">
              {card.heading}
            </h2>
            <p className="text-[14px] w-[246px] mt-[5px] text-white font-[400] leading-[30px] capitalize">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
