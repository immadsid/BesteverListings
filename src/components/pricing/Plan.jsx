import React from "react";

const Plan = () => {
  return (
    // <div className="max-w-[1230px] min-h-[401px] mt-[35px] px-[42px] rounded-[18px] bg-gray-100">
    //   <div>
    //     <h1 className=" text-[20px] pt-[37px] sm:text-[25px] md:text-[30px] lg:text-[35px] leading-[85px] font-[700] capitalize">
    //       What's included in the{" "}
    //       <span className="bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
    //         {" "}
    //         PRO plan
    //       </span>
    //     </h1>{" "}
    //     <div className="grid md:grid-cols-2 grid-cols-1">
    //       <div className="flex gap-[150px] mt-[40px]">
    //         <div className="flex flex-col">
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox1" />
    //             <label htmlFor="checkbox1" className="checkbox-label">
    //               Unlimited Posts{" "}
    //             </label>
    //           </div>
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox2" />
    //             <label htmlFor="checkbox2" className="checkbox-label">
    //               Custom Domain{" "}
    //             </label>
    //           </div>{" "}
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox3" />
    //             <label htmlFor="checkbox3" className="checkbox-label">
    //               Access To Discord{" "}
    //             </label>
    //           </div>
    //         </div>

    //         <div className="flex flex-col">
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox1" />
    //             <label htmlFor="checkbox1" className="checkbox-label">
    //               Unlimited Posts{" "}
    //             </label>
    //           </div>
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox2" />
    //             <label htmlFor="checkbox2" className="checkbox-label">
    //               Custom Domain{" "}
    //             </label>
    //           </div>{" "}
    //           <div className="flex gap-[10px] pb-[30px]">
    //             <input type="checkbox" id="checkbox3" />
    //             <label htmlFor="checkbox3" className="checkbox-label">
    //               Access To Discord{" "}
    //             </label>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex justify-center w-full max-w-[318px] h-[285px] bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] rounded-[18px] items-center">
    //         <div className="text-center">
    //           <h1 className="text-[70px] mt-[20px] text-white font-[700] leading-[85px] capitalize">
    //             $19
    //           </h1>
    //           <p className="text-[14px] w-[246px] mt-[5px] text-white font-[400] leading-[30px] capitalize">
    //             billed monthly
    //           </p>
    //           <button className="bg-white py-2 px-4 rounded-md mt-4 sm:mt-6">
    //             Get Started
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-[1230px] min-h-[401px] mt-[35px] px-[42px] rounded-[18px] bg-gray-100">
      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] leading-[40px] font-[700] capitalize">
          What's included in the{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
            PRO plan
          </span>
        </h1>
        {/* grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 md:gap-y-0 mt-8 sm:mt-12 md:mt-16 lg:mt-20 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-0 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1" className="checkbox-label">
                Unlimited Posts
              </label>
            </div>
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2" className="checkbox-label">
                Custom Domain
              </label>
            </div>
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox3" />
              <label htmlFor="checkbox3" className="checkbox-label">
                Access To Discord
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox4" />
              <label htmlFor="checkbox4" className="checkbox-label">
                Unlimited Posts
              </label>
            </div>
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox5" />
              <label htmlFor="checkbox5" className="checkbox-label">
                Custom Domain
              </label>
            </div>
            <div className="flex items-center gap-2 sm:pb-[30px]">
              <input type="checkbox" id="checkbox6" />
              <label htmlFor="checkbox6" className="checkbox-label">
                Access To Discord
              </label>
            </div>
          </div>

          <div className="flex justify-center w-full max-w-[318px] h-[285px] bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] rounded-[18px] items-center">
            <div className="text-center">
              <h1 className="text-[70px] mt-[20px] text-white font-[700] leading-[85px] capitalize">
                $19
              </h1>
              <p className="text-[14px] w-[246px] mt-[5px] text-white font-[400] leading-[30px] capitalize">
                billed monthly
              </p>
              <button className="bg-white py-2 px-4 rounded-md mt-4 sm:mt-6">
                Get Started
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
