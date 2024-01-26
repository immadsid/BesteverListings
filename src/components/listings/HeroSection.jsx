import React from "react";
import Sidebar from "./Sidebar";
import ImageBar from "./ImageBar";
import Card from "./Card";

const HeroSection = () => {
  return (
    <div className="mt-10 max-w-full mx-4">
      {/* sidebar */}
      {/* <Sidebar /> */}
      {/* right section */}
      <div>
        <h3>Find All Of Our Investment Offering Below!</h3>
        <Card />
      </div>

      {/* News letter */}
      <div className="my-28">
        <div className="flex-wrap sm:flex">
          <div className="w-[475px] h-[376px] rounded-sm flex-shrink-0 bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)]">
            <img
              src="https://s3-alpha-sig.figma.com/img/96b8/a347/a0c3d336408b2c6f32b5b23709612491?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MQfa9a5VZLTksRDY4PleWYL9gMnI-me1-WWPEuYxbKjW-R1eyRJaW0yArHwWgzTNUWe0KunGZvU~LG-TpqWLHdCtLE5UY7~I56gjKgIBrLuyFTWwzIIICUYWPAp7rQ5jnxYqXmLLw~5KcDXIprqc~sNJDOz0-uMW2UxrEz18jy-7bg9kdviZDwQ~irYy6aReGQD1QD69mPjEgXgQf3EwYPc89HTv8-wcOPJbm9VlFfVVhSsCPIwGTusWWc2FO8WCM8TwvGf9kLWpBXfxa2NMfchd0evnxLmmv5yHiCZND7yLoaIv6z6wiy5kiBIKNp4D3OddpvC9Bzl~wOWa05XaTA__"
              alt="advertise"
              className="relative -top-4 -right-4 w-[475px] h-[376px] object-cover aspect-square rounded-sm"
            />
          </div>
          <div>
            <div className="ml-10">
              <h1 className="text-4xl font-semibold mb-4">
                Subscribe To{" "}
                <p className="bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] text-transparent  bg-clip-text font-bold">
                  Our Newsletter
                </p>
              </h1>
              <p>This Is A Great Spot For A newsletter Signup.</p>
              <form className="mt-6 flex gap-4">
                <input
                  className="w-60 p-3  outline-none rounded-md border border-[#3b338b]/50"
                  type="email"
                  name=""
                  placeholder="Enter Your Email*"
                  id=""
                />
                <button className="bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] p-[15px] rounded-md">
                  <img src="/Group 11.svg" alt="icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
