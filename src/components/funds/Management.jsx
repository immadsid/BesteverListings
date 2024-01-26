import React from "react";

const Management = () => {
  return (
    <div>
      <h1 className="text-[40px] text-center mt-[100px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-[500]">
        Manag
        <span className="bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
          ement
        </span>
      </h1>
      <div className="max-w-[900px] min-h-[456px] mx-auto flex flex-col mt-[35px] rounded-[18px] border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Year Founded</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  1889
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  Assets Under Management
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  $1B
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Location</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  New York
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Property Types</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  Residential, Multifamily, Student Housing{" "}
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Website</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  http:/google.com
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Employee Count</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  11-50
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">LinkedIn</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  http:/google.com
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Facebook</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  http:/google.com
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Glassdoor</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  http:/google.com
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Twitter</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  http:/google.com
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Phone</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  124-12-0312-30123-0123-1023{" "}
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Email</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                  test@test.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="mt-[60px] w-[177px] mx-auto bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] px-[30px] py-[12px] text-white rounded-md">
        Meet Our Team
      </button>{" "}
    </div>
  );
};

export default Management;
