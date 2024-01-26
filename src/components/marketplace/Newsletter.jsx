import React from "react";

const Newsletter = () => {
  return (
    //mt-[115px] mb-[132px] mx-[265px]  grid sm:grid-cols-2 grid-cols-1 justify-items-center
    // <div className="sm:flex flex-row justify-center gap-[103px] mt-[115px] mb-[132px] mx-[265px] ">
    //   <div className="w-[475px] h-[376px] rounded-sm flex-shrink-0 bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
    //     <img
    //       src="https://s3-alpha-sig.figma.com/img/96b8/a347/a0c3d336408b2c6f32b5b23709612491?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MQfa9a5VZLTksRDY4PleWYL9gMnI-me1-WWPEuYxbKjW-R1eyRJaW0yArHwWgzTNUWe0KunGZvU~LG-TpqWLHdCtLE5UY7~I56gjKgIBrLuyFTWwzIIICUYWPAp7rQ5jnxYqXmLLw~5KcDXIprqc~sNJDOz0-uMW2UxrEz18jy-7bg9kdviZDwQ~irYy6aReGQD1QD69mPjEgXgQf3EwYPc89HTv8-wcOPJbm9VlFfVVhSsCPIwGTusWWc2FO8WCM8TwvGf9kLWpBXfxa2NMfchd0evnxLmmv5yHiCZND7yLoaIv6z6wiy5kiBIKNp4D3OddpvC9Bzl~wOWa05XaTA__"
    //       alt="advertise"
    //       className="relative -top-4 -right-4 w-[475px] h-[376px] object-cover aspect-square rounded-sm"
    //     />
    //   </div>
    //   <div>
    //     <h1 className="w-[455px] text-[55px] font-[500] leading-[74px] capitalize">
    //       Subscribe To Our Newsletter
    //     </h1>
    //     <p>This Is A Great Spot For A newsletter Signup.</p>
    //   </div>
    // </div>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-[115px] mb-10 sm:mb-[132px] mx-4 sm:mx-0">
      <div className="w-full sm:w-[475px] h-[376px] rounded-sm flex-shrink-0 bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
        <img
          src="https://s3-alpha-sig.figma.com/img/96b8/a347/a0c3d336408b2c6f32b5b23709612491?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MQfa9a5VZLTksRDY4PleWYL9gMnI-me1-WWPEuYxbKjW-R1eyRJaW0yArHwWgzTNUWe0KunGZvU~LG-TpqWLHdCtLE5UY7~I56gjKgIBrLuyFTWwzIIICUYWPAp7rQ5jnxYqXmLLw~5KcDXIprqc~sNJDOz0-uMW2UxrEz18jy-7bg9kdviZDwQ~irYy6aReGQD1QD69mPjEgXgQf3EwYPc89HTv8-wcOPJbm9VlFfVVhSsCPIwGTusWWc2FO8WCM8TwvGf9kLWpBXfxa2NMfchd0evnxLmmv5yHiCZND7yLoaIv6z6wiy5kiBIKNp4D3OddpvC9Bzl~wOWa05XaTA__"
          alt="advertise"
          className="relative -top-4 -right-4 w-full h-full object-cover aspect-square rounded-sm"
        />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="w-full sm:w-[455px] text-[32px] sm:text-[55px] font-[500] leading-[44px] sm:leading-[74px] capitalize mb-4 sm:mb-0">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-[16px] mt-[10px] leading-[30px] font-[400]">This Is A Great Spot For A newsletter Signup.</p>
        <form className="flex gap-[18px] mt-[30px]">
          <input className="w-[437px] px-[20px] py-[10px] outline-none border border-[#3B338B] rounded-[6px]" type="email" placeholder="Enter Your Email*" />
          <button className="p-[15px] bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] rounded-[6px]"><img src="/images/Group 11.svg" alt="icon" /></button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
