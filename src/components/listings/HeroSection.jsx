import React from "react";
import Sidebar from "./Sidebar";
import ImageBar from "./ImageBar";
import Card from "./Card";
import Newsletter from "../../components/Newsletter";

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
      <Newsletter />
    </div>
  );
};

export default HeroSection;
