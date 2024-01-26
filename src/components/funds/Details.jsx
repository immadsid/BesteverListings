import React from "react";

const Details = () => {
  return (
    <div>
      <h1 className="text-[40px] text-center mt-[100px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[85px] font-[500] capitalize">
        Details At{" "}
        <span className="bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
          A Glans
        </span>
      </h1>

      <div className="max-w-[900px] min-h-[456px] mx-auto flex flex-col mt-[35px] rounded-[18px] border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Investment Type</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  Industrial
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Deal Market</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  Global
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Target IRR</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  5%
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Return On Cost</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  5x-7x
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Equity Multiple</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  Industrial
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  Estimated Hold Period
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  3 Years
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  First Distribution
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  Dec 2023
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  Minimum Investment
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  $52,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto mt-[66px] border border-gray-100 rounded-[18px] text-center">
        <h1 className="text-[40px] mt-[14px] leading-[85px] font-[500] text-center">Description</h1>
        <p className="w-[829px] mt-[20px]">
          A fun description about this Industrial Fund A fun description about
          this Industrial Fund A fun description about this Industrial Fund A
          fun description about this Industrial Fund
        </p>
      </div>
    </div>
  );
};

export default Details;
