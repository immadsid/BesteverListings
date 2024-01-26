import React from "react";
import Fund from "../components/funds/Fund";
import Details from "../components/funds/Details";
import Management from "../components/funds/Management";

const Funds = () => {
  return (
    <div className="sm:mx-[183px] mx-[30px]">
      <Fund />
      <Details />
      <Management />
    </div>
  );
};

export default Funds;
