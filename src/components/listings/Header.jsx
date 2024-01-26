import React from "react";

const Header = () => {
  return (
    <div className="w-full mt-2 px-20 py-2 bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
      <div className="flex items-center gap-10">
        <h1 className="text-4xl text-white font-semibold">Listings</h1>
        <div className="px-4 py-2 rounded-full border border-gray-300 text-white">
          <ul className="flex max-w-52 mx-auto gap-8  ">
            <li className="hover:bg-gray-200 rounded-2xl hover:text-gray-800 px-2 cursor-pointer duration-200">All</li>
            <li className="hover:bg-gray-200 rounded-2xl hover:text-gray-800 px-2 cursor-pointer duration-200">Invest</li>
            <li className="hover:bg-gray-200 rounded-2xl hover:text-gray-800 px-2 cursor-pointer duration-200">Pledge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
