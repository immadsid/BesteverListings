import React from "react";

const Sidebar = () => {
  const cardData = [
    "Commercial Real Estate",
    "Mixed-use",
    "Multifamily",
    "Residential",
  ];
  return (
    <div className="max-w-96 px-10 text-gray-600">
      <h3 className="text-lg font-semibold">Your Heading</h3>
      <div className="flex ga-4 justify-center bg-gray-100 rounded-xl mt-4 py-4">
        <ul className="px-2">
          {cardData.map((data) => (
            <li key={data} className="w-full flex gap-3 py-3 border-t grow">
              <input
                className="bg-gray-200"
                type="checkbox"
                name="tasks"
                id="task1"
              />
              <label htmlFor="task1">{data}</label>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="text-lg font-semibold mt-8">Your Heading</h3>
      <div className="flex ga-4 justify-center bg-gray-100 rounded-xl mt-4 py-4">
        <ul className="px-2">
          {cardData.map((data) => (
            <li key={data} className="w-full flex gap-3 py-3 border-t grow">
              <input
                className="bg-gray-200"
                type="checkbox"
                name="tasks"
                id="task1"
              />
              <label htmlFor="task1">{data}</label>
              {/* <p className=" bg-[#8f3c92] rounded-xl px-3 text-white text-sm flex justify-end">1</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
